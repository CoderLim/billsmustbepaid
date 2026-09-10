export type GuideLocale = 'en' | 'zh' | 'es';

export type RelatedGuideLink = {
  title: string;
  description: string;
  href: string;
};

export type GuideCatalogEntry = {
  href: string;
  /** Short hub label on the homepage */
  hubLabel: Record<GuideLocale, string>;
  title: Record<GuideLocale, string>;
  description: Record<GuideLocale, string>;
  group: 'guides' | 'wiki' | 'lists';
};

/**
 * Canonical guide/wiki cards used for:
 * - Related Guides footers (cross-links)
 * - Homepage guides hub
 */
export const GUIDE_CATALOG: GuideCatalogEntry[] = [
  {
    href: '/guides/beginner-guide',
    group: 'guides',
    hubLabel: {
      en: 'Beginner Guide',
      zh: '新手攻略',
      es: 'Guía para principiantes',
    },
    title: {
      en: 'Beginner Guide',
      zh: '新手攻略',
      es: 'Guía para principiantes',
    },
    description: {
      en: 'Core loop: smash piggies, spend stamina, pay bills, and unlock long-term upgrades.',
      zh: '核心循环：敲存钱罐、消耗体力、付账单，并解锁长期成长。',
      es: 'Bucle principal: romper huchas, gastar stamina, pagar facturas y desbloquear progreso.',
    },
  },
  {
    href: '/guides/piggy-shuffle',
    group: 'guides',
    hubLabel: {
      en: 'Piggy Shuffle',
      zh: 'Piggy Shuffle',
      es: 'Piggy Shuffle',
    },
    title: {
      en: 'Piggy Shuffle Guide',
      zh: 'Piggy Shuffle 攻略',
      es: 'Guía de Piggy Shuffle',
    },
    description: {
      en: 'Unlock Eyes on the Piggy — verified objective plus a labeled community slow-motion method.',
      zh: '解锁 Eyes on the Piggy：官方目标 + 明确标注的社区慢动作方法。',
      es: 'Desbloquea Eyes on the Piggy: objetivo verificado y método comunitario a cámara lenta.',
    },
  },
  {
    href: '/guides/prestige-bankruptcy',
    group: 'guides',
    hubLabel: {
      en: 'Prestige Guide',
      zh: '转生与破产',
      es: 'Prestigio y bancarrota',
    },
    title: {
      en: 'Prestige & Bankruptcy Guide',
      zh: '转生与破产攻略',
      es: 'Guía de prestigio y bancarrota',
    },
    description: {
      en: 'How bankruptcy starts a new cycle and how rings, bracelets, and prestige points carry over.',
      zh: '破产如何开启新周期，以及戒指、手镯与转生点数如何保留。',
      es: 'Cómo la bancarrota inicia un ciclo nuevo y qué llevan anillos, pulseras y puntos de prestigio.',
    },
  },
  {
    href: '/guides/double-or-nothing',
    group: 'guides',
    hubLabel: {
      en: 'Double or Nothing',
      zh: 'Double or Nothing',
      es: 'Double or Nothing',
    },
    title: {
      en: 'Double or Nothing Guide',
      zh: 'Double or Nothing 攻略',
      es: 'Guía de Double or Nothing',
    },
    description: {
      en: 'What risk bets change in a run — and what first-party sources do not guarantee.',
      zh: '风险下注如何改变一轮游戏，以及一手来源未保证的内容。',
      es: 'Qué cambian las apuestas de riesgo y qué no garantizan las fuentes oficiales.',
    },
  },
  {
    href: '/demo-vs-full-game',
    group: 'guides',
    hubLabel: {
      en: 'Demo vs Full Game',
      zh: 'Demo 与完整版',
      es: 'Demo vs juego completo',
    },
    title: {
      en: 'Demo vs Full Game',
      zh: 'Demo 与完整版对比',
      es: 'Demo frente al juego completo',
    },
    description: {
      en: 'What the free demo covers versus Steam full release — and why demo saves do not transfer.',
      zh: '免费 Demo 与 Steam 完整版差异，以及 Demo 存档为何不转移。',
      es: 'Qué cubre la demo gratuita frente a Steam completo y por qué no se transfieren partidas.',
    },
  },
  {
    href: '/wiki/skill-tree',
    group: 'wiki',
    hubLabel: {
      en: 'Skill Tree',
      zh: '技能树',
      es: 'Árbol de habilidades',
    },
    title: {
      en: 'Skill Tree Wiki',
      zh: '技能树 Wiki',
      es: 'Wiki del árbol de habilidades',
    },
    description: {
      en: 'Verified upgrade directions and named examples from Rike Games’ skill tree.',
      zh: 'Rike Games 已公开的技能树升级方向与具名示例。',
      es: 'Direcciones de mejora verificadas y ejemplos nombrados del árbol de Rike Games.',
    },
  },
  {
    href: '/wiki/hammers',
    group: 'wiki',
    hubLabel: {
      en: 'Hammer Upgrades',
      zh: '锤子升级',
      es: 'Mejoras de martillo',
    },
    title: {
      en: 'Hammer Upgrades Wiki',
      zh: '锤子升级 Wiki',
      es: 'Wiki de mejoras de martillo',
    },
    description: {
      en: 'Hammer tradeoffs (crit, radius, speed, damage) and named balance patches.',
      zh: '锤子属性取舍（暴击、范围、速度、伤害）与具名平衡补丁。',
      es: 'Compensaciones del martillo (crítico, radio, velocidad, daño) y parches nombrados.',
    },
  },
  {
    href: '/wiki/piggy-banks',
    group: 'wiki',
    hubLabel: {
      en: 'Piggy Banks',
      zh: '存钱罐',
      es: 'Huchas',
    },
    title: {
      en: 'Piggy Banks Wiki',
      zh: '存钱罐 Wiki',
      es: 'Wiki de huchas',
    },
    description: {
      en: 'Piggy types, behavior, and collection goals backed by official sources.',
      zh: '官方来源确认的存钱罐类型、行为与收藏目标。',
      es: 'Tipos de hucha, comportamiento y metas de colección con fuentes oficiales.',
    },
  },
  {
    href: '/wiki/coins',
    group: 'wiki',
    hubLabel: {
      en: 'Coins',
      zh: '硬币',
      es: 'Monedas',
    },
    title: {
      en: 'Coins Wiki',
      zh: '硬币 Wiki',
      es: 'Wiki de monedas',
    },
    description: {
      en: 'Rare coins, Coin Collector, and what we can responsibly say about Coin Rain.',
      zh: '稀有硬币、Coin Collector，以及对 Coin Rain 可负责任说明的内容。',
      es: 'Monedas raras, Coin Collector y qué podemos decir con rigor sobre Coin Rain.',
    },
  },
  {
    href: '/achievements',
    group: 'lists',
    hubLabel: {
      en: 'Achievements',
      zh: '成就',
      es: 'Logros',
    },
    title: {
      en: 'Achievements List',
      zh: '成就列表',
      es: 'Lista de logros',
    },
    description: {
      en: 'All 27 Steam achievements with official objectives and guide links.',
      zh: '全部 27 个 Steam 成就、官方目标与攻略入口。',
      es: 'Los 27 logros de Steam con objetivos oficiales y enlaces a guías.',
    },
  },
  {
    href: '/tier-lists',
    group: 'lists',
    hubLabel: {
      en: 'Tier Lists',
      zh: 'Tier List',
      es: 'Tier lists',
    },
    title: {
      en: 'Tier Lists',
      zh: 'Tier List',
      es: 'Tier lists',
    },
    description: {
      en: 'Evidence standard for rankings — what we can and cannot tier yet.',
      zh: '排名所需的证据标准：目前能排什么、还缺什么。',
      es: 'Criterio de evidencia para rankings: qué sí y qué aún no podemos clasificar.',
    },
  },
];

