// Google AdSense — the account <meta> tag plus the adsbygoogle loader,
// rendered as native head elements (not next/script). React 19 hoists the
// <meta> and async <script> into <head> so they land in the SSR HTML directly
// and are visible to the AdSense crawler in View Source. `code` is the
// publisher ID (e.g. "ca-pub-XXXXXXXXXXXXXXXX").
//
// `loadScript` defaults to true. Pass false on pages that primarily frame
// third-party content (e.g. the homepage game embed) so Google ads are not
// served beside framed inventory — meta remains for site verification.
export function Ads({
  code,
  loadScript = true,
}: {
  code: string;
  loadScript?: boolean;
}) {
  if (!code) return null;
  return (
    <>
      <meta name="google-adsense-account" content={code} />
      {loadScript ? (
        <script
          id="adsbygoogle-loader"
          async
          src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${code}`}
          crossOrigin="anonymous"
        />
      ) : null}
    </>
  );
}
