# gatsby-plugin-scroll-indicator

[![npm version](https://badge.fury.io/js/gatsby-plugin-scroll-indicator.svg)](https://badge.fury.io/js/gatsby-plugin-scroll-indicator)

Easily add a page scroll indicator to your Gatsby site.

A 3px high indicator bar will progress along the top of your viewport as you scroll down the page.

The color is of the indicator bar is a configurable option.

![Scroll Indicator demo](https://d1c0hjomoutdrw.cloudfront.net/items/170H1P370U03360N0m06/Screen%20Recording%202019-02-19%20at%2001.48%20pm.gif?X-CloudApp-Visitor-Id=2701498 'Scroll Indicator demo')

## Install

`npm install --save gatsby-plugin-scroll-indicator`

## How to use

```javascript
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-scroll-indicator`,
    options: {
      // Configure your color here
      color: '#BADA55',
    },
  },
];
```
