import { gameSeoImages, type GameSeoImageKey } from '@/config/game-seo-images';
import { cn } from '@/lib/utils';
import { m } from '@/paraglide/messages.js';

export function GameSeoFigure({
  imageKey,
  className,
  priority,
}: {
  imageKey: GameSeoImageKey;
  className?: string;
  priority?: boolean;
}) {
  const image = gameSeoImages[imageKey];
  const alt = m[`landing.seo.images.${imageKey}.alt` as keyof typeof m]();
  const caption =
    m[`landing.seo.images.${imageKey}.caption` as keyof typeof m]();

  return (
    <figure
      className={cn(
        'border-border bg-muted/20 overflow-hidden rounded-xl border',
        className
      )}
    >
      <img
        src={image.src}
        alt={alt}
        width={image.width}
        height={image.height}
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : undefined}
        decoding="async"
        className="aspect-video w-full object-cover"
      />
      {caption ? (
        <figcaption className="text-muted-foreground px-4 py-3 text-sm leading-6">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