const BY_HREF = Object.fromEntries(
  GUIDE_CATALOG.map((entry) => [entry.href, entry])
) as Record<string, GuideCatalogEntry>;

/**
 * Cross-link map: each content page → 3–5 related guide/wiki hrefs.
 * Ordered for internal linking priority (user-requested pairs first).
 */
export const RELATED_GUIDES_BY_PATH: Record<string, string[]> = {
  '/guides/piggy-shuffle': [
    '/wiki/skill-tree',
    '/achievements',
    '/guides/prestige-bankruptcy',
    '/wiki/piggy-banks',
    '/guides/beginner-guide',
  ],
  '/wiki/skill-tree': [
    '/guides/piggy-shuffle',
    '/wiki/hammers',
    '/guides/prestige-bankruptcy',
    '/guides/beginner-guide',
    '/achievements',
  ],
  '/wiki/hammers': [
    '/wiki/skill-tree',
    '/guides/piggy-shuffle',
    '/tier-lists',
    '/guides/beginner-guide',
    '/wiki/piggy-banks',
  ],
  '/guides/prestige-bankruptcy': [
    '/guides/piggy-shuffle',
    '/wiki/skill-tree',
    '/achievements',
    '/guides/beginner-guide',
    '/demo-vs-full-game',
  ],
  '/achievements': [
    '/guides/piggy-shuffle',
    '/guides/prestige-bankruptcy',
    '/wiki/skill-tree',
    '/wiki/piggy-banks',
    '/guides/beginner-guide',
  ],
  '/guides/beginner-guide': [
    '/guides/piggy-shuffle',
    '/wiki/skill-tree',
    '/guides/prestige-bankruptcy',
    '/wiki/hammers',
    '/achievements',
  ],
  '/wiki/piggy-banks': [
    '/guides/piggy-shuffle',
    '/achievements',
    '/wiki/skill-tree',
    '/wiki/hammers',
    '/guides/beginner-guide',
  ],
  '/tier-lists': [
    '/wiki/hammers',
    '/wiki/skill-tree',
    '/guides/beginner-guide',
    '/guides/piggy-shuffle',
    '/achievements',
  ],
  '/demo-vs-full-game': [
    '/guides/prestige-bankruptcy',
    '/guides/beginner-guide',
    '/wiki/skill-tree',
    '/achievements',
    '/guides/piggy-shuffle',
  ],
  '/guides/double-or-nothing': [
    '/wiki/coins',
    '/guides/beginner-guide',
    '/achievements',
    '/guides/prestige-bankruptcy',
    '/wiki/skill-tree',
  ],
  '/wiki/coins': [
    '/guides/double-or-nothing',
    '/achievements',
    '/guides/beginner-guide',
    '/wiki/piggy-banks',
    '/guides/piggy-shuffle',
  ],
  '/guides': [
    '/guides/piggy-shuffle',
    '/guides/prestige-bankruptcy',
    '/wiki/skill-tree',
    '/achievements',
    '/guides/beginner-guide',
  ],
  '/wiki': [
    '/guides/beginner-guide',
    '/wiki/skill-tree',
    '/wiki/hammers',
    '/wiki/piggy-banks',
    '/guides/piggy-shuffle',
  ],
};

