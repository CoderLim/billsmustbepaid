import { m } from '@/paraglide/messages.js';
import { SiteHeader } from '@/components/site-header';

export function Header() {
  const navLinks = [
    {
      href: '/guides',
      label: 'Guides',
      children: [
        { href: '/guides/beginner-guide', label: 'Beginner Guide' },
        {
          href: '/guides/prestige-bankruptcy',
          label: 'Prestige & Bankruptcy',
        },
        { href: '/guides/piggy-shuffle', label: 'Piggy Shuffle' },
        { href: '/demo-vs-full-game', label: 'Demo vs Full Game' },
      ],
    },
    {
      href: '/wiki',
      label: 'Wiki',
      children: [
        { href: '/wiki/piggy-banks', label: 'Piggy Banks' },
        { href: '/wiki/hammers', label: 'Hammers' },
        { href: '/wiki/skill-tree', label: 'Skill Tree' },
      ],
    },
    { href: '/achievements', label: 'Achievements' },
    { href: '/tier-lists', label: 'Tier Lists' },
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
