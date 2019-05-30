import multimatch from 'multimatch';

const defaultOptions = {
  color: `#663391`,
  paths: [`**`],
};

exports.onClientEntry = (a, pluginOptions = {}) => {
  exports.onRouteUpdate = ({ location }) => {
    // Merge default options with user defined options in `gatsby-config.js`
    const options = {
      ...defaultOptions,
      ...pluginOptions,
    };

    // Check current path with specified paths in options
    const matchedPaths = multimatch(location.pathname, options.paths);
    // Return bool if paths match
    const enableScroller = matchedPaths.length > 0;

    // Create indicator container and append to document body
    const node = document.createElement(`div`);
    node.id = `gatsby-plugin-scroll-indicator`;

    // check if viewport already has a scroll indicator
    const indicatorPresent = document.querySelector(`#${node.id}`);

    if (enableScroller && !indicatorPresent) {
      document.body.appendChild(node);
      let scrolling = false;
      const indicator = document.getElementById(node.id);
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
              };top: 0;left: 0;transition:width 0.25s`
            );
            scrolling = false;
          });
          scrolling = true;
        }
      });
    } else {
      // Try to assign scrollIndicator if it is already attached to the DOM
      const scrollIndicator = document.querySelector(
        '#gatsby-plugin-scroll-indicator'
      );
      // If the indicator is already attached to the DOM, remove it
      if (scrollIndicator) {
        scrollIndicator.remove();
      }
    }
  };
};
