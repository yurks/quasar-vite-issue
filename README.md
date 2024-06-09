# quasar-vite-issue

Vite [modes](https://vitejs.dev/guide/env-and-mode#modes) is a bit tricky, and it's not always obvious that `production` mode is not the same with `NODE_ENV=production`.
That means we can run vite build with different modes, but suppose to have production build as a result.

Quasar's `vite-plugin` relies on vite mode [here](https://github.com/quasarframework/quasar/blob/dev/vite-plugin/src/plugin.js#L98) and [here](https://github.com/quasarframework/quasar/blob/dev/vite-plugin/src/vite-config.js#L35) which makes impossible to have production build with `vite build --mode qa`, for example. It would be more correct to rely on `build` value of vite env config [command](https://vitejs.dev/config/#conditional-config) property.

## Install
```
nvm use
yarn
```

## Production build
```
yarn build
```

## Production QA build
```
yarn build:qa
```

## Dev
```
yarn dev
```
