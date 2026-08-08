export type GamePageKey =
  | 'guides'
  | 'beginner-guide'
  | 'prestige-bankruptcy'
  | 'piggy-shuffle'
  | 'wiki'
  | 'hammers'
  | 'piggy-banks'
  | 'skill-tree'
  | 'achievements'
  | 'tier-lists'
  | 'demo-vs-full-game';

export type LocalizedSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

export type LocalizedRelated = {
  title: string;
  description: string;
};

export type LocalizedSource = {
  label: string;
  note?: string;
};

export type LocalizedGamePage = {
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  title: string;
  description: string;
  imageAlt: string;
  breadcrumbs: string[];
  toc: string[];
  related: LocalizedRelated[];
  sources: LocalizedSource[];
  sections: LocalizedSection[];
};

export type GamePageLocaleBundle = {
  common: {
    play: string;
    playNow: string;
    guides: string;
    beginnerGuide: string;
    prestigeBankruptcy: string;
    piggyShuffle: string;
    demoVsFullGame: string;
    wiki: string;
    piggyBanks: string;
    hammers: string;
    skillTree: string;
    achievements: string;
    tierLists: string;
    sourceChecked: string;
    updated: string;
    screenshotCaption: string;
    onThisPage: string;
    relatedPages: string;
    originalSources: string;
    sourcesIntro: string;
  };
  pages: Record<GamePageKey, LocalizedGamePage>;
};
