// YouTubeSubscribeButton.jsx

import React, { useEffect } from 'react';

const YouTubeSubscribeButton = () => {
  useEffect(() => {
    // This code loads the IFrame Player API code asynchronously.
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="g-ytsubscribe"
         data-channelid="UCdNusH0Ggy7PgMrrEabulFQ"
         data-layout="full"
         data-theme="dark"
         data-count="default">
    </div>
  );
};

export default YouTubeSubscribeButton;
