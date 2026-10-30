# Figleaf concept prospectus

Route: `/figleaf`. Existing Althia Next.js app, existing Fig logo, no new dependencies or hosting services. This route is marked noindex while under discussion. No existing page or global styles were changed.

## Implemented

- Responsive prospectus with visitor plan/arrival/story screens, selectable fictional stops and contextual layers.
- Institution workspace: content/evidence, geofence view, language/access/experience settings, simplified simulated review gate.
- Context model, editorial/publishing/QA proposal, architecture and data-source considerations, pilot economics, risks, and role-specific feedback prompts.
- Notes saved in browser localStorage with explicit user action, text export, and copyable review link. Notes are not submitted to a server or shared across devices.

## Mock boundaries

Olive Hill is fictional. There is no actual GPS, geofence monitoring, offline pack, audio, AR, AI retrieval, historical dataset, account system, shared comments, or institution publishing backend. Source attachment is a demo flag, not a scholarly citation. Editor settings illustrate proposed fields; they are not durable records. The review gate checks only a title, demo evidence flag, and demo reviewer approval; it is not a real release authorization system.

## Validation

Production build includes TypeScript and Next lint checks. Browser QA covered desktop composition, a 390px mobile iframe, visitor screen/layer/stop switching, blocked and successful simulated release, and notes retained after reload. This is not a device field test or full accessibility audit.

## Deployment and future updates

The existing `noammaman/althia-web` repository deploys its `master` branch to Vercel Production. Use the existing integration; do not create a second Site or change DNS.

1. Work in an isolated checkout/branch. Run `npm ci` when needed, then `npm run build`.
2. Review only the Figleaf changes. Fetch and rebase onto current `origin/master` immediately before pushing; never force push.
3. Push the reviewed commit to `master` to trigger Vercel.
4. Inspect the matching GitHub deployment/status for that commit and require success.
5. Verify `https://althia.org/figleaf` returns HTTP 200 and the expected page. Check the existing home page still responds.

Rollback: revert the Figleaf-only commit and deploy that revert through the same workflow, or restore the preceding Vercel deployment. Do not rewrite shared Git history.
