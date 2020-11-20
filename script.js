function Musiikki(link){
    var video = document.getElementById('video');
    var videoSrc = link;
    //
    // First check for native browser HLS support
    //
    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = videoSrc;
      video.addEventListener('loadedmetadata', function() {
        video.play();
      });
    //
    // If no native HLS support, check if hls.js is supported
    //
    } else if (Hls.isSupported()) {
      var hls = new Hls();
      hls.loadSource(videoSrc);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, function() {
        video.play();
      });
    }
}




