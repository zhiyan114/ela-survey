import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  integrations: [new Sentry.Replay()],
  beforeSend: (event, hint) => {
    if(!['critical', 'error', 'fatal'].find(el=> el === event.level)) return null; // Don't capture anything that isn't an error
    return event;
  },
  replaysOnErrorSampleRate: 1,
  replaysSessionSampleRate: 0.1,
  tracesSampleRate: 0.5,
  tunnel: "/stunnel"
});