# Beta signup

The Join Beta form sends JSON directly to `POST /api/beta-signups` on
`PUBLIC_API_BASE_URL`, which defaults to `https://api.shareorb.app`.
Run the .NET API using its `http` launch profile and run Astro with `npm run dev`.

To change the API host, copy `.env.example` to `.env`, update
`PUBLIC_API_BASE_URL`, and restart Astro. For production, set it to the public
HTTPS API URL in the build environment and rebuild the static site. It is public
configuration, so never put secrets in this value.

The request body is `{ "email": "person@example.com", "name": "" }`.
The honeypot value is forwarded unchanged. The server must reject non-whitespace
honeypot values before any signup operations, returning the same generic accepted
response. Existing server protection remains in place.

Confirmation requires HTTP 200 and the API's
`{ "message": "Your beta signup request has been received." }` response.
The API handles duplicates silently; the frontend uses the same confirmation
for both cases. It does not infer duplicate status from HTTP 200.
Validation failures, network failures, unexpected responses, and requests taking
longer than 15 seconds show the existing error feedback. In-flight submissions
are guarded against duplicate requests; the CTA stays enabled.

The API must allow the site's origin through CORS. The current local API already
allows the required POST and Content-Type header. Configure the production site's
origin on the API when deploying.

Run adapter checks with `node --test tests/beta-signup-api.test.mjs` (Node 22.23.4+).
