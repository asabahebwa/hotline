## Hotline

An interactive, mobile‑first React app that helps users identify signs of relationship abuse and provides guidance on what to do next.

![App preview](https://github.com/asabahebwa/hotline/blob/master/src/assets/hotline.gif)

### Features
- Mobile‑first UX with accessible components
- Guided questionnaire and results flow
- Client‑side routing
- Comprehensive unit tests with coverage

### Tech Stack
- React + TypeScript + Vite
- React Router
- Jest + React Testing Library
- ESLint (flat config)

---

### Quick Start
```bash
git clone https://github.com/asabahebwa/hotline.git
cd hotline
npm install
npm run dev
```

App runs at `http://localhost:5173` (default Vite port). Use `npm run preview` to serve the production build locally.

---

### Scripts
- `npm run dev`: Start Vite dev server
- `npm run build`: Type‑check and build for production
- `npm run preview`: Preview the production build
- `npm run test`: Run unit tests once
- `npm run test:watch`: Run tests in watch mode
- `npm run test:coverage`: Run tests with coverage output (see `coverage/`)
- `npm run lint`: Lint the codebase

---

### Testing & Coverage
Tests are authored with Jest and React Testing Library under `src/common/*.test.tsx`.

Run:
```bash
npm run test            # single run
npm run test:watch      # watch mode
npm run test:coverage   # generates text + lcov/html reports
```

Coverage artifacts are written to the `coverage/` directory, including an HTML report (`coverage/lcov-report/index.html`).

---

### Project Structure
```
hotline/
  src/
    common/           # Reusable UI components + tests
    data/             # Static data sources
    assets/           # Images, GIFs, SVGs
    styles/           # Component‑scoped CSS
    App.tsx           # App shell
    main.tsx          # Entry point
```

---

### Linting
```bash
npm run lint
```
The project uses ESLint with React, TypeScript, and hooks plugins.

---

### Troubleshooting
- Dev server won’t start: delete `node_modules` and `package-lock.json`, then `npm install`.
- Importing images/CSS in tests: Jest is configured for CSS/SVG via `identity-obj-proxy` and `jest-transformer-svg`.
- React Router issues: ensure you’re using the correct versioned APIs for React Router 7.

---

### Contributing
PRs and issues are welcome. Please run `npm run lint` and `npm run test` before submitting.

---

### License
MIT

![Coverage snapshot](https://github.com/asabahebwa/hotline/blob/master/src/assets/img/hc.png)
