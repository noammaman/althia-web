# Senthia legal drafts

Routes: /senthia/terms and /senthia/privacy. Dedicated warm-white layout reuses existing Althia navigation and footer. Footer now accepts an optional privacyHref, defaulting to the original /privacy for all other pages. Draft banners and noindex remain until release review.

Operator: user confirmed Althia Studios and explicitly requested no address. No address was invented. If identity/contact disclosures beyond the brand are required in release jurisdictions, resolve those with legal review before publication. These drafts are not a compliance determination.

Implementation reviewed: preferences and reflections use AsyncStorage; catalogue uses published Firestore reads; artwork/audio use Cloud Storage; no initialized Authentication, Analytics, advertising or HealthKit in current app source. OS backup and provider request metadata are distinguished from in-app cloud sync. No promise that network downloads are anonymous. Heart-rate collection is not described as active.

Review before release:
- Actual subscription implementation, payment provider, entitlement storage, offline access and free-access policy. No trials, lifetime access or ownership packs assumed.
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
