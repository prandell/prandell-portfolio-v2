# Patrick Randell Portfolio (v2)

This repository contains Patrick Randell's personal portfolio website.

This pass modernized the project for a future visual reskin while preserving behavior:
- Audited and documented architecture end-to-end.
- Refactored source structure into clearer domains (`config`, `features`, `lib`, `hooks`).
- Upgraded core dependencies (React 19, Tailwind 4, Vite 7, TypeScript 5.9, updated Three/Fiber/Drei stack).
- Tightened linting with a practical strict baseline and moved root lint config to flat ESLint (`eslint.config.js`).

## 1. High-Level Architecture

The app is a **single-page React application** rendered by Vite.

Runtime composition (`src/App.tsx`):
1. `RecoilRoot` wraps global client state.
2. `BrowserRouter` wraps navigation links (`#about`, `#work`, `#contact`).
3. Sections render in sequence:
   - `Navbar`
   - `Hero`
   - `About`
   - `Experience`
   - `Tech`
   - `Works`
   - `Contact`

The site is mostly static content + animations, with three runtime integrations:
- EmailJS (contact form send).
- Firebase callable function for recent Steam game.
- Firebase callable function for Patbot Q&A.

## 2. Repository Layout

### Root
- `src/`: Frontend application (React + TypeScript).
- `public/`: Static assets (3D models, images).
- `functions/`: Firebase Cloud Functions backend.
- `firebase.json`: Hosting + Functions + emulator config.
- `vite.config.ts`: Vite build config.
- `eslint.config.js`: Root flat ESLint config.

### `src/` structure
- `src/main.tsx`: React entry point.
- `src/App.tsx`: Section orchestration.
- `src/components/`: UI sections and reusable visual components.
- `src/config/`: Content and theme-like config constants.
- `src/features/`: Domain logic by feature (`chat`, `steam`).
- `src/lib/`: Shared utilities (`firebase`, motion helpers, event/easing helpers).
- `src/hooks/`: Shared hooks (`useMediaQuery`).
- `src/assets/`: App-local static imports and shader files.
- `src/types/`: Shared TS interfaces.
- `src/index.css`: Tailwind v4 + global CSS utilities.

### `functions/` structure
- `functions/index.js`: Steam API proxy endpoint export + AI function export.
- `functions/ai.js`: OpenAI chat completion callable implementation.
- `functions/package.json`: Functions runtime deps/scripts.
- `functions/eslint.config.js`: Functions lint config.

## 3. Component and Feature Breakdown

### Layout and section wrappers
- `src/components/SectionWrapper/SectionWrapper.tsx`
  - HOC wrapping sections with Framer Motion stagger animation.
  - Inserts section anchor span (`id` for navbar hash links).

### Navigation
- `src/components/Navbar.tsx`
  - Desktop + mobile nav.
  - Scroll-aware background state.
  - Uses animated `BubbleText` for nav labels.
  - Uses `FuzzyBackground` for mobile menu backdrop.

### Hero and interactive background
- `src/components/Hero.tsx`
  - Main intro text and CTA.
  - Initializes custom Three.js particle effect (`InteractiveParticles`) into `.hero-container`.

### About + Steam tracker
- `src/components/About.tsx`
  - Intro/overview content from `src/config/site.ts`.
  - Renders `SteamTracker` card.
- `src/components/SteamTracker/SteamTracker.tsx`
  - Reads/writes `steamGameState` (Recoil atom).
  - Fetches latest game via `getLatestSteamGame()`.

### Experience and projects
- `src/components/Experience.tsx` + `ExperienceCard`
  - Timeline rendering from `experiences` config.
- `src/components/Works.tsx` + `ProjectCard`
  - Project cards from `projects` config.
  - Optional lightbox flow for private project screenshots.

### Contact + Patbot
- `src/components/Contact.tsx`
  - EmailJS form submission when env keys are present.
  - Social links (LinkedIn + GitHub).
  - Renders `ChatWindow`.
- `src/components/ChatWindow/ChatWindow.tsx`
  - Prompt input + rotating placeholder text.
  - Calls `askPatbot()` and renders request/response chat bubbles.

### 3D and graphics subsystem
- `src/components/Canvas/*`
  - `Earth.tsx`, `Octane.tsx`, `Stars.tsx`: React Three Fiber canvases.
  - `InteractiveParticles/*`: custom raw Three.js + shader particle system for hero background.
- Shader files:
  - `src/assets/shaders/particle.vert`
  - `src/assets/shaders/particle.frag`

## 4. Data Flow and Integrations

### A) Steam tracker flow
1. `SteamTracker` mounts.
2. Calls `getLatestSteamGame()` (`src/features/steam/steam.service.ts`).
3. Service calls Firebase callable `getRecentGames` via `src/lib/firebase.ts`.
4. Response transformed into `ISteamGame` and stored in Recoil atom.
5. UI renders banner/playtime/achievements.

