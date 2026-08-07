import { envConfigs } from '@/config';

function pageviewDomain(): string {
  try {
    return new URL(envConfigs.app_url).hostname;
  } catch {
    return 'billsmustbepaid.net';
  }
}

/** Pageview.app analytics — Plausible-compatible privacy-friendly page stats. */
export function Pageview({ domain }: { domain?: string }) {
  const dataDomain = domain || pageviewDomain();
  if (!dataDomain) return null;

  return (
    <script
      defer
      data-domain={dataDomain}
      src="https://app.pageview.app/js/script.js"
    />
  );
}
