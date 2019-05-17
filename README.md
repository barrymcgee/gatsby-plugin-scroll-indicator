# 🤳gatsby-plugin-scroll-indicator

[![npm version](https://badge.fury.io/js/gatsby-plugin-scroll-indicator.svg)](https://badge.fury.io/js/gatsby-plugin-scroll-indicator)
[![CircleCI](https://circleci.com/gh/barrymcgee/gatsby-plugin-scroll-indicator/tree/develop.svg?style=svg)](https://circleci.com/gh/barrymcgee/gatsby-plugin-scroll-indicator/tree/develop)

- 🔥 Easily add a page scroll indicator to your Gatsby site.
- 👨🏼‍💻A 3px high indicator bar will progress along the top of your viewport as you scroll down the page.
- 🎨 The color is of the indicator bar is a configurable option.

![Scroll Indicator demo](https://d1c0hjomoutdrw.cloudfront.net/items/170H1P370U03360N0m06/Screen%20Recording%202019-02-19%20at%2001.48%20pm.gif?X-CloudApp-Visitor-Id=2701498 'Scroll Indicator demo')

## Install

`npm install --save gatsby-plugin-scroll-indicator`

## Quick start

These options are not required. To have a Gatsby purple (`#663391`) scroll indicator on all of your pages, add the plugin to your plugins array in `gatsby-config.js`:

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

### paths (Array of globbing patterns)

An array of [globbing patterns](http://www.globtester.com/) to specify where the scroll indicator should show.

Note: By default, the indicator will show for all paths.

## Example

```javascript
// gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-scroll-indicator`,
    options: {
      // Configure color of the scroll indicator
      color: '#BADA55',
      // Configure paths where the scroll indicator will appear
      paths: ['/', '/blog/**'],
    },
  },
];
```

### Useful links

- Globbing patterns, explained - https://commandbox.ortusbooks.com/usage/parameters/globbing-patterns
- Globtester - http://www.globtester.com/
