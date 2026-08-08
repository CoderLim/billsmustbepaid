import { createFileRoute, Outlet } from '@tanstack/react-router';

import { buildPrivatePageHead } from '@/lib/page-head';

export const Route = createFileRoute('/(auth)')({
  head: () => buildPrivatePageHead(),
  component: () => <Outlet />,
});