const BEGINNER_GUIDE_HREF = '/guides/beginner-guide';

/** Hub card title — makes Beginner Guide the clear internal-link center. */
const START_HERE_TITLE: Record<GuideLocale, string> = {
  en: 'Start here: Beginner Guide',
  zh: '从这里开始：新手攻略',
  es: 'Empieza aquí: Guía para principiantes',
};

const START_HERE_DESCRIPTION: Record<GuideLocale, string> = {
  en: 'The hub for the core loop — then branch into every guide and wiki page.',
  zh: '核心循环枢纽页，再由此进入各攻略与 Wiki。',
  es: 'El hub del bucle principal; desde aquí pasas a cada guía y wiki.',
};

function normalizePath(pathname: string): string {
  if (!pathname) return '/';
  const trimmed =
    pathname.length > 1 && pathname.endsWith('/')
      ? pathname.slice(0, -1)
      : pathname;
  // Strip locale prefixes if any leak through (/zh/guides/...)
  return trimmed.replace(/^\/(zh|es)(?=\/|$)/, '') || '/';
}

function toLocale(locale: string): GuideLocale {
  if (locale === 'zh' || locale === 'es') return locale;
  return 'en';
}

function beginnerHubCard(locale: GuideLocale): RelatedGuideLink {
  return {
    href: BEGINNER_GUIDE_HREF,
    title: START_HERE_TITLE[locale],
    description: START_HERE_DESCRIPTION[locale],
  };
}

/**
 * Ensure every content page (except the hub itself) leads with a
 * "Start here: Beginner Guide" related card for internal-link topology.
 */
export function withBeginnerGuideHub(
  links: RelatedGuideLink[],
  pathname: string,
  locale: string
): RelatedGuideLink[] {
  const path = normalizePath(pathname);
  const loc = toLocale(locale);
  if (path === BEGINNER_GUIDE_HREF) return links;

  const rest = links.filter((link) => link.href !== BEGINNER_GUIDE_HREF);
  return [beginnerHubCard(loc), ...rest].slice(0, 5);
}

export function getRelatedGuidesForPath(
  pathname: string,
  locale: string
): RelatedGuideLink[] {
  const path = normalizePath(pathname);
  const hrefs = RELATED_GUIDES_BY_PATH[path];
  if (!hrefs?.length) return [];
  const loc = toLocale(locale);
  const links = hrefs
    .map((href) => BY_HREF[href])
    .filter(Boolean)
    .map((entry) => ({
      href: entry.href,
      title: entry.title[loc],
      description: entry.description[loc],
    }));
  return withBeginnerGuideHub(links, path, loc);
}

export function getHomepageGuideHub(locale: string) {
  const loc = toLocale(locale);
  const groups = {
    guides: GUIDE_CATALOG.filter((e) => e.group === 'guides'),
    wiki: GUIDE_CATALOG.filter((e) => e.group === 'wiki'),
    lists: GUIDE_CATALOG.filter((e) => e.group === 'lists'),
  };

  return {
    title: {
      en: 'Guides & Wiki',
      zh: '攻略与 Wiki',
      es: 'Guías y Wiki',
    }[loc],
    subtitle: {
      en: 'Jump to every guide, wiki page, and list — then play free in the browser below.',
      zh: '直达全部攻略、Wiki 与列表，然后在下方免费开玩。',
      es: 'Accede a todas las guías, páginas wiki y listas; luego juega gratis abajo.',
    }[loc],
    groupLabels: {
      guides: { en: 'Guides', zh: '攻略', es: 'Guías' }[loc],
      wiki: { en: 'Wiki', zh: 'Wiki', es: 'Wiki' }[loc],
      lists: { en: 'Lists', zh: '列表', es: 'Listas' }[loc],
    },
    groups: {
      guides: groups.guides.map((e) => ({
        href: e.href,
        label: e.hubLabel[loc],
        description: e.description[loc],
      })),
      wiki: groups.wiki.map((e) => ({
        href: e.href,
        label: e.hubLabel[loc],
        description: e.description[loc],
      })),
      lists: groups.lists.map((e) => ({
        href: e.href,
        label: e.hubLabel[loc],
        description: e.description[loc],
      })),
    },
  };
}
