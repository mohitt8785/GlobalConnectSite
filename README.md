# Global Connect Consultancy — Static React Website

Frontend-only website for Global Connect Consultancy, using the supplied navy-and-green logo.

## Tech
- React 19 + Vite 6
- React Router 7
- Tailwind CSS 3
- Lucide React
- No backend, API, database or admin panel

## Start locally

Open the `global-connect-site` folder in VS Code and run:

```bash
npm install
npm run dev
```

Then visit the address printed by Vite (usually http://localhost:5173/).

## Site content

- Home — hero, services, company overview, countries, FAQs
- About — company overview, mission, vision
- Service Details — Study Visa, Family Visa, Tourist Visa, Business Visa
- Blog — sample static guides
- Contact — static enquiry form and company details (once provided)

## Add new company contact details

The earlier company's phone, email and location have been removed, because they were not confirmed for Global Connect Consultancy. Open `src/data/site.js` and set:

- `company.phone` — verified new WhatsApp number in international format, e.g. `+91XXXXXXXXXX`
- `company.phoneDisplay` — formatted display number
- `company.email` — official email
- `company.address` — confirmed office address
- `company.map` — verified map link

Once a number is configured, the enquiry button opens WhatsApp. Until then, it prepares an enquiry message and offers a copy button; no information is saved anywhere.

## Assets

- `public/global-connect-logo.png` — unchanged artwork cropped from uploaded company logo for navigation/footer
- `public/favicon.png` — globe mark cropped from supplied logo
- `public/_redirects` — React Router deep-link support on Netlify

## Important before publishing

- Confirm company contact details, business wording, and service information.
- Blog articles are sample guides and should be reviewed before launch.
- No visa approval guarantees are claimed.

## Deploy

```bash
npm run build
```

Netlify build command: `npm run build`, publish directory: `dist`.
