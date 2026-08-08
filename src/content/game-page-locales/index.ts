import { esGamePages } from './es';
import type {
  GamePageKey,
  GamePageLocaleBundle,
  LocalizedGamePage,
} from './types';
import { zhGamePages } from './zh';

export type { GamePageKey, LocalizedGamePage } from './types';

export const enGameCommon: GamePageLocaleBundle['common'] = {
  play: 'Play',
  playNow: 'Play Now',
  guides: 'Guides',
  beginnerGuide: 'Beginner Guide',
  prestigeBankruptcy: 'Prestige & Bankruptcy',
  piggyShuffle: 'Piggy Shuffle',
  demoVsFullGame: 'Demo vs Full Game',
  wiki: 'Wiki',
  piggyBanks: 'Piggy Banks',
  hammers: 'Hammers',
  skillTree: 'Skill Tree',
  achievements: 'Achievements',
  tierLists: 'Tier Lists',
  sourceChecked: 'Source-checked',
  updated: 'Updated August 8, 2026',
  screenshotCaption:
    'Official Bills Must Be Paid screenshot from Rike Games / Steam.',
  onThisPage: 'On this page',
  relatedPages: 'Related pages',
  originalSources: 'Original sources',
  sourcesIntro:
    'Facts on this page are tied to the first-party or clearly labeled community sources below. Community advice is not presented as an official game mechanic.',
};

const bundles: Partial<Record<string, GamePageLocaleBundle>> = {
  zh: zhGamePages,
  es: esGamePages,
};

const PATH_TO_KEY: Record<string, GamePageKey> = {
  '/guides': 'guides',
  '/guides/beginner-guide': 'beginner-guide',
  '/guides/prestige-bankruptcy': 'prestige-bankruptcy',
  '/guides/piggy-shuffle': 'piggy-shuffle',
  '/wiki': 'wiki',
  '/wiki/hammers': 'hammers',
  '/wiki/piggy-banks': 'piggy-banks',
  '/wiki/skill-tree': 'skill-tree',
  '/achievements': 'achievements',
  '/tier-lists': 'tier-lists',
  '/demo-vs-full-game': 'demo-vs-full-game',
};

export function normalizeGamePath(path: string): string {
  if (path.length > 1 && path.endsWith('/')) return path.slice(0, -1);
  return path;
}

export function getGamePageKey(path: string): GamePageKey | undefined {
  return PATH_TO_KEY[normalizeGamePath(path)];
}

export function getLocalizedGamePage(
  path: string,
  locale: string
): LocalizedGamePage | undefined {
  const key = getGamePageKey(path);
  return key ? bundles[locale]?.pages[key] : undefined;
}

export function getGameLocaleBundle(
  locale: string
): GamePageLocaleBundle | undefined {
  return bundles[locale];
}

export function getGameCommon(
  locale: string
): GamePageLocaleBundle['common'] {
  return bundles[locale]?.common ?? enGameCommon;
}
