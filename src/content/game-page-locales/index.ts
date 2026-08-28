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

type SeoOverride = Partial<
  Pick<
    LocalizedGamePage,
    'metaTitle' | 'metaDescription' | 'title' | 'description'
  >
>;

const pageOverrides: Partial<
  Record<string, Partial<Record<GamePageKey, SeoOverride>>>
> = {
  zh: {
    achievements: {
      metaTitle:
        'Bills Must Be Paid 成就列表 — 全部 27 个 Steam 成就与获取方法',
      metaDescription:
        'Bills Must Be Paid 完整成就列表：27 个 Steam 解锁目标与官方条件，含 Eyes on the Piggy、Fresh Start、Maxed Out 等攻略入口。',
      title: 'Bills Must Be Paid 成就：全部 27 个 Steam 成就',
      description:
        '完整整理 27 个官方 Steam 成就与目标，并为 Eyes on the Piggy、Fresh Start、Piggy Bank Collector 等高意图任务提供对应攻略入口。',
    },
  },
  es: {
    guides: {
      metaTitle:
        'Bills Must Be Paid Guía — Piggy Shuffle, Habilidades y Prestigio',
      metaDescription:
        'Guías de Bills Must Be Paid: Piggy Shuffle, árbol de habilidades, prestigio, bancarrota, Double or Nothing y consejos para principiantes.',
      title: 'Bills Must Be Paid Guía: cómo jugar, progresar y superar retos',
      description:
        'Empieza por el bucle principal y pasa a guías concretas de prestigio, bancarrota, Piggy Shuffle, martillos, habilidades y logros.',
    },
    'beginner-guide': {
      metaTitle: 'Bills Must Be Paid Guía para Principiantes - Cómo Jugar',
      metaDescription:
        'Bills Must Be Paid guía para principiantes: aprende el bucle, la resistencia, las facturas, los martillos, las habilidades y la progresión.',
      title: 'Bills Must Be Paid Guía para Principiantes: Cómo Jugar',
      description:
        'Aprende qué hacer desde la primera partida: romper huchas, gestionar resistencia, pagar facturas, elegir mejoras y preparar la progresión del juego completo.',
    },
    'prestige-bankruptcy': {
      metaTitle: 'Bills Must Be Paid Prestigio y Bancarrota - Guía',
      metaDescription:
        'Bills Must Be Paid prestigio y bancarrota: entiende nuevos ciclos, puntos, anillos, pulseras y por qué la partida de la demo no se transfiere.',
      title: 'Bills Must Be Paid Prestigio y Bancarrota: Guía',
      description:
        'Entiende qué activa la bancarrota, cómo comienza un nuevo ciclo y cómo se conectan los puntos de progresión con anillos y pulseras.',
    },
    'piggy-shuffle': {
      metaTitle:
        'Bills Must Be Paid Piggy Shuffle — Cómo Ganar Eyes on the Piggy',
      metaDescription:
        'Guía de Piggy Shuffle en Bills Must Be Paid: objetivo oficial Eyes on the Piggy y método comunitario a cámara lenta para elegir la hucha correcta.',
      title: 'Bills Must Be Paid Piggy Shuffle: Guía de Eyes on the Piggy',
      description:
        'Consulta el objetivo oficial de Eyes on the Piggy y una solución comunitaria a cámara lenta claramente separada de las mecánicas confirmadas por el desarrollador.',
    },
    achievements: {
      metaTitle:
        'Bills Must Be Paid Logros — Los 27 Desbloqueos de Steam y Cómo Conseguirlos',
      metaDescription:
        'Lista completa de logros de Bills Must Be Paid: los 27 desbloqueos de Steam con objetivos oficiales. Guías para Eyes on the Piggy, Fresh Start y más.',
      title: 'Bills Must Be Paid Logros: los 27 logros de Steam',
      description:
        'Lista completa de los 27 logros oficiales de Steam con objetivos y accesos directos a las guías de Eyes on the Piggy, Fresh Start y otros retos.',
    },
    'demo-vs-full-game': {
      metaTitle: 'Bills Must Be Paid Demo vs Juego Completo — Gratis y Steam',
      metaDescription:
        'Bills Must Be Paid gratis en navegador vs juego completo de Steam: guardados, prestigio, bancarrota, logros y diferencias confirmadas.',
      title: 'Bills Must Be Paid Demo vs Juego Completo: Diferencias',
      description:
        'Compara la demo gratuita con el lanzamiento completo de Steam: compatibilidad de guardados, prestigio, bancarrota, joyería, tienda y contenido añadido.',
    },
  },
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

const ZH_UI_LABELS: Record<string, string> = {
  Wiki: '游戏百科',
  'Tier List': '强度榜',
  'Tier Lists': '强度榜',
};

function localizeZhUiLabel(label: string): string {
  return ZH_UI_LABELS[label] ?? label;
}

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
  const page = key ? bundles[locale]?.pages[key] : undefined;
  if (!page || !key) return page;

  const override = pageOverrides[locale]?.[key];
  const localizedPage = override ? { ...page, ...override } : page;

  if (locale !== 'zh') return localizedPage;

  return {
    ...localizedPage,
    eyebrow: localizeZhUiLabel(localizedPage.eyebrow),
    breadcrumbs: localizedPage.breadcrumbs.map(localizeZhUiLabel),
  };
}

export function getGameLocaleBundle(
  locale: string
): GamePageLocaleBundle | undefined {
  return bundles[locale];
}

export function getGameCommon(locale: string): GamePageLocaleBundle['common'] {
  const common = bundles[locale]?.common ?? enGameCommon;

  if (locale !== 'zh') return common;

  return {
    ...common,
    wiki: '游戏百科',
    tierLists: '强度榜',
  };
}
