/** Only a confirmed API response may produce either result. */
export type BetaSignupResult = 'success' | 'already-registered';
export type BetaSignupAdapter = (fields: { Email: string; Name: string }) => Promise<BetaSignupResult>;
type BetaSignupState = 'invalid' | 'unavailable' | 'idle' | 'loading' | 'error' | BetaSignupResult;

const messages: Record<BetaSignupState, string> = {
  idle: '',
  invalid: 'Please enter a valid email address.',
  unavailable: 'Beta registration is temporarily unavailable. Please try again later.',
  loading: 'Joining...',
  success: "You're on the list! We'll let you know when beta access is ready.",
  'already-registered': "You're already on the list!",
  error: 'Something went wrong. Please try again.',
};

// The API adapter confirms results; the server handles honeypot checks and duplicates.
export function initializeBetaSignup(form: HTMLFormElement, submit?: BetaSignupAdapter): void {
  const email = form.querySelector<HTMLInputElement>('[type="email"]')!;
  form.noValidate = true;
  const status = form.querySelector<HTMLElement>('[role="status"]')!;
  const buttonLabel = form.querySelector<HTMLElement>('[data-beta-button-label]')!;
  let busy = false;

  function setState(state: BetaSignupState): void {
    form.dataset.state = state;
    form.setAttribute('aria-busy', String(state === 'loading'));
    status.textContent = messages[state];
    buttonLabel.textContent = state === 'loading' ? 'Joining...' : 'Join the Beta';
  }

  setState('idle');
  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (busy) return;
    email.value = email.value.trim();
    const valid = email.checkValidity();
    email.setAttribute('aria-invalid', String(!valid));
    if (!valid) { setState('invalid'); email.focus(); return; }
    const data = new FormData(form);
    // Forward the honeypot unchanged; only the server can enforce bot protection.
    const Name = String(data.get('Name') ?? '');
    if (!submit) { setState('unavailable'); return; }
    const Email = String(data.get('Email') ?? '').trim();
    busy = true;
    setState('loading');
    try {
      const result = await submit({ Email, Name });
      if (result !== 'success' && result !== 'already-registered') throw new Error('Unconfirmed signup');
      setState(result);
      form.reset();
      // Bring the confirmed result into view and announce it to keyboard users.
      status.focus();
    } catch {
      setState('error');
    } finally {
      busy = false;
    }
  });
}
