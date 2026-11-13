import assert from 'node:assert/strict';
import { after, before, test } from 'node:test';
import { createServer } from 'node:http';
import { createBetaSignupAdapter } from '../src/scripts/beta-signup-api.ts';

let server;
let baseUrl;
let received;
let status = 200;
let response = { message: 'Your beta signup request has been received.' };

before(async () => {
  server = createServer(async (request, reply) => {
    let body = '';
    for await (const chunk of request) body += chunk;
    received = { method: request.method, url: request.url, type: request.headers['content-type'], body: JSON.parse(body) };
    reply.writeHead(status, { 'Content-Type': 'application/json' });
    reply.end(JSON.stringify(response));
  });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(() => new Promise(resolve => { server.close(resolve); server.closeAllConnections(); }));

test('POSTs the email and unmodified honeypot using the API contract', async () => {
  const submit = createBetaSignupAdapter(`${baseUrl}/`);
  for (const Name of ['', '  ', 'bot']) {
    assert.equal(await submit({ Email: 'person@example.com', Name }), 'success');
    assert.deepEqual(received, {
      method: 'POST', url: '/api/beta-signups', type: 'application/json',
      body: { email: 'person@example.com', name: Name },
    });
  }
});

test('does not infer duplicate status from a repeated accepted signup', async () => {
  const submit = createBetaSignupAdapter(baseUrl);
  const fields = { Email: 'person@example.com', Name: '' };
  assert.equal(await submit(fields), 'success');
  assert.equal(await submit(fields), 'success');
});

test('rejects server and validation failures', async () => {
  for (const failure of [400, 500]) {
    status = failure;
    await assert.rejects(createBetaSignupAdapter(baseUrl)({ Email: 'person@example.com', Name: '' }));
  }
  status = 200;
});

test('rejects an unconfirmed response even with HTTP 200', async () => {
  response = { unexpected: true };
  await assert.rejects(createBetaSignupAdapter(baseUrl)({ Email: 'person@example.com', Name: '' }));
});
