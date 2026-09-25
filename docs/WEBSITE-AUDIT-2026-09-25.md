# Althia website audit — September 25, 2026

## Findings and changes

| Before | After | Why |
| --- | --- | --- |
| A long, text-only opening with the apps below the fold | A landscape opening with the Althia name, a concise offer, and a direct path to the apps | Establishes the studio and listening experience immediately |
| Ethia occupied the same space as the two released apps | Mythia and Senthia lead; Ethia has a smaller in-development notice | Helps visitors choose something they can actually download |
| Little opportunity to experience the products on the homepage | Playable Mythia sample and three illustrated Senthia destinations | Shows and sounds like the products, instead of only describing them |
| Faint header mark and low-contrast footer text | Visible logo, stronger text contrast, and product/support navigation | Improves recognition, legibility, and wayfinding |
| Original PNG logos downloaded at tiny display sizes | Next Image serves appropriately sized assets | Reduces transfer size and preserves explicit layout dimensions |
| Scroll animations hid Mythia copy before JavaScript ran | Content is visible in server-rendered HTML | Keeps the page usable without JavaScript and easier to read reliably |
| Mouse-only audio seeking, assumed playback success, delayed play call | Native range input, keyboard seeking, media-event state, error feedback, immediate user-initiated playback | Makes audio more accessible and avoids misleading playback state |
| No shared reduced-motion or keyboard-focus treatment | Visible focus rings and reduced-motion support | Supports keyboard and motion-sensitive visitors |
| Senthia absent from studio facts and llms.txt | Both released apps described consistently with links and free-access details | Gives people and answer systems a current product reference |
| Senthia schema used its App Store listing as the product URL | Canonical product URL, stable entity ID, publisher, language, and download links | Connects the app entity to the studio and its official page |
| Missing legal-page canonicals and two omitted sitemap URLs | Explicit canonicals and complete public-page sitemap | Clarifies canonical URLs and discovery |
| A specific Greek count had been generalized to an unsupported “hundreds of Greek stories” | “Hundreds” applies to the overall Mythia library | Avoids implying an unverified collection size |
| Android FAQ pointed to a nonexistent signup flow | Accurate iOS availability and contact information | Removes a dead end |
| Next.js 14.2.5 and vulnerable dependency versions | Next.js 15.5.26 with patched compatible dependencies and local ESLint configuration | Resolves the dependency audit findings and isolates checks from the parent repository |

## Search and answer-engine approach

The improvements prioritize visible, useful content, crawlable links, valid metadata, and consistent product facts. The homepage now answers what Althia makes, which app to choose, supported languages, free access, and production approach. The facts page remains publicly accessible and linked from the footer. No hidden agent-only content or invented reviews/ratings were added.

Google's [AI features guidance](https://developers.google.com/search/docs/appearance/ai-features) emphasizes the same fundamentals as search: accessible pages and helpful, reliable content. The maintained `llms.txt` is an additional reference, not a guarantee of inclusion or ranking.

## Verification

- Production build, TypeScript, and ESLint checks.
- Browser checks across all 15 public HTML routes at 390px and 1440px, with a separate 320px homepage check.
- Page titles, descriptions, canonicals, single H1, JSON-LD parsing, image loading, and overflow checks.
- Automated WCAG A/AA checks on homepage, Mythia, Senthia, About, and Facts.
- FAQ expansion, homepage audio playback, Mythia play/pause and keyboard seeking.
- Reduced-motion and no-JavaScript content checks.
- Sitemap, robots.txt, llms.txt, and both generated social images.
- Dependency audit.

Local production-build Lighthouse mobile run: Performance 98, Accessibility 100, Best Practices 100, SEO 100. Largest Contentful Paint was 2.2 seconds, Total Blocking Time 0 ms, and Cumulative Layout Shift 0. These are lab measurements, not field Core Web Vitals or ranking predictions. The dependency audit reported zero known vulnerabilities after the update.

## Follow-up opportunities

- Search Console and Bing Webmaster Tools data would establish indexing status, queries, click-through rates, and real-user Core Web Vitals. This audit does not claim measured ranking or traffic gains.
- Mythia's public App Store description still mentions “200 stories.” Update that separately in App Store Connect to match the website's flexible catalogue wording.
- A wider original landscape export would make the homepage hero sharper on large monitors; the current hero uses existing Senthia artwork.
- Real app screenshots and verified listener reviews could strengthen the product pages when available.

Automated accessibility checks do not replace a complete manual assistive-technology audit.

## Full-site design follow-through

The visual refresh now extends beyond the homepage to every public HTML route.

| Before | After | Why |
| --- | --- | --- |
| Mythia had a separate dark, card-heavy visual identity | Light editorial layout, original story artwork, prominent audio preview, and a compact mythology directory | Connects the product to Althia while showing the actual library artwork |
| Senthia used a split hero and arched image cards | Full-width illustrated opening, matching typography, simple image gallery, and consistent section spacing | Makes both released apps feel like one studio family |
| About and reference pages were isolated prose columns | Shared reading layout with related-page navigation, stronger headings, and studio artwork | Improves orientation and reading hierarchy |
| Support and legal pages had inconsistent layouts | Common responsive reference navigation, readable text contrast, and flat content sections | Makes important information easy to find without changing policy wording |
| Unplug League's beta page used neon cards and a separate footer | An editorial beta overview with shared navigation and an explicit in-development label | Preserves its distinct proposition without suggesting the app is already released |
| Mythia footer note retained a light-on-light dark-theme color | Theme-aware accessible label color | Corrects the contrast regression discovered during testing |

Verification: production build, TypeScript, and lint passed. All 15 HTML routes were checked at 320, 768, and 1440 pixels (45 page/viewport combinations): HTTP status, metadata, canonicals, H1 count, structured data, image loading, horizontal overflow, screenshots, and automated WCAG A/AA checks. No browser errors or automated accessibility violations remained. Audio playback/pause, keyboard seeking, FAQ expansion, reduced motion, and no-JavaScript content passed.

Local mobile Lighthouse: Mythia 98 performance / 100 accessibility / 100 best practices / 100 SEO; Senthia 97 / 100 / 100 / 100. Both recorded zero layout shift and zero total blocking time. These are lab results, not production field measurements.

The three new Mythia images are existing studio artwork from the local Althia artwork library, delivered through Next Image. Homepage styling, the square Senthia icon fix, canonical URLs, and existing legal policy wording are preserved.
