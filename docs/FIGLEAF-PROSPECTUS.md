# Figleaf concept prospectus — v0.3

Public route: `/figleaf`. Independent Figleaf project hosted in the existing Althia Next.js/Vercel site. No Althia product affiliation. Route remains noindex for discussion. The original Fig fruit asset is preserved for unrelated pages; Figleaf uses its leaf mark.

## Product direction

- Primary customers: managed sites, national parks, museums, heritage authorities, and private operators.
- The context layer can exist independently of site participation. Figleaf baseline coverage, specialist contributions, and institutional contributions retain distinct provenance.
- Expert credentials, sources, rights, editorial confidence, competing interpretations, and review status belong to specific records and revisions.
- The visitor receives an AI-personalized journey from context, with an audio-first interface, text alternatives, location relevance, and conversational Q&A.
- Full offline Q&A is a target requirement on supported devices, subject to empirical compatibility and quality validation. QR or pre-visit package acquisition requires connectivity first.
- The site’s value includes aggregate visitor insight tied to editorial and operational actions. Default proposal: optional consent, minimization, delayed sync, and small-group suppression.
- Cross-site recommendations and a consumer layer are phase two.

## Implemented website interactions

- Visitor profile, interests, and duration deterministically change the sample route and story text.
- Simulated package readiness, offline scenario, arrival, silent audio controls, local scripted Q&A, context-gap responses, progress, and finish states.
- Studio coverage view, POI record editor/provenance preview, curated seed-route editor, selectable synthetic visitor insights, and a simulated release gate. POI edits invalidate the gate’s checks.
- Discussion prompts for archaeologist, CS specialist, and site manager. Explicit browser-local notes save, text export, and copyable review URL.

## Mock boundaries

Olive Hill and all claims, records, metrics, question examples, and approvals are illustrative. No real GPS, background tracking, AI model, speech recognition, audio generation, retrieval, downloading, package storage, analytics, authentication, institutional publishing, or shared comments were implemented. The offline toggle does not prove offline operation; it changes demo UI only. State is temporary except explicitly saved discussion notes. The source-labelled Q&A uses simple scripted cases, with an explicit unsupported-question fallback.

## Architecture proposal

Versioned context and evidence → validated package with POIs/route constraints/media/locale → local retrieval and on-device answer generation → text/audio interface. Model assets can be reused across site packages. Device availability, language assets, hallucination resistance, citations, latency, storage, battery, GPS/indoor alternatives, package expiry, and withdrawal/refresh rules require testing. The page links primary Apple and Google references and states these are feasibility inputs, not validation of Figleaf.

## Deployment

Use the existing `noammaman/althia-web` repository and Vercel integration. Do not create a separate hosting service or change DNS.

1. Make scoped changes in an isolated checkout; install with `npm ci` if needed.
2. Run `npm run build` (includes TypeScript and Next lint checks), inspect relevant interactions and responsive layout.
3. Stage only intended files and inspect the staged diff. Rebase on current `origin/master` immediately before pushing; never force-push.
4. Push the reviewed commit to `master`, wait for the matching Vercel commit status to succeed.
5. Verify `https://althia.org/figleaf` returns 200 and expected content; check existing homepage response.

Rollback through a revert of the scoped commit or restore the prior Vercel deployment; do not rewrite shared history.
