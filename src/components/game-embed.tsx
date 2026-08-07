'use client';

import { useState } from 'react';
import { Expand, Loader2 } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const GAME_URL = 'https://cg-cdn.browsergamers.gg/g/bills-must-be-paid';

export function GameEmbed({
  title,
  fullscreenLabel,
  className,
}: {
  title: string;
  fullscreenLabel: string;
  className?: string;
}) {
  const [loading, setLoading] = useState(true);
  const containerId = 'game-embed-container';

  const openFullscreen = () => {
    const el = document.getElementById(containerId);
    if (!el) return;
    void (
      el.requestFullscreen?.() ??
      (
        el as HTMLElement & { webkitRequestFullscreen?: () => void }
      ).webkitRequestFullscreen?.()
    );
  };

  return (
    <div id="play" className={cn('scroll-mt-20', className)}>
      <div
        id={containerId}
        className="bg-muted/40 relative overflow-hidden rounded-xl border shadow-sm"
      >
        {loading && (
          <div className="bg-muted/60 absolute inset-0 z-10 flex items-center justify-center">
            <Loader2 className="text-muted-foreground size-8 animate-spin" />
          </div>
        )}
        <iframe
          src={GAME_URL}
          title={title}
          allow="fullscreen; gamepad"
          loading="eager"
          className="aspect-16/10 w-full border-0 sm:aspect-video"
          onLoad={() => setLoading(false)}
        />
        <div className="absolute right-3 bottom-3 z-20">
          <Button
            type="button"
            variant="secondary"
            size="sm"
            className="gap-1.5 shadow-md"
            onClick={openFullscreen}
          >
            <Expand className="size-3.5" />
            {fullscreenLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
