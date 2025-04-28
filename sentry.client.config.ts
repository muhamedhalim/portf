// sentry.client.config.ts
// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a user loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import { Replay } from "@sentry/nextjs";

Sentry.init({
  dsn: "https://7b883d075caa19b41fd9b00ae313a1c6@o4506813739368448.ingest.us.sentry.io/4507222371729408",

  // Adjust this value in production, or use tracesSampler for greater control
  tracesSampleRate: 1.0,

  // This sets the sample rate to be 100% on errors.
  replaysOnErrorSampleRate: 1.0,

  // This sets the session sample rate to 10% (adjust based on need)
  replaysSessionSampleRate: 0.1,

  // Enable debug mode only during development
  debug: false,

  // Proper integration setup to avoid serialization issues
  integrations: [
    new Replay({
      maskAllText: true,
      blockAllMedia: true,
    }),
  ],
});
