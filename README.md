# Problem description

I really want to use storybook to document our nuxt3 components but the Nuxt3 composables are NOT auto-imported / can not be imported!

The only option currently is to install storybook for vue3, thats what i did and it almost works.

- *PROBLEM SOLVED*: Vue3 composables are **NOT** auto-imported. (See ./components/Button.vue line 4)\
I did make it work with a custom vite config & [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import).\
Take a look at the ./vite.config.ts & ./.storybook/main.ts!\)
- *PROBLEM LEFT*: Nuxt3 composables are **NOT** auto-imported (See ./components/Button.vue line 6)

I would really appreciate help to get this running!.... I am sick of this issue!\
**Bounty is 5 subs for Aleks ;)**

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install
```

## Storybook Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run storybook

# pnpm
pnpm run storybook

# yarn
yarn storybook
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm run build

# yarn
yarn build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm run preview

# yarn
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
