# Bills Must Be Paid — Play Online, Guides, Wiki & Game Resources

**Bills Must Be Paid** is a community-built website for players looking for a fast way to play the browser version, learn the core mechanics, compare the demo with the full game, and find practical guides in one place.

🌐 **Website:** [https://billsmustbepaid.net/](https://billsmustbepaid.net/)

> This repository powers an independent fan/community resource. **Bills Must Be Paid** is developed and published by Rike Games. This project is not affiliated with, endorsed by, or operated by Rike Games, Steam, CrazyGames, or itch.io.

## About Bills Must Be Paid

**Bills Must Be Paid** is an active incremental game built around a simple pressure loop: smash piggy banks, collect money and random loot, pay incoming bills, then invest what remains into upgrades that make future runs stronger. Unlike a passive idle game, **Bills Must Be Paid** keeps the player actively involved because smashing piggy banks consumes stamina and each run ends when the hand gets tired.

The full game was released on Steam on July 29, 2026 by Rike Games. Steam describes **Bills Must Be Paid** as a short active incremental game where players get money, upgrade, and work toward becoming debt free. The official store lists Action, Casual, Indie, Simulation, and Strategy among its genres, with single-player support, Steam achievements, Steam Cloud, and Family Sharing.

Our goal is to make [BillsMustBePaid.net](https://billsmustbepaid.net/) a useful companion for both new and returning players. Instead of forcing players to search across scattered discussions, store pages, and short clips, the site organizes the most useful **Bills Must Be Paid** information into focused guides, wiki-style references, comparisons, and gameplay pages.

## Play Bills Must Be Paid Online

The homepage provides a convenient way to play the **Bills Must Be Paid** browser build online. The embedded browser version is distributed through CrazyGames, while Rike Games also provides official versions through Steam and itch.io.

👉 **Play now:** [https://billsmustbepaid.net/](https://billsmustbepaid.net/)

The browser version is especially useful if you want to understand the basic **Bills Must Be Paid** loop before moving to the complete Steam release. You can learn how stamina works, how piggies behave, why bills matter, how upgrades change a run, and how random loot affects your decisions without digging through multiple sources first.

The website also explains an important distinction: the free browser/demo experience should not be treated as a complete copy of the Steam game. The full **Bills Must Be Paid** release expands progression with additional piggy types, perks, hammers, prestige-style progression, rings and bracelets, desk gadgets, risk mechanics, achievements, and an ending.

## What You Can Find on the Website

### Beginner Guide

The **Bills Must Be Paid** beginner guide explains the basic earn-pay-upgrade loop and helps new players understand what to prioritize during early runs. It covers the relationship between smashing, stamina, bill deadlines, perks, money, and upgrades so players can avoid wasting early resources.

### Prestige & Bankruptcy

Bankruptcy is an important part of long-term **Bills Must Be Paid** progression. The site explains how failed bills relate to bankruptcy and how the full game turns previous progress into long-term upgrades. It also clarifies terminology around prestige or legacy progression rather than inventing unsupported mechanics.

### Piggy Banks

Different piggies are more than cosmetic targets. The **Bills Must Be Paid** piggy bank wiki documents confirmed piggy types and their known behavior, including examples such as Normalito, The Tourist, Woody, Piñata, and El Loco. Where exact hidden statistics are not officially confirmed, the site avoids presenting guesses as facts.

### Hammers

The **Bills Must Be Paid** hammer guide focuses on the trade-offs that matter during a run, including damage, swing speed, critical-hit chance, and hit radius. Different hammers can favor different play styles, so the wiki separates confirmed information from rankings that may depend on balance changes or player testing.

### Skill Tree

The **Bills Must Be Paid** skill tree contains upgrades connected to damage, stamina, recovery, swing speed, luck, and special abilities. The site organizes these branches into a readable reference so players can understand what their coins are buying and how upgrades fit into a broader build.

### Achievements and Tier Lists

For players who want completion goals or build comparisons, the site also includes **Bills Must Be Paid** achievement and tier-list sections. These pages are designed to be updated as more reliable information becomes available, with a preference for source-backed details over copied or speculative content.

### Demo vs Full Game

The **Bills Must Be Paid** demo vs full game page answers one of the most common player questions: what changes when moving from the free version to the complete Steam release? It summarizes the added progression systems and content while keeping browser, demo, and full-release expectations clearly separated.

Popular topics covered across the project include **Bills Must Be Paid release date**, **Bills Must Be Paid demo**, **Bills Must Be Paid full game**, **Bills Must Be Paid wiki**, **Bills Must Be Paid Steam**, **Bills Must Be Paid achievements**, and **Bills Must Be Paid tier skills**. These topics map to real player questions and are expanded only when reliable information is available.

## Core Gameplay Loop

A typical **Bills Must Be Paid** run can be understood in four steps:

1. **Smash piggy banks.** Move the hammer over piggies and break them while stamina lasts.
2. **Collect money and loot.** Piggies can drop different rewards, and some piggy types behave differently.
3. **Pay bills on time.** Bills create the pressure behind the game. Paying them advances progression and can unlock perk choices.
4. **Upgrade for stronger runs.** Spend remaining resources on skills, hammers, and other progression systems so the next cycle becomes more efficient.

This loop is why **Bills Must Be Paid** sits between incremental progression and active arcade-style interaction. There is a constant trade-off between immediate survival, paying the next bill, and investing enough in upgrades to improve future earning power.

## Why This Repository Exists

This repository contains the website code behind [BillsMustBePaid.net](https://billsmustbepaid.net/). The project is designed around three priorities:

- **Useful player-first content:** pages should answer specific **Bills Must Be Paid** questions instead of publishing thin pages that repeat the same introduction.
- **Source-backed information:** game facts should come from official or clearly attributable sources whenever possible, with uncertainty stated when a mechanic is not confirmed.
- **Fast access to gameplay and guides:** visitors should be able to play, learn, or open a focused wiki page without navigating through unnecessary layers.

The site is intentionally structured around search intent such as **Bills Must Be Paid guide**, **Bills Must Be Paid wiki**, **Bills Must Be Paid demo**, **Bills Must Be Paid full game**, **Bills Must Be Paid skill tree**, **Bills Must Be Paid hammers**, **Bills Must Be Paid piggy banks**, **Bills Must Be Paid achievements**, and **Bills Must Be Paid tier list**.

## Tech Stack

The current website is built with a modern TypeScript stack:

- **TanStack Start** with Vite
- **React 19**
- **TypeScript**
- **Tailwind CSS**
- **TanStack Router / Query**
- **Paraglide JS** for internationalization
- **Cloudflare-compatible** production build support

The broader codebase also includes reusable infrastructure for database access, authentication, content management, storage, and server-side functionality. The public-facing **Bills Must Be Paid** experience is focused on game content, fast navigation, responsive presentation, and search-friendly pages.

## Local Development

```bash
pnpm install
cp .env.example .env.development
pnpm dev
```

The development server runs on port `3000` by default.

For a production build:

```bash
pnpm build
pnpm start
```

For Cloudflare-compatible builds:

```bash
pnpm cf:build
```

## Contributing

Contributions that improve accuracy, accessibility, performance, translations, or useful **Bills Must Be Paid** coverage are welcome. Before adding factual game information, prefer official developer posts, the Steam store page, official distribution pages, or reproducible in-game evidence.

Please avoid copying large blocks of text from other websites. Summarize information in original wording, link to the relevant source when appropriate, and clearly mark details that may change between the browser demo and the current Steam version.

## Official Game and Community Resource

If you are looking for the game itself, Rike Games is the developer and publisher of **Bills Must Be Paid**, and Steam is the primary storefront for the full release. This repository does not distribute the commercial Steam game.

If you are looking for a browser play page, beginner help, progression explanations, piggy information, hammer references, skill-tree notes, achievements, or demo/full-game comparisons, visit:

### [https://billsmustbepaid.net/](https://billsmustbepaid.net/)

**BillsMustBePaid.net** is built to make **Bills Must Be Paid** easier to discover, understand, and play while keeping official ownership and community-created guidance clearly separated.

## License

See [LICENSE](./LICENSE) for the repository license terms.
