import * as Sentry from '@sentry/react';
import { Outlet } from '@modern-js/runtime/router';

Sentry.init({
  dsn: 'DSN',
  tracesSampleRate: 1.0,
});

export default function Layout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
