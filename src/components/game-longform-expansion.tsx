import { ArticleSection, FactList } from '@/components/game-content-layout';

type ExpansionKey =
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

type ExpansionSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

const EXPANSIONS: Record<ExpansionKey, ExpansionSection[]> = {
  guides: [
    {
      id: 'guide-roadmap',
      title: 'How to use the Bills Must Be Paid guides',
      paragraphs: [
        'The Bills Must Be Paid guides are organized around the decisions a player actually makes rather than around a generic list of game features. Bills Must Be Paid starts with a simple action—smash piggy banks—but the useful questions quickly become more specific: how stamina limits a run, how bills create deadlines, when upgrades matter, which systems belong to the full release, and which completion goals require a dedicated strategy. This guide hub connects those questions to focused pages so a player can move from a broad explanation to a system reference without repeating the same article.',
        'For a first session, the Bills Must Be Paid beginner guide is the best starting point because it explains the relationship between smashing, stamina, money, bills, perks, hammers, the skill tree and later progression. After that, the Bills Must Be Paid guides split into progression topics and challenge topics. Prestige and bankruptcy belong together because first-party developer material connects a missed bill, a new cycle and permanent jewelry progression. Piggy Shuffle is separated because its most detailed solution is community advice rather than an official mechanic explanation.',
        'The goal of these Bills Must Be Paid guides is not to turn every noun into a thin article. A guide should answer a real player question, show where the answer comes from, and link to the relevant Bills Must Be Paid wiki entry when the player needs reference data rather than step-by-step help. That distinction keeps the guide cluster useful: guides explain what to do, while wiki pages explain what a system or item is.',
      ],
      bullets: [
        'Use the Beginner Guide for the core Bills Must Be Paid gameplay loop.',
        'Use Prestige & Bankruptcy for the full-release cycle and persistent progression.',
        'Use Piggy Shuffle for the Eyes on the Piggy challenge and labeled community advice.',
        'Use the Bills Must Be Paid wiki for hammers, piggy banks and the skill tree.',
      ],
    },
    {
      id: 'guide-version-context',
      title: 'Why version context matters in Bills Must Be Paid guides',
      paragraphs: [
        'Bills Must Be Paid has a browser-playable build, an itch.io HTML5 demo, a Steam demo and a full Steam release. Those versions share the core identity of Bills Must Be Paid, but the developer explicitly said the full game changed prestige and bankruptcy, some upgrade nodes, balance and underlying systems. That is why a Bills Must Be Paid guide should identify whether a statement is about the demo experience, the full release, or a mechanic that is documented across both.',
        'The full Bills Must Be Paid release launched on July 29, 2026, while the Steam demo released earlier on April 21, 2026. Rike Games also stated that demo saves do not transfer to the full game. A guide that ignores that difference can easily give a correct demo answer to a full-game player or repeat a pre-launch assumption after the release changed the system. The Demo vs Full Game page exists to keep that version boundary visible across the rest of the Bills Must Be Paid guides.',
        'This also affects optimization content. Bills Must Be Paid hammer balance can change, and Rike Games has already published named hammer adjustments. The developer also said some skill-tree nodes changed for the full release. For that reason, a useful Bills Must Be Paid guide should prefer versioned evidence and current in-game testing over an undated claim copied from an old community post.',
      ],
    },
    {
      id: 'guide-evidence',
      title: 'What counts as evidence for a Bills Must Be Paid guide',
      paragraphs: [
        'First-party material is the base layer for the Bills Must Be Paid guides. The Rike Games press kit is useful for the core loop, piggy behavior, hammer tradeoffs, skill-tree themes and release positioning. The Steam store page is useful for the current full-game feature set. Steam Community developer announcements are especially important when Bills Must Be Paid changed between the demo and launch build, because those posts explain changes that a store summary cannot capture in detail.',
        'Community information still matters, but the Bills Must Be Paid guides label it. The Piggy Shuffle slow-motion workaround is a good example: the official achievement tells us what the challenge requires, while a Steam Community guide proposes a practical method for tracking the target piggy. Bills Must Be Paid players can use that method without the site pretending that Rike Games designed or guaranteed it.',
        'That evidence policy is also why the Bills Must Be Paid guides do not publish unsupported numerical tables simply to make a page look complete. Where public sources do not provide a full hammer stat sheet, hidden drop rates or a versioned skill-node dataset, the guide says so. The result is a smaller set of claims, but each Bills Must Be Paid guide can be updated cleanly when better evidence becomes available.',
      ],
    },
  ],
  'beginner-guide': [
    {
      id: 'beginner-priorities',
      title: 'Bills Must Be Paid beginner priorities',
      paragraphs: [
        'A useful Bills Must Be Paid beginner guide starts with priorities rather than with a long list of systems. The first priority is understanding that active play creates the resources for everything else. Bills Must Be Paid is described by Rike Games as an active incremental game: you move the hammer, smash piggy banks, spend stamina, collect money and random loot, then decide how to use what you earned. The player is not waiting for a passive number to grow; each run is limited by stamina and shaped by target choice.',
        'The second priority in this Bills Must Be Paid beginner guide is the bill itself. Bills are not decorative objectives. Official descriptions make them the pressure that connects a run to progression. Paying a bill moves the cycle forward and can unlock a perk choice, while failing a bill becomes part of the bankruptcy loop in the full release. That means money has competing uses in Bills Must Be Paid: immediate obligations and longer-term upgrades both matter.',
        'The third priority is learning which upgrades change your run and which systems belong to later progression. Bills Must Be Paid offers a skill tree and multiple hammers, but first-party descriptions present those choices as tradeoffs rather than a single best path. The full release then adds bankruptcy, persistent jewelry progression and broader completion goals. A Bills Must Be Paid beginner does not need to memorize every system at once; the important step is recognizing how one layer feeds the next.',
      ],
      bullets: [
        'Smashing piggies creates money and random loot in Bills Must Be Paid.',
        'Stamina limits how long active smashing can continue in a run.',
        'Bills compete with upgrades for the money you earn.',
        'Perks, hammers and skill-tree choices modify later runs.',
        'Full-game bankruptcy connects failed bills to a new progression cycle.',
      ],
    },
    {
      id: 'beginner-read-systems',
      title: 'How a beginner should read Bills Must Be Paid systems',
      paragraphs: [
        'The Bills Must Be Paid skill tree is best understood as a set of different improvement directions. Rike Games names grip strength, caffeine, gym work, wrist-related upgrades, luck and unusual effects such as falling rocks and hammer electrification. Those examples show why a Bills Must Be Paid beginner guide should not reduce the tree to “buy damage.” Some nodes improve the hand directly, some affect stamina or recovery, and others introduce special effects.',
        'Hammers should be read the same way. Bills Must Be Paid officially compares hammers through critical chance, hit radius, speed and damage. One option can have stronger critical potential with a smaller radius, while another can trade raw damage for faster or wider coverage. Until a complete current stat dataset is available, this Bills Must Be Paid beginner guide treats those dimensions as the reliable lesson and sends detailed equipment questions to the hammer wiki.',
        'Piggy banks are also more than visual skins. Bills Must Be Paid documentation describes different piggies as having different behavior and rewards, and the game includes collection goals for unlocking piggy types. A beginner should therefore expect the roster to change the feel of a run. The piggy-bank wiki keeps the verified behavior notes separate from guessed HP values or drop rates that are not published in the cited material.',
      ],
    },
    {
      id: 'beginner-next-steps',
      title: 'What to learn after the Bills Must Be Paid beginner guide',
      paragraphs: [
        'Once the core loop is clear, the next Bills Must Be Paid topic depends on what is blocking progress. If bills and reset cycles are confusing, move to the Prestige & Bankruptcy guide. If an upgrade choice is unclear, use the skill-tree or hammer wiki. If the goal is 100% completion, the Bills Must Be Paid achievements page provides the official checklist of 27 Steam objectives without using changing global-completion percentages.',
        'Players coming from the browser or Steam demo should also read the Bills Must Be Paid Demo vs Full Game comparison before following a full-release progression strategy. Rike Games said demo saves do not transfer and explained that the launch build changed prestige, bankruptcy, some skill-tree nodes, balance and internal systems. That is a meaningful difference for a Bills Must Be Paid beginner because an older demo guide can be accurate for the demo and still be incomplete for the full release.',
        'The safest way to use this Bills Must Be Paid beginner guide is therefore as a map. Learn the active loop, understand the bill pressure, recognize the major upgrade systems, then move into the dedicated page for the exact problem in front of you. That keeps Bills Must Be Paid information specific, source-backed and easier to update when Rike Games changes the game.',
      ],
    },
  ],
  'prestige-bankruptcy': [
    {
      id: 'prestige-loop',
      title: 'How Bills Must Be Paid prestige fits the bill loop',
      paragraphs: [
        'Bills Must Be Paid prestige only makes sense when it is read together with bankruptcy. In the full release, official developer material connects an unpaid bill with bankruptcy and a new cycle. That turns failure into part of the progression structure rather than a simple stop screen. The Bills Must Be Paid prestige guide therefore starts from the bill: how much progress you make before bankruptcy matters because Rike Games tied post-bankruptcy points to the amount paid toward bills.',
        'The June developer announcement used the term Prestige Points, while the current Bills Must Be Paid Steam description uses legacy points for the long-term currency. The naming difference is important because it shows that official terminology evolved around launch. This Bills Must Be Paid prestige page keeps both terms visible instead of pretending that one source never existed. What remains consistent is the relationship among bill payments, bankruptcy, a new cycle and persistent jewelry progression.',
        'Steam achievements reinforce the same structure. Fresh Start requires the player to declare bankruptcy and start a new cycle. Prestige Jewelry requires unlocking all rings and bracelets. Those objectives are useful because they confirm that Bills Must Be Paid prestige, bankruptcy and jewelry are not isolated flavor systems; they are formal parts of progression and completion.',
      ],
    },
    {
      id: 'prestige-jewelry',
      title: 'Bills Must Be Paid prestige points, rings and bracelets',
      paragraphs: [
        'Rike Games describes rings and bracelets as the destination for the persistent progression earned around bankruptcy. In Bills Must Be Paid, these jewelry items upgrade the hand and can provide unique perks. Public first-party material does not give this page a complete, versioned catalog of every jewelry effect, so the Bills Must Be Paid prestige guide stops at what the developer has actually confirmed instead of filling the gap with invented item stats.',
        'That limitation matters when comparing prestige strategies. A claim such as “always buy this ring first” would require a current list of Bills Must Be Paid jewelry, exact effects, costs and opportunity tradeoffs. The sources used here establish the system but not enough numerical detail for a universal purchase order. For now, the reliable Bills Must Be Paid prestige advice is structural: paying bills before bankruptcy contributes to long-term progression, and rings and bracelets carry that progression into later cycles.',
        'The achievement list adds a completion angle to the same system. Bills Must Be Paid does not treat jewelry only as optional optimization because Prestige Jewelry asks players to unlock the full ring and bracelet set. A player focused on 100% completion should therefore view bankruptcy cycles as part of the path toward a documented achievement, not only as a recovery mechanic after a failed bill.',
      ],
      bullets: [
        'A failed bill is connected to bankruptcy in the full Bills Must Be Paid release.',
        'Bankruptcy starts a new cycle according to the Fresh Start achievement.',
        'The June announcement links more bill payment with more Prestige Points.',
        'Current Steam wording uses legacy points for the post-bankruptcy progression resource.',
        'Rings and bracelets are documented persistent upgrades and a completion goal.',
      ],
    },
    {
      id: 'prestige-version',
      title: 'Why Bills Must Be Paid prestige guides need a version label',
      paragraphs: [
        'Prestige is one of the clearest reasons a Bills Must Be Paid guide must distinguish the demo from the full game. On launch day, Rike Games said demo saves would not transfer because the complete release changed prestige and bankruptcy, some skill-tree nodes, balance and under-the-hood systems. A Bills Must Be Paid prestige explanation copied from an earlier demo build can therefore miss the exact progression model used after July 29, 2026.',
        'This also explains why the Bills Must Be Paid Demo vs Full Game page is linked from the prestige guide. The browser and Steam demo are valuable for learning the core loop, but the full-release cycle is broader. Players moving from a demo should expect a fresh start and should verify any older Bills Must Be Paid prestige tip against the current release before treating it as a permanent rule.',
        'As Rike Games publishes future balance or progression notes, this Bills Must Be Paid prestige guide can be updated against those first-party changes. Until then, the page separates confirmed mechanics from missing numerical detail. That makes the Bills Must Be Paid bankruptcy information less flashy than a speculative min-max guide, but more useful for players who want to know which parts are actually documented.',
      ],
    },
  ],
  'piggy-shuffle': [
    {
      id: 'shuffle-context',
      title: 'Bills Must Be Paid Piggy Shuffle: the verified objective',
      paragraphs: [
        'The Bills Must Be Paid Piggy Shuffle challenge is tied directly to the Steam achievement Eyes on the Piggy. The official achievement objective says to pick the correct piggy in Piggy Shuffle. That short description is the strongest first-party fact available for the challenge, so the Bills Must Be Paid Piggy Shuffle guide builds from it instead of inventing hidden shuffle rules, guaranteed visual tells or undocumented probability claims.',
        'This matters because a narrow challenge can attract a lot of confident community explanations. Bills Must Be Paid players may notice patterns or develop personal tracking methods, but an observation is not automatically an official mechanic. The Bills Must Be Paid Piggy Shuffle guide therefore separates the developer-backed objective from a player-created workaround found on Steam Community.',
        'The broader piggy-bank system provides useful context without changing the challenge rules. Bills Must Be Paid includes multiple piggy types and a collection goal for unlocking every piggy bank. Piggy Shuffle is still treated as its own challenge because the achievement asks for target identification rather than general piggy collection. Players who want the roster and verified behavior descriptions should use the piggy-bank wiki instead of expecting the Bills Must Be Paid Piggy Shuffle page to become a duplicate piggy encyclopedia.',
      ],
    },
    {
      id: 'shuffle-method',
      title: 'How the Bills Must Be Paid Piggy Shuffle slow-motion method works',
      paragraphs: [
        'A Steam Community guide proposes a practical Bills Must Be Paid Piggy Shuffle method: record the shuffle with a phone, replay the movement in slow motion, track the originally marked piggy through the swaps, then return to the game and select the target. The method is easy to understand because it changes the observation problem rather than claiming to change Bills Must Be Paid itself.',
        'The important label is “community method.” Rike Games does not present slow-motion phone recording as an official Bills Must Be Paid Piggy Shuffle mechanic, and this site does not guarantee the community guide title’s claim of perfect success. The value of the method is simply that slower playback can make rapid movement easier to follow. If a player can track the target directly, no recording is required; the recording is an external aid suggested by another player.',
        'For a repeatable attempt, begin recording before the Bills Must Be Paid Piggy Shuffle becomes difficult to follow. Keep the full movement area visible, avoid moving the camera during the shuffle, and review the swaps in sequence rather than jumping directly to the final frame. Those steps describe how to apply the cited community method; they do not claim that Bills Must Be Paid has a hidden frame-by-frame exploit or a special pause state.',
      ],
      bullets: [
        'The official Bills Must Be Paid objective is to choose the correct piggy.',
        'The phone-recording approach comes from a Steam Community guide, not Rike Games.',
        'Slow playback is used to track movement; it does not alter the in-game shuffle.',
        'A claimed 100% success rate is not presented here as an official guarantee.',
      ],
    },
    {
      id: 'shuffle-troubleshooting',
      title: 'Bills Must Be Paid Piggy Shuffle troubleshooting and evidence limits',
      paragraphs: [
        'If the Bills Must Be Paid Piggy Shuffle method still fails, the first thing to check is whether the target remained visible in the recording. Motion blur, a cropped screen or losing the original target at the start can make slow playback useless. Those are recording limitations, not documented Bills Must Be Paid mechanics. A cleaner capture may help more than searching for an unsupported “always pick this position” rule.',
        'The Bills Must Be Paid Piggy Shuffle guide intentionally does not publish anecdotal tells unless they can be tied to repeatable evidence or a stronger source. That protects the page from turning temporary player impressions into permanent claims. If Rike Games later documents how Piggy Shuffle selects movement or target positions, the new first-party information can replace the current uncertainty.',
        'For completion planning, Eyes on the Piggy is only one of 27 Steam achievements in Bills Must Be Paid. After solving Piggy Shuffle, the achievements page can route the player to other documented goals such as accuracy runs, piggy collection, rare-coin completion, bankruptcy cycles and full skill-tree upgrades. That keeps the Bills Must Be Paid Piggy Shuffle guide focused on its exact challenge while still connecting it to the wider completion path.',
      ],
    },
  ],
  wiki: [
    {
      id: 'wiki-scope',
      title: 'What the Bills Must Be Paid Wiki covers',
      paragraphs: [
        'The Bills Must Be Paid Wiki is designed as a reference layer for the systems and objects that players repeatedly need to look up. Instead of turning every search phrase into a disconnected article, the Bills Must Be Paid Wiki groups information by gameplay system: piggy banks, hammers, the skill tree, achievements, versions and progression. That structure lets a player move from “what is this?” to the related guide when the question becomes “what should I do next?”',
        'At the center of Bills Must Be Paid is an active incremental loop. Rike Games describes the game around smashing piggy banks, managing stamina, collecting money and random loot, paying bills, choosing perks and buying upgrades. The Bills Must Be Paid Wiki treats those first-party descriptions as the foundation. More specific pages then document what is known about piggy behavior, hammer tradeoffs, skill-tree themes and full-release progression without inventing missing numerical tables.',
        'The Bills Must Be Paid Wiki also separates reference pages from problem-solving guides. A hammer page can explain the stats Rike Games says matter, while a future ranking page would need current data and a reproducible method. A piggy-bank page can document official behavior and collection goals, while the Piggy Shuffle guide can present the specific achievement objective plus a labeled community workaround. That separation reduces duplicate content across the Bills Must Be Paid Wiki.',
      ],
    },
    {
      id: 'wiki-versioning',
      title: 'Versioning inside the Bills Must Be Paid Wiki',
      paragraphs: [
        'Version context is essential because Bills Must Be Paid exists as a browser-playable experience, an itch.io HTML5 demo, a Steam demo and a paid Steam full release. The Bills Must Be Paid Wiki does not assume that every mechanic is identical across those builds. Rike Games explicitly said the full release changed prestige and bankruptcy, some skill-tree nodes, balance and underlying systems, and that demo saves do not transfer.',
        'The Steam demo released on April 21, 2026, and the full Bills Must Be Paid game launched on July 29, 2026. Those dates give the Bills Must Be Paid Wiki a clear boundary when reading older community material. A guide or screenshot created during the demo period may still explain the shared core loop, but it should not automatically be used as evidence for the current full-release progression model.',
        'Balance updates create the same issue at a smaller scale. Rike Games has already named hammer changes in a demo patch, showing that equipment behavior can change. The Bills Must Be Paid Wiki therefore avoids treating an undated tier placement as permanent. When versioned data is available, it can be added with an update note instead of silently replacing an older claim.',
      ],
      bullets: [
        'Use the Bills Must Be Paid Demo vs Full Game page for release and save differences.',
        'Use first-party patch notes when a stat or mechanic can change over time.',
        'Keep demo observations separate from full-game claims unless the behavior is verified in both.',
        'Do not convert a community tip into an official Bills Must Be Paid rule without evidence.',
      ],
    },
    {
      id: 'wiki-research',
      title: 'How information is added to the Bills Must Be Paid Wiki',
      paragraphs: [
        'The Bills Must Be Paid Wiki prioritizes Rike Games material, the Steam store page, developer announcements and official Steam achievement data. Those sources answer different kinds of questions. The press kit explains the intended game loop and examples. Steam reflects the current commercial release. Developer announcements document changes around launch. Achievements reveal formal completion objectives such as unlocking every piggy, completing the coin collection and buying every skill-tree upgrade.',
        'Community material is used when it adds practical value that first-party sources do not provide. The Bills Must Be Paid Wiki and guides identify that material clearly. The Piggy Shuffle slow-motion workaround, for example, is useful player advice but not a developer-confirmed mechanic. Keeping the label preserves both usefulness and accuracy.',
        'The Bills Must Be Paid Wiki also leaves gaps visible. If no authoritative source provides exact drop rates, every hammer stat or a complete current node table, the page says that the data is missing. That policy is deliberate: a Bills Must Be Paid Wiki becomes more valuable when readers can tell the difference between verified facts, community findings and analysis. Future pages can grow when search demand and better evidence justify them.',
      ],
    },
  ],
  hammers: [
    {
      id: 'hammer-design',
      title: 'How Bills Must Be Paid hammers are designed',
      paragraphs: [
        'Bills Must Be Paid hammers are documented as tradeoff-based equipment rather than simple linear upgrades. Rike Games explicitly names critical chance, hit radius, speed and damage as comparison dimensions. That means a Bills Must Be Paid hammer can be stronger in one dimension while giving something up in another. The official description even contrasts a higher-critical option with a smaller radius against a faster, wider option with lower damage.',
        'That design is why the Bills Must Be Paid hammers page does not declare one universal best hammer from incomplete public data. A useful comparison needs the current values for every relevant hammer and a clear objective. Damage can matter differently from coverage, speed or critical chance. Without the complete table, a Bills Must Be Paid hammers ranking would risk turning a design example into a false numerical conclusion.',
        'The shop screenshot is still useful evidence because it confirms that hammers are a visible equipment and purchase system in Bills Must Be Paid. The screenshot should be read together with the first-party text, not used to guess numbers that are not legible or documented. Where the game UI or a future patch provides reliable values, the Bills Must Be Paid hammers reference can be expanded with version labels.',
      ],
    },
    {
      id: 'hammer-patches',
      title: 'Why Bills Must Be Paid hammer patches matter',
      paragraphs: [
        'Rike Games has already shown that Bills Must Be Paid hammers can change. Demo Bug Fix v0.2.7 named two adjustments: the Ultracrit-Hammer received a somewhat larger radius, and the Toy-Hammer was changed to hit somewhat faster. Those notes do not create a complete Bills Must Be Paid hammer tier list, but they prove that equipment comparisons are time-sensitive.',
        'A static ranking can become misleading after one balance change because Bills Must Be Paid hammer performance depends on the same dimensions the developer adjusts. A radius increase may change multi-target usefulness, while a speed change may affect how an option feels during a stamina-limited run. This page does not calculate a new ranking from those patch notes because the full set of current numbers is not published in the sources used here.',
        'For SEO and player usefulness, the better approach is to keep Bills Must Be Paid hammers tied to a version whenever precise numbers are added. A future table can state the game version, the source or test method and the date checked. If a later Bills Must Be Paid patch changes a hammer again, the old comparison can be updated with a changelog instead of quietly rewriting history.',
      ],
      bullets: [
        'Critical chance is a confirmed Bills Must Be Paid hammer comparison dimension.',
        'Hit radius is a confirmed Bills Must Be Paid hammer comparison dimension.',
        'Speed is a confirmed Bills Must Be Paid hammer comparison dimension.',
        'Damage is a confirmed Bills Must Be Paid hammer comparison dimension.',
        'Ultracrit-Hammer and Toy-Hammer have named developer-documented balance changes.',
      ],
    },
    {
      id: 'hammer-build-context',
      title: 'Bills Must Be Paid hammers in the wider build system',
      paragraphs: [
        'Hammers do not exist in isolation from the rest of Bills Must Be Paid. The skill tree can alter the hand and introduce special effects, while piggy behavior changes the targets being hit. That is another reason a Bills Must Be Paid hammers page should avoid claiming that one stat automatically decides every situation. Equipment value depends on what the player is trying to accomplish and which other systems are active in the current build.',
        'The beginner guide is the best place to understand where Bills Must Be Paid hammers sit in the full loop: smash piggies, spend stamina, pay bills, then decide how leftover money supports upgrades. The skill-tree wiki handles the other major upgrade layer. Keeping those pages linked prevents the Bills Must Be Paid hammers reference from duplicating an entire progression guide.',
        'A future Bills Must Be Paid hammer tier list can become much stronger when it has a complete current item list, exact effects and repeatable criteria such as damage efficiency, coverage or hit speed. Until that evidence exists, the Bills Must Be Paid hammers page stays a verified reference: what stats matter, which named changes are documented and why versioning is necessary.',
      ],
    },
  ],
  'piggy-banks': [
    {
      id: 'piggy-role',
      title: 'How Bills Must Be Paid piggy banks shape a run',
      paragraphs: [
        'Bills Must Be Paid piggy banks are the main active targets that turn hammer swings into money and random loot. Rike Games describes multiple piggy types with different behavior and rewards, so the Bills Must Be Paid piggy banks system is more than a set of cosmetic skins. Some piggies are mobile, some are relatively passive, some can be more valuable, and new types appear as progression continues.',
        'Because every swing uses stamina, target behavior matters to the Bills Must Be Paid loop even when exact hidden stats are not public. A piggy that moves differently changes how the player tracks and hits it, while a piggy described as carrying more money changes the reward context. The Bills Must Be Paid piggy banks page can safely explain those documented differences without inventing HP, spawn probability or drop-rate percentages.',
        'The collection screen is also important evidence. Bills Must Be Paid treats piggy discovery as a trackable system, and the Steam achievement Piggy Bank Collector requires unlocking every piggy bank. That achievement turns the Bills Must Be Paid piggy banks roster into a formal completion goal rather than incidental variety.',
      ],
    },
    {
      id: 'piggy-known-behavior',
      title: 'Verified Bills Must Be Paid piggy bank behavior',
      paragraphs: [
        'First-party material names several Bills Must Be Paid piggy banks and describes them through behavior. Normalito is presented as slow and predictable. The Tourist is large and mostly stationary and restores stamina when smashed. Woody barely moves. Piñata is associated with random rewards. El Loco can move in less predictable ways, including wandering, zigzagging, stopping and charging. These descriptions are useful because they explain the role of variety without requiring guessed numerical stats.',
        'The Bills Must Be Paid piggy banks wiki should treat those named behaviors as a starting dataset rather than as a final encyclopedia. Rike Games says rarer piggies appear as the player progresses, and the collection interface shows that discovery continues beyond the most obvious early types. New verified entries can be added when the game or an authoritative source provides enough information to distinguish them clearly.',
        'Random loot is another confirmed part of Bills Must Be Paid. The existence of randomness does not justify publishing exact odds without evidence. For that reason, this Bills Must Be Paid piggy banks page can say that loot and value differ while leaving unknown probabilities unfilled. A blank or “not published” value is more accurate than a fabricated percentage.',
      ],
      bullets: [
        'Bills Must Be Paid piggy banks can differ in movement and behavior.',
        'Random loot from smashed piggies is documented by Rike Games.',
        'Some piggies are described as more valuable than others.',
        'The Tourist is documented as restoring stamina when smashed.',
        'Unlocking every piggy bank is an official Steam achievement goal.',
      ],
    },
    {
      id: 'piggy-completion',
      title: 'Bills Must Be Paid piggy banks, Piggy Shuffle and completion',
      paragraphs: [
        'Two different achievement paths touch the Bills Must Be Paid piggy banks system. Piggy Bank Collector asks the player to unlock every piggy bank, while Eyes on the Piggy asks the player to identify the correct target in Piggy Shuffle. Those goals should not be merged into one mechanic. The first is a roster-completion objective; the second is a specific challenge with its own guide.',
        'The Bills Must Be Paid Piggy Shuffle page uses the official achievement for the objective and labels the slow-motion recording method as community advice. That separation is useful for this wiki too. A Bills Must Be Paid piggy bank fact belongs here when it describes the roster, behavior or collection system. A workaround for one challenge belongs in the guide that can explain its evidence level in context.',
        'Players working toward 100% completion can use the Bills Must Be Paid achievements page as the master checklist, then return here for piggy-related background. As more authoritative details become available, the Bills Must Be Paid piggy banks reference can grow into a richer table without weakening the distinction between verified facts and community observations.',
      ],
    },
  ],
  'skill-tree': [
    {
      id: 'skill-purpose-expanded',
      title: 'How the Bills Must Be Paid skill tree changes progression',
      paragraphs: [
        'The Bills Must Be Paid skill tree is one of the main ways money earned during active runs feeds back into future performance. Rike Games describes a mix of direct physical upgrades and stranger effects, which makes the Bills Must Be Paid skill tree broader than a simple damage ladder. Grip strength, caffeine, gym work, wrist-related improvements and luck are all named themes, while examples such as falling rocks and an electrified hammer show that later branches can add special behavior.',
        'That variety matters for how the Bills Must Be Paid skill tree should be documented. A source-backed page can group known upgrades by the kind of change they represent, but it should not invent exact node values or a complete tree when the public source does not provide them. The official screenshot is useful for visual context, while the developer description establishes the upgrade themes that can be stated confidently.',
        'The Steam achievement Maxed Out confirms that buying every Bills Must Be Paid skill tree upgrade is a formal completion goal. That objective gives the tree two roles: it changes run performance and it contributes to 100% completion. Players can therefore use the Bills Must Be Paid skill tree page both as a progression reference and as background for the achievement checklist.',
      ],
    },
    {
      id: 'skill-versioning-expanded',
      title: 'Bills Must Be Paid skill tree differences between demo and full game',
      paragraphs: [
        'The Bills Must Be Paid skill tree cannot be treated as permanently identical across versions. Rike Games said at launch that some upgrade nodes changed between the demo and the full release, alongside balance and under-the-hood differences. That statement is one of the reasons the developer gave for demo saves not transferring into the complete Bills Must Be Paid game.',
        'For players reading older guides, this means a Bills Must Be Paid skill tree recommendation needs a version check. An upgrade name, effect or route shown in the demo may not map perfectly to the July 29 full release. The Demo vs Full Game page should be used whenever a Bills Must Be Paid skill tree claim comes from pre-launch material or a demo-era community post.',
        'This version boundary also affects future tier lists. A Bills Must Be Paid skill tree tier list needs the current node set, exact effects and enough context to compare opportunity costs. Without that dataset, ranking every node from S to F would be more confident than the evidence allows. The current Bills Must Be Paid skill tree wiki therefore focuses on verified directions and explicitly leaves the ranking incomplete.',
      ],
      bullets: [
        'Grip strength is a named Bills Must Be Paid skill-tree theme.',
        'Caffeine and gym-related upgrades are named by Rike Games.',
        'Wrist and luck upgrades are part of the developer description.',
        'Special effects such as falling rocks and hammer electrification are documented examples.',
        'Some Bills Must Be Paid skill-tree nodes changed for the full release.',
      ],
    },
    {
      id: 'skill-build-reading',
      title: 'How to read Bills Must Be Paid skill tree advice',
      paragraphs: [
        'A useful Bills Must Be Paid skill tree guide should separate facts from build analysis. The fact layer says which upgrade themes and effects are documented. The analysis layer can discuss why a player might value damage, stamina, recovery, speed, luck or a special effect, but that analysis should not be presented as an official Rike Games ranking.',
        'The same distinction applies when the Bills Must Be Paid skill tree interacts with hammers. Rike Games documents hammer tradeoffs in critical chance, radius, speed and damage. A skill that changes the hand or adds a special effect may alter the context in which those hammer stats matter, but this page does not claim a hidden multiplier without a source. Players who want equipment-specific details can move to the Bills Must Be Paid hammers wiki.',
        'As more current data becomes available, the Bills Must Be Paid skill tree reference can support tables, build examples and a real tier list with a version label. Until then, the most reliable use of this Bills Must Be Paid page is to understand the documented upgrade directions, the demo-to-full-game caveat and the completion objective tied to buying the entire tree.',
      ],
    },
  ],
  achievements: [
    {
      id: 'achievement-overview',
      title: 'How Bills Must Be Paid achievements are structured',
      paragraphs: [
        'Bills Must Be Paid achievements cover more than one style of play. The official Steam list contains 27 objectives spanning bill progression, smashing skill, accuracy, money targets, gambling, loans, collections, prestige and full-system completion. Reading Bills Must Be Paid achievements by category makes the list more useful than treating all 27 as unrelated tasks.',
        'The progression group follows the central Bills Must Be Paid theme directly. Bills Must Be Paid, One Step at a Time, Making Progress and Keeping Up track increasing bill counts, while Freedom asks the player to pay all bills. Fresh Start connects the same progression path to bankruptcy by requiring a new cycle. Together, those Bills Must Be Paid achievements show that bill payment and reset progression are both formal goals.',
        'The smashing group measures hands-on execution. Bills Must Be Paid achievements include raw piggy counts, 100% accuracy runs, consecutive perfect runs, multi-piggy hits and the Piggy Shuffle challenge. That variety reflects the active side of Bills Must Be Paid: the achievement system does not only reward long-term accumulation; it also asks for specific run-level performance.',
      ],
    },
    {
      id: 'achievement-completion',
      title: 'Bills Must Be Paid achievements for money, risk and 100% completion',
      paragraphs: [
        'Money and risk objectives reveal systems that are easy to miss when a player only follows the basic Bills Must Be Paid loop. Better than Nothing, High Roller and Five Figures set single-run earning targets, while The Richest Broke Person asks for a large amount owned at once. Other Bills Must Be Paid achievements explicitly reference a coinflip, going all in, a Super Jackpot and loans involving Big Toni.',
        'The completion group is even more useful as a roadmap. Piggy Bank Collector requires every piggy bank, Coin Collector requires the full coin collection, Bought It All requires every shop item, Prestige Jewelry requires all rings and bracelets, and Maxed Out requires every Bills Must Be Paid skill-tree upgrade. Those objectives confirm several systems as completion targets even when the public store description does not list every underlying item.',
        'For players planning 100%, the Bills Must Be Paid achievements page should function as the master checklist and then link outward. Piggy Shuffle has a dedicated challenge guide. Fresh Start and Prestige Jewelry connect to the prestige and bankruptcy guide. Piggy Bank Collector connects to the Bills Must Be Paid piggy-bank wiki, while Maxed Out connects to the skill-tree reference.',
      ],
      bullets: [
        'Bills Must Be Paid has 27 Steam achievements in the cited official list.',
        'Changing global completion percentages are intentionally not copied into this page.',
        'Achievement names and objectives are preserved as official labels.',
        'Related Bills Must Be Paid guides add context without rewriting the official objective.',
      ],
    },
    {
      id: 'achievement-verification',
      title: 'Why the Bills Must Be Paid achievements page uses the official objective text',
      paragraphs: [
        'Achievement pages are one place where preserving exact labels is better than aggressively rewriting everything. Bills Must Be Paid achievement names are in-game identifiers, and the objective text is the authoritative description of what Steam is tracking. The surrounding Bills Must Be Paid guide copy is rewritten and organized for clarity, while the names and objectives remain faithful to the source.',
        'The page deliberately omits Steam global completion percentages because those values change as more Bills Must Be Paid players unlock achievements. A fixed percentage copied today can become wrong without any change to the achievement itself. The stable data is the Bills Must Be Paid achievement name and objective, so that is what the reference prioritizes.',
        'When an objective needs more help, this Bills Must Be Paid achievements page does not invent a solution. It links to a focused guide with its own evidence. Eyes on the Piggy is the clearest example: Steam confirms the goal, and a separate Bills Must Be Paid Piggy Shuffle guide labels a community slow-motion method rather than presenting it as an official mechanic.',
      ],
    },
  ],
  'tier-lists': [
    {
      id: 'tier-method',
      title: 'What a reliable Bills Must Be Paid tier list needs',
      paragraphs: [
        'A Bills Must Be Paid tier list should be the result of evidence, not the starting point. Rike Games publicly describes several comparison dimensions, but a complete S/A/B ranking needs more than knowing that those dimensions exist. A defensible Bills Must Be Paid tier list needs the current game version, a complete set of items or nodes, exact effects or repeatable tests, and a ranking method that explains what “better” means.',
        'Hammers show the problem clearly. Bills Must Be Paid officially compares critical chance, hit radius, speed and damage, and the developer has already changed named hammers in patch notes. Those facts are enough to build comparison criteria, but not enough to rank every Bills Must Be Paid hammer when the complete current stat table is missing from the public sources used here.',
        'The skill tree has the same version issue. Rike Games said some Bills Must Be Paid skill-tree nodes changed between the demo and full game. A tier list copied from a demo-era build can therefore be outdated even if the author tested it carefully at the time. A current Bills Must Be Paid tier list should identify the build and update date so readers know what the ranking actually describes.',
      ],
    },
    {
      id: 'tier-criteria',
      title: 'Bills Must Be Paid tier list criteria for hammers and skills',
      paragraphs: [
        'For Bills Must Be Paid hammers, the verified criteria begin with damage, speed, critical chance and hit radius. A future ranking could compare those dimensions directly or combine them into scenario-based categories, but the calculation should be visible. A Bills Must Be Paid tier list that ranks a high-damage small-radius hammer against a lower-damage wide-radius hammer needs to say whether the goal is single-target damage, coverage, stamina efficiency or another measurable outcome.',
        'For Bills Must Be Paid skills, the criteria are broader because the developer describes physical upgrades, stamina-related themes, luck and special effects. A useful Bills Must Be Paid tier list may need separate goals such as early progression, consistency, damage, recovery or special-effect builds rather than forcing every node into one universal order. That kind of ranking requires the full current node set and exact effects.',
        'This evidence-first structure also makes future updates easier. If a Bills Must Be Paid patch changes a hammer or node, only the affected comparison needs to be retested. The page can keep a changelog and show why a placement moved. That is more useful than an undated Bills Must Be Paid tier list whose rankings cannot be reproduced.',
      ],
      bullets: [
        'Identify the Bills Must Be Paid version being ranked.',
        'Define measurable criteria before assigning tiers.',
        'Use complete current item or node lists.',
        'Separate official facts from test results and community preference.',
        'Update Bills Must Be Paid tier placements after meaningful balance changes.',
      ],
    },
    {
      id: 'tier-search-intent',
      title: 'Why this Bills Must Be Paid tier list page does not invent rankings',
      paragraphs: [
        'There is clear search value in a Bills Must Be Paid tier list, but search demand is not evidence. Publishing confident S, A and B placements without current data would create a page that looks complete while giving players information that cannot be verified. This Bills Must Be Paid tier list hub instead records the evidence already available and the missing data required for a stronger ranking.',
        'That approach also protects the Bills Must Be Paid wiki from cannibalizing itself. The hammer page owns confirmed hammer facts. The skill-tree page owns verified upgrade descriptions. A future Bills Must Be Paid tier list can then focus on comparative analysis and link back to those references instead of copying the same basic definitions into every ranking page.',
        'When enough current evidence is collected, the Bills Must Be Paid tier list hub can split into dedicated hammer and skill ranking pages. Each page can publish a methodology, version, update date and change notes. Until then, the current Bills Must Be Paid tier list is intentionally transparent about what is known and what still needs testing.',
      ],
    },
  ],
  'demo-vs-full-game': [
    {
      id: 'demo-shared-loop',
      title: 'What the Bills Must Be Paid demo and full game share',
      paragraphs: [
        'The Bills Must Be Paid demo is useful because it exposes the core identity of the game: active hammer control, piggy-bank smashing, stamina, money, random loot, bills and upgrades. Those systems are the foundation that lets a player understand Bills Must Be Paid before buying or starting the complete Steam release. The browser-playable build and the Steam demo are therefore meaningful previews, not unrelated products with the same title.',
        'At the same time, the Bills Must Be Paid demo should not be described as a complete duplicate of the full release. Rike Games announced additional systems and also stated that some existing systems changed for launch. The purpose of this Bills Must Be Paid demo vs full game page is to keep the shared loop and the launch differences separate so players do not assume that every demo guide maps one-to-one onto the July 29 release.',
        'The Steam demo released on April 21, 2026. The full Bills Must Be Paid game launched on July 29, 2026. Rike Games also provides a browser-play option through its own channels and an HTML5 demo on itch.io. These are official or developer-linked ways to experience Bills Must Be Paid, but the public sources do not justify claiming that every browser package is byte-for-byte the same build.',
      ],
    },
    {
      id: 'demo-full-additions',
      title: 'Bills Must Be Paid full game additions announced by Rike Games',
      paragraphs: [
        'Before launch, Rike Games highlighted several additions for the full Bills Must Be Paid release: prestige and bankruptcy progression, rings and bracelets, desk gadgets in a new shop, more piggy types, more perks, more hammers, more gambling or risk mechanics and an ending. Steam also lists achievements and Steam Cloud for the complete Bills Must Be Paid release.',
        'Those additions explain why “Bills Must Be Paid demo vs full game” is more than a content-count comparison. Prestige and bankruptcy change the long-term structure, jewelry introduces persistent progression, and additional equipment and piggy types expand the decision space. The Bills Must Be Paid full game also uses systems that the developer said were rebalanced or changed under the hood around launch.',
        'The announced list should not be treated as a mathematically exhaustive changelog. Rike Games presented it as a set of launch highlights. This Bills Must Be Paid demo comparison therefore says “documented additions” rather than claiming that every difference between every build appears on the page. Future first-party patch notes can extend the comparison when they provide more precise information.',
      ],
      bullets: [
        'Bills Must Be Paid full release includes documented prestige and bankruptcy progression.',
        'Rings and bracelets are documented persistent progression items.',
        'The full release added more piggies, perks and hammers according to Rike Games.',
        'Desk gadgets, risk mechanics and an ending were highlighted before launch.',
        'Steam lists achievements and Steam Cloud for the full Bills Must Be Paid release.',
      ],
    },
    {
      id: 'demo-save-context',
      title: 'Why Bills Must Be Paid demo saves do not transfer',
      paragraphs: [
        'Rike Games explicitly said that Bills Must Be Paid demo saves do not transfer to the full game. The developer did not frame this as an arbitrary restriction: the launch announcement pointed to changed prestige and bankruptcy, different skill-tree nodes, balance differences and under-the-hood changes. The practical result is simple—players moving from a Bills Must Be Paid demo should plan on a fresh full-game start.',
        'That warning is especially important for players with substantial demo progress. A long Bills Must Be Paid demo session can still teach the core loop, but it does not become a saved head start in the complete release. The Beginner Guide explains mechanics shared at a high level, while the Prestige & Bankruptcy guide focuses on the full-release cycle that Rike Games described around launch.',
        'The cleanest way to use this Bills Must Be Paid demo vs full game comparison is to treat it as a version filter. If a claim comes from the demo period, check whether it concerns a shared core mechanic or one of the systems Rike Games said changed. That habit prevents older Bills Must Be Paid advice from being repeated as current full-game fact without verification.',
      ],
    },
  ],
};

export function GameLongformExpansion({ page }: { page: ExpansionKey }) {
  return (
    <>
      {EXPANSIONS[page].map((section) => (
        <ArticleSection key={section.id} id={section.id} title={section.title}>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.bullets ? <FactList items={section.bullets} /> : null}
        </ArticleSection>
      ))}
    </>
  );
}
