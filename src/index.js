(function() {
  // Reference: http://www.html5rocks.com/en/tutorials/speed/animations/
  let scrolling = false;
  const indicator = document.getElementById('indicator');

  const getPercentage = (currentPos, totalScroll) => {
    return Math.floor((currentPos / totalScroll) * 100);
  };

  window.addEventListener('scroll', function() {
    let currentPos = window.scrollY,
      innerHeight = window.innerHeight,
      // https://javascript.info/size-and-scroll-window#width-height-of-the-document
      scrollHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      ),
      scrollDistance = scrollHeight - innerHeight;
    if (!scrolling) {
      window.requestAnimationFrame(function() {
        let indicatorWidth = getPercentage(currentPos, scrollDistance);
        indicator.setAttribute(
          'style',
          `width: ${indicatorWidth}%;position: fixed;height: 3px;background-color: #663399;top: 0;left: 0;`
        );
        scrolling = false;
      });
      scrolling = true;
    }
  });
})();
