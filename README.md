# Loan calculator

## Prereqs & setup

1. Install Node.js LTS 22 including NPM

2. Install Pnpm via corepack:

   ```sh
   npm install --global corepack@latest
   corepack enable pnpm # run as admin/root
   ```

3. Run `pnpm install` to install all NPM deps

4. Run `pnpm start` to run the app with the build-in dev server or
   `pnpm build && pnpm start:preview` to run the app in production mode.

## Used tools & libraries

1. Bundling: Vite + ESLint

2. Styling: [CSS Modules](https://github.com/css-modules/css-modules) + CSS variables

3. Component library: Radix

4. Code formatting: [Prettier](https://prettier.io/)
