import {
  ArticleSection,
  FactList,
  GameContentLayout,
} from '@/components/game-content-layout';
import {
  getValidatedSearchPage,
  type ValidatedSearchPageKey,
} from '@/content/validated-search-pages';
import type { GameSeoImageKey } from '@/config/game-seo-images';
import { getLocale } from '@/paraglide/runtime.js';

export function ValidatedSearchPage({
  pageKey,
  imageKey,
}: {
  pageKey: ValidatedSearchPageKey;
  imageKey: GameSeoImageKey;
}) {
  const content = getValidatedSearchPage(pageKey, getLocale());

  return (
    <GameContentLayout
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
      breadcrumbs={content.breadcrumbs}
      imageKey={imageKey}
      imageAlt={content.imageAlt}
      toc={content.toc}
      related={content.related}
      sources={content.sources}
    >
      {content.sections.map((section) => (
        <ArticleSection key={section.id} id={section.id} title={section.title}>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.bullets?.length ? <FactList items={section.bullets} /> : null}
        </ArticleSection>
      ))}
    </GameContentLayout>
  );
}
