new npm set for react-specific webpage development

# base
packages that are almost always going to be used

- vite
- vite-plugin-checker
- @vitejs/plugin-react
- react
- react-dom
- @types/react
- @types/react-dom
- typescript
- less
- clsx
- vite-tsconfig-paths

```bash
npm i vite vite-plugin-checker @vitejs/plugin-react react react-dom @types/react @types/react-dom typescript less clsx vite-tsconfig-paths
```

# other libs
useful libs to add when needed

- axios
- jotai
- immer
- lodash
- storybook*
- @tanstack/react-query
- luxon

# storybook
after `npm i storybook`:

```bash
npx storybook@latest init
```

some other storybook plugins have used

- storybook-addon-paddings
- storybook-color-picker