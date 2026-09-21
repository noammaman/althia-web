# Senthia legal drafts

Routes: /senthia/terms and /senthia/privacy. Dedicated warm-white layout reuses existing Althia navigation and footer. Footer now accepts an optional privacyHref, defaulting to the original /privacy for all other pages. Draft banners and noindex remain until release review.

Operator: user confirmed Althia Studios and explicitly requested no address. No address was invented. If identity/contact disclosures beyond the brand are required in release jurisdictions, resolve those with legal review before publication. These drafts are not a compliance determination.

Implementation reviewed: preferences and reflections use AsyncStorage; catalogue uses published Firestore reads; artwork/audio use Cloud Storage; no initialized Authentication, Analytics, advertising or HealthKit in current app source. OS backup and provider request metadata are distinguished from in-app cloud sync. No promise that network downloads are anonymous. Heart-rate collection is not described as active.

Review before release:
- Actual subscription implementation, payment provider, entitlement storage, offline access and free-choice persistence. Free-access policy confirmed: user chooses any five distinct journeys; additional journeys require subscription. User confirmed permanent choices, with explicit confirmation before committing each journey. Current implementation stores choices on-device; durable identity and server enforcement remain required before paid launch. No trials, lifetime access or ownership packs assumed.
- Applicable privacy processing bases, provider regions/transfers, log and support retention, intended audience age and required rights disclosures. Do not import Mythia account/analytics claims.
- Confirm support@althia.org is the monitored contact for Senthia.
- Spanish legal translation before a fully localized Spanish launch. Current draft pages are English.
- Final effective date; remove draft banner/title marker after review. Validate deployed routes before changing app legal URLs to live.

References checked September 21, 2026:
- https://developer.apple.com/app-store/subscriptions/
- https://firebase.google.com/support/privacy
- https://support.apple.com/en-us/118428
- Existing Althia /terms, /privacy and /unplugleague legal source pages.

No Mythia legal text or routes changed. No production deployment or subscription purchase performed.

## Publication update — September 21, 2026

User requested publishing Senthia legal pages and enabling paywall hyperlinks.
Updated policies to reflect automatic first-five selection, on-device selection
storage, no account recovery, optional local reflections and current Firebase
content delivery. Contact follows the latest website change: althiastudios@gmail.com.
Apple standard EULA is linked. Policies state that purchases are not yet enabled;
no StoreKit/RevenueCat data processing is represented as already active.
Removed draft presentation, set effective date, added both routes to sitemap.
Subscription processing disclosures must be revisited when checkout is wired.
The user is creating subscription products; product IDs were proposed, not verified.
These product-specific pages do not modify Mythia terms/privacy.
