/** Official Steam store screenshots (Rike Games), matched to section content. */
export const gameSeoImages = {
  header: {
    src: '/images/game/bills-must-be-paid-header.jpg',
    width: 460,
    height: 215,
  },
  smash: {
    src: '/images/game/smash-piggy-banks.jpg',
    width: 1920,
    height: 1080,
  },
  bills: {
    src: '/images/game/pay-bill-rent.jpg',
    width: 1920,
    height: 1080,
  },
  perks: {
    src: '/images/game/choose-perk-cards.jpg',
    width: 1920,
    height: 1080,
  },
  skill_tree: {
    src: '/images/game/skill-tree.jpg',
    width: 1920,
    height: 1080,
  },
  piggies: {
    src: '/images/game/piggy-types-collection.jpg',
    width: 1920,
    height: 1080,
  },
  hammers: {
    src: '/images/game/hammer-shop.jpg',
    width: 1920,
    height: 1080,
  },
  coins: {
    src: '/images/game/rare-coins-collection.jpg',
    width: 1920,
    height: 1080,
  },
} as const;

export type GameSeoImageKey = keyof typeof gameSeoImages;

/** Which screenshot belongs with each SEO section. */
export const featureSectionImages = {
  smash: 'smash',
  bills: 'perks',
  skill_tree: 'skill_tree',
  piggies: 'piggies',
  hammers: 'hammers',
  coins: 'coins',
} as const satisfies Record<string, GameSeoImageKey>;
