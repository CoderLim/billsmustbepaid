import { m } from '@/paraglide/messages.js';
import { SiteHeader } from '@/components/site-header';

export function Header() {
  const navLinks = [
    { href: '/#play', label: m['landing.nav.play']() },
    { href: '/#about', label: m['landing.nav.about']() },
    { href: '/#faq', label: m['landing.nav.faq']() },
    {
      href: 'https://store.steampowered.com/app/4421010/Bills_Must_Be_Paid/',
      label: m['landing.nav.steam'](),
    },
  ];

  return (
    <SiteHeader
      navLinks={navLinks}
      cta={{
        href: 'https://store.steampowered.com/app/4421010/Bills_Must_Be_Paid/',
        label: m['landing.nav.play_on_steam'](),
      }}
    />
  );
}
