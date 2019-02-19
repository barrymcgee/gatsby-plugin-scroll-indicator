const defaultOptions = { color: `#663391` };

exports.onClientEntry = (a, pluginOptions = {}) => {
  // Merge default options with user defined options in `gatsby-config.js`
  const options = { ...defaultOptions, ...pluginOptions };

  console.log(pluginOptions);

  // Create indicator container and append to document body
  const node = document.createElement(`div`);
  node.id = `gatsby-plugin-scroll-indicator`;
  document.body.appendChild(node);

  let scrolling = false;
  const indicator = document.getElementById('gatsby-plugin-scroll-indicator');

  // Determine width of scroll indicator
  const getIndicatorPercentageWidth = (currentPos, totalScroll) => {
    return Math.floor((currentPos / totalScroll) * 100);
  };

  // Find the total height of scrolling window
  const getScrollHeight = () => {
    // https://javascript.info/size-and-scroll-window#width-height-of-the-document
    return Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight,
      document.body.clientHeight,
      document.documentElement.clientHeight
    );
  };

  // Add throttled listener to update on scroll
  window.addEventListener('scroll', function() {
    let currentPos = window.scrollY,
      innerHeight = window.innerHeight,
      scrollHeight = getScrollHeight(),
      scrollDistance = scrollHeight - innerHeight;
    if (!scrolling) {
      window.requestAnimationFrame(function() {
        let indicatorWidth = getIndicatorPercentageWidth(
          currentPos,
          scrollDistance
        );
        indicator.setAttribute(
          'style',
          `width: ${indicatorWidth}%;position: fixed;height: 3px;background-color: ${
            options.color
          };top: 0;left: 0;`
        );
        scrolling = false;
      });
      scrolling = true;
    }
  });
};