### B) Patbot flow
1. User submits question in `ChatWindow`.
2. `askPatbot()` calls Firebase callable `askPatQuestion`.
3. Functions backend (`functions/ai.js`) prompts OpenAI model with portfolio context + user question.
4. Response returned and appended to chat history.

### C) Contact form flow
1. User fills form in `Contact`.
2. If EmailJS env keys exist, `emailjs.send(...)` is called.
3. Success/failure feedback shown via alerts.

## 5. Styling and Motion

### Tailwind v4
- `src/index.css` uses:
  - `@import 'tailwindcss';`
  - `@theme { ... }` for project tokens (`primary`, `secondary`, custom shadow, `xs` breakpoint).
- Utility classes remain heavily used in JSX.

### Styled-components
- Used selectively for dynamic/icon styling and animated utility elements:
  - `BubbleText.styles.tsx`
  - `SteamTracker.styles.tsx`
  - `TechCloud.styles.tsx`
  - `FuzzyBackground.tsx`
  - icon wrappers in `components/Icons/index.tsx`

### Framer Motion
- Shared variants/helpers in `src/lib/motion.ts`.
- Applied across sections/cards for reveal and slide transitions.

## 6. Configuration and Content Sources

- `src/config/site.ts`:
  - `colours`, `navLinks`, `aboutMe`.
- `src/config/content.ts`:
  - `experiences`, `projects`, plus associated interfaces.
- `src/config/styles.ts`:
  - class-name string presets for headings/spacing.

These files are the first place to edit for copy/content updates before any redesign.

## 7. Scripts

### Root
- `npm run dev`: start Vite dev server.
- `npm run typecheck`: TS typecheck only.
- `npm run lint`: ESLint (flat config).
- `npm run build`: typecheck + production build to `build/`.
- `npm run preview`: preview built app.

### Functions
- `npm --prefix functions run lint`
- `npm --prefix functions run serve`
- `npm --prefix functions run deploy`

## 8. Environment and Secrets

Copy the templates before running locally:
- `cp .env.example .env.local`
- `cp functions/.env.example functions/.env.local` (for local emulator workflows)

### Frontend (`.env.local`)
Used in `src/components/Contact.tsx`:
- `VITE_APP_EMAILJS_SERVICE_KEY`
- `VITE_APP_EMAILJS_TEMPLATE_KEY`
- `VITE_APP_EMAILJS_PUBLIC_KEY`

### Firebase Functions environment
Used in `functions/index.js` and `functions/ai.js`:
- `REACT_APP_STEAM_USER_ID`
- `REACT_APP_STEAM_API_KEY`
- `OPENAI_API_KEY`

## 9. Deployment Model

Configured in `firebase.json`:
- Hosting serves from `build/`.
- SPA rewrite routes all requests to `/index.html`.
- Functions source is `functions/`.
- Emulator ports configured for functions/hosting/storage.

## 10. Upgrade and Refactor Summary (this pass)

### Refactor
- Moved constants/content into `src/config/*`.
- Moved reusable utilities into `src/lib/*`.
- Moved domain logic into `src/features/chat` and `src/features/steam`.
- Added shared hook `src/hooks/useMediaQuery.ts`.
- Removed Recoil and replaced Steam tracker state with local React state (React 19 safe).
- Removed stale generated file `src/output.css`.

### Dependency/platform updates
- React/ReactDOM: v19.
- Tailwind: v4 (`@tailwindcss/vite` + CSS theme tokens).
- Vite: v7.
- TypeScript: v5.9.
- Framer Motion, Firebase SDK, Three/Fiber/Drei stack updated.
- Swapped `vite-plugin-glslify` -> `vite-plugin-glsl` for Vite 7 compatibility.

### Linting
- Migrated root lint to flat config (`eslint.config.js`).
- Tightened practical rules (`no-unused-vars`, hooks rules, `eqeqeq`) without forcing a full legacy rewrite.

## 11. Current Known Caveats

- Build warns that `react-icon-cloud` uses `eval` internally.
- JS bundle is large (Three.js assets + visual libs). Consider code splitting before major feature growth.
- Functions package declares Node 20 engine; local install on Node 22 works with warning.
- Some brand icons previously used in older icon packages are no longer exported in latest package versions; equivalent substitutes were applied.

## 12. Reskin Readiness Notes

The codebase is now in a better state for a visual redesign:
- Content/config is centralized.
- Feature services/state are separated from presentation.
- Toolchain is current and builds cleanly.

Recommended next step: redesign section-by-section (`Hero` -> `About` -> `Work` -> `Contact`) while keeping existing data/service interfaces stable.
