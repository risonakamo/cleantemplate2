# chrome extension template
template for setting up chrome extension

## npm
recommended npm installs
```bash
npm link @babel/core @babel/preset-react @babel/preset-typescript babel-loader css-loader fork-ts-checker-webpack-plugin less less-loader mini-css-extract-plugin typescript webpack webpack-cli
```

## downloaded libraries
will need to download react and react dom to a folder named "libraries/react"

## copyable files
files that recommended to be just copied
- tsconfig.json
- webpack.config.js
    - will need to configure entrypoints
- compattypes.d.ts
    - if adding to this, consider updating the file in this template

## generated files
files that are recommended to be generated specifically for the project.
- package.json (`npm init`)
    - example package.json contains some recommended scripts
- manifest.json
    - example manifest contains basic fields that should be in all manifests

## clean page
can be used as a template for new pages, for popups and normal extension pages.
- change names of files
- rename class names in the top level tsx of the page
- target build files in html