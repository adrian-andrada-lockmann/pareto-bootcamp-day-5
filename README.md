# Pareto Bootcamp Day 5 Homework

Responsive landing-page concept for Kasim Aslam's hypothetical **20-Hour Owner** cohort.

## Preview

**Public site:** https://adrian-andrada-lockmann.github.io/pareto-bootcamp-day-5/

Open `index.html` directly in a browser. No build step or dependency installation is required.

For a local HTTP preview from this directory:

```powershell
python -m http.server 4173
```

Then visit `http://localhost:4173`.

## Deliverables

- `index.html`: complete landing page with 10 content sections and one application CTA.
- `styles.css`: responsive desktop, tablet, and mobile design.
- `script.js`: mobile navigation, reveal behavior, actual HighLevel embed loading, and fallback preview validation.
- `assets/logo.svg` and `assets/favicon.svg`: custom brand assets.
- `assets/images/`: original scene assets plus three identity-preserving Kasim Aslam edits and optimized WebP delivery files.
- `assets/references/kasim-profile-current.jpg`: verified public profile reference used with permission for the identity edits.
- `image-prompts.md`: presentation-ready prompt showcase covering scene generation, identity editing, and quality controls.
- `homework-submission.md`: offer brief, inverse interview, brand system, prompts, assets, and submission checklist.

## Launch note

This is a Bootcamp concept, not a live Kasim Aslam or Pareto Talent offer. The application uses the approved Bootcamp HighLevel form for testing. Confirm positioning, price, dates, proof, data handling, and guarantee before any real offer launch.

## Day 6 HighLevel integration

The `highlevel-embed` template in `index.html` contains the actual **inline** embed copied from **Sites > Forms > Integrate** for form `38hOGwosSTF8Jtn0HCbs`. The page mounts the vendor form and its loader, then removes the local preview form. Its URL, ID, data attributes, height, and loader are preserved. HighLevel supplied `data-height="undefined"`; the vendor loader sets the actual frame height. The application disclosure explains the demonstration's CRM storage and emails without claiming enrollment or payment.

Saved form preview: https://api.leadconnectorhq.com/widget/form/38hOGwosSTF8Jtn0HCbs

Deployment target: https://adrian-andrada-lockmann.github.io/pareto-bootcamp-day-5/. Verify this deployed page, not just the standalone widget, for the full-chain homework test. Deployment and delivery observations are recorded in `../day-6-homework/` and the curated Day 6 review package.

Without embed code, the existing form remains a clearly labeled preview and sends no data. A local preview submission is not evidence of a HighLevel contact or workflow run.

`thank-you.html` is available as an optional post-submission redirect target at `https://adrian-andrada-lockmann.github.io/pareto-bootcamp-day-5/thank-you.html`. The current form uses its own inline success message; visiting this separate page does not prove a form submission.

The build guide, two email drafts, notification draft, test log, and submission draft are in `../day-6-homework/`.
