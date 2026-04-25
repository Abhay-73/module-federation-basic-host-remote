import * as Sentry from '@sentry/react';
import { Outlet } from '@modern-js/runtime/router';

Sentry.init({
  dsn: 'https://0c33c3ca3323110073230c598d38ba74@o4511270097321984.ingest.de.sentry.io/4511270106366032.',
  tracesSampleRate: 1.0,
});

export default function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}