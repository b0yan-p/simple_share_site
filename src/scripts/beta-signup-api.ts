import type { BetaSignupAdapter } from './beta-signup';

/** The current API deliberately uses the same response for new and existing signups. */
export function createBetaSignupAdapter(baseUrl: string): BetaSignupAdapter {
  const endpoint = `${baseUrl.replace(/\/+$/, '')}/api/beta-signups`;

  return async ({ Email, Name }) => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15_000);

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'omit',
        body: JSON.stringify({ email: Email, name: Name }),
        signal: controller.signal,
      });

      if (response.status !== 200) throw new Error('Beta signup request failed');

      const result: unknown = await response.json();
      if (
        typeof result !== 'object' || result === null ||
        !('message' in result) ||
        result.message !== 'Your beta signup request has been received.'
      ) {
        throw new Error('Unconfirmed beta signup response');
      }

      return 'success';
    } finally {
      clearTimeout(timeout);
    }
  };
}
