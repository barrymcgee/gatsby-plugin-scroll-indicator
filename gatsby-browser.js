'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
);

var defaultOptions = {
  color: '#663391',
};

exports.onClientEntry = function(a, pluginOptions) {
  if (pluginOptions === void 0) {
    pluginOptions = {};
  }

  // Merge default options with user defined options in `gatsby-config.js`
  var options = (0, _extends2.default)({}, defaultOptions, pluginOptions);
  console.log(pluginOptions); // Create indicator container and append to document body

  var node = document.createElement('div');
  node.id = 'indicator';
  document.body.appendChild(node);
  var scrolling = false;
  var indicator = document.getElementById('indicator'); // Determine width of scroll indicator

  var getIndicatorPercentageWidth = function getIndicatorPercentageWidth(
    currentPos,
    totalScroll
  ) {
    return Math.floor((currentPos / totalScroll) * 100);
  }; // Find the total height of scrolling window

  var getScrollHeight = function getScrollHeight() {
    // https://javascript.info/size-and-scroll-window#width-height-of-the-document
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  }; // Add throttled listener to update on scroll

  window.addEventListener('scroll', function() {
    var currentPos = window.scrollY,
      innerHeight = window.innerHeight,
      scrollHeight = getScrollHeight(),
      scrollDistance = scrollHeight - innerHeight;

    if (!scrolling) {
      window.requestAnimationFrame(function() {
        var indicatorWidth = getIndicatorPercentageWidth(
          currentPos,
          scrollDistance
        );
        indicator.setAttribute(
          'style',
          'width: ' +
            indicatorWidth +
            '%;position: fixed;height: 3px;background-color: ' +
            options.color +
            ';top: 0;left: 0;'
        );
        scrolling = false;
      });
      scrolling = true;
    }
  });
};
