const player = new Plyr('#player', {
    quality: { default: 720, options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240] },
    controls: [
  'play-large', // The large play button in the center
   // Restart playback
   // Rewind by the seek time (default 10 seconds)
  'play', // Play/pause playback
   // Fast forward by the seek time (default 10 seconds)
  'progress', // The progress bar and scrubber for playback and buffering
  'current-time', // The current time of playback
  'duration', // The full duration of the media
  'mute', // Toggle mute
  'volume', // Volume control
  'captions', // Toggle captions
  'settings', // Settings menu
  'pip', // Picture-in-picture (currently Safari only)
  'airplay', // Airplay (currently Safari only)
  'download', // Show a download button with a link to either the current source or a custom URL you specify in your options
  'fullscreen', // Toggle fullscreen
],

   volume: 0.05,
});
