import React from 'react';

function Widgets() {
  return (
    <div>
      <iframe
        title="page"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Frafadyszy%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="280"
        height="100%"
        style={{ border: 'none', overflow: 'hidden', marginLeft: '-70px' }}
        scrolling="no"
        frameborder="0"
        allowTransparency="true"
        allow="encrypted-media"
      />
    </div>
  );
}

export default Widgets;
