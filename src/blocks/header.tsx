import { getGameCommon } from '@/content/game-page-locales';
import { getLocale } from '@/paraglide/runtime.js';
import { m } from '@/paraglide/messages.js';
import { SiteHeader } from '@/components/site-header';

export function Header() {
  const common = getGameCommon(getLocale());
  const navLinks = [
    {
      href: '/guides',
      label: common.guides,
      children: [
        { href: '/guides/beginner-guide', label: common.beginnerGuide },
        {
          href: '/guides/prestige-bankruptcy',
          label: common.prestigeBankruptcy,
        },
        { href: '/guides/piggy-shuffle', label: common.piggyShuffle },
        { href: '/demo-vs-full-game', label: common.demoVsFullGame },
      ],
    },
    {
      href: '/wiki',
      label: common.wiki,
      children: [
        { href: '/wiki/piggy-banks', label: common.piggyBanks },
        { href: '/wiki/hammers', label: common.hammers },
        { href: '/wiki/skill-tree', label: common.skillTree },
      ],
    },
    { href: '/achievements', label: common.achievements },
    { href: '/tier-lists', label: common.tierLists },
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
