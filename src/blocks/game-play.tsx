import { m } from '@/paraglide/messages.js';
import { GameEmbed } from '@/components/game-embed';

export function GamePlay() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-6 sm:px-6 sm:py-8">
      <GameEmbed
        title={m['landing.game.embed_title']()}
        fullscreenLabel={m['landing.game.fullscreen']()}
      />
    </section>
  );
}
