import { m } from '@/paraglide/messages.js';
import { SiteFooter, type FooterColumn } from '@/components/site-footer';

export function Footer() {
  const columns: FooterColumn[] = [
    {
      title: m['landing.footer.game'](),
      links: [
        { href: '/#play', label: m['landing.nav.play']() },
        { href: '/#about', label: m['landing.nav.about']() },
        { href: '/#faq', label: m['landing.nav.faq']() },
      ],
    },
    {
      title: m['landing.footer.play_elsewhere'](),
      links: [
        {
          label: m['landing.footer.steam'](),
          href: 'https://store.steampowered.com/app/4421010/Bills_Must_Be_Paid/',
        },
        {
          label: m['landing.footer.crazygames'](),
          href: 'https://www.crazygames.com/game/bills-must-be-paid',
        },
        {
          label: m['landing.footer.itch'](),
          href: 'https://rikegames.itch.io/bills-must-be-paid',
        },
        {
          label: m['landing.footer.developer'](),
          href: 'https://rikegames.com/bills-must-be-paid',
        },
      ],
    },
    {
      title: m['landing.footer.legal'](),
      links: [
        { label: m['landing.footer.privacy'](), href: '/privacy-policy' },
        { label: m['landing.footer.terms'](), href: '/terms-of-service' },
        {
          label: m['landing.footer.contact'](),
          href: 'mailto:support@billsmustbepaid.net',
        },
      ],
    },
  ];

  return (
    <SiteFooter
      tagline={m['landing.footer.tagline']()}
      columns={columns}
      copyright={m['landing.footer.copyright']()}
    />
  );
}
