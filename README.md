# 🤳gatsby-plugin-scroll-indicator

[![npm version](https://badge.fury.io/js/gatsby-plugin-scroll-indicator.svg)](https://badge.fury.io/js/gatsby-plugin-scroll-indicator)
[![CircleCI](https://circleci.com/gh/barrymcgee/gatsby-plugin-scroll-indicator/tree/develop.svg?style=svg)](https://circleci.com/gh/barrymcgee/gatsby-plugin-scroll-indicator/tree/develop)

- 🔥 Easily add a page scroll indicator to your Gatsby site.
- 👨🏼‍💻A 3px high indicator bar will progress along the top of your viewport as you scroll down the page.
- 🎨 The color, height, paths and z-index of the indicator bar are all configurable options.

## Install

`npm install --save gatsby-plugin-scroll-indicator`

## Quick start

These options are not required. To have a 3px high, Gatsby purple (`#663391`) scroll indicator on all of your pages, add the plugin to your plugins array in `gatsby-config.js`:

```javascript
  ...
  plugins: [
    `gatsby-plugin-scroll-indicator`
  ]
  ...
```

## Options

### color (String)

Any [hex color code](https://www.color-hex.com/) is valid.

If not provided, the default hex code is Gatsby purple (`#663391`).

### height (String)

The height of the scroll indicator, in pixels.

If not provided, the default height is `3px`.

### paths (Array of globbing patterns)

An array of [globbing patterns](http://www.globtester.com/) to specify where the scroll indicator should show.

If not provided, the indicator will show for all paths.

### zIndex (String)

The z-index option specifies the stack order of the indicator element.

If not provided, the default value is `9999`.

## Example

```javascript
// gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-scroll-indicator`,
    options: {
      // Configure color of the scroll indicator
      color: '#663391',
      // Height of the scroll indicator
      height: '3px',
      // Configure paths where the scroll indicator will appear
      paths: ['/', '/blog/**'],
      // Configure the z-index of the indicator element
      zIndex: `9999`,
    },
  },
];
```

### Useful links

- Globbing patterns, explained - https://commandbox.ortusbooks.com/usage/parameters/globbing-patterns
- Globtester - http://www.globtester.com/
