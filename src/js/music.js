window.onload = function() {
    let audioCtx = null; 
    let gainNode = null;
    let bufferSource = null;
    
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const volumeControl = document.getElementById('volumeControl');
    const fileInput = document.getElementById('fileInput');
    let currentSongIndex = 0;
    let playlist = [];
  
    function createAudioContext() {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      gainNode = audioCtx.createGain();
      gainNode.connect(audioCtx.destination);
    }
  
    function playSong(index) {
      if (index >= 0 && index < playlist.length) {
        currentSongIndex = index;
        const currentSong = playlist[currentSongIndex];
        const fileReader = new FileReader();
        fileReader.onload = function(event) {
          if (bufferSource) {
            bufferSource.stop(); 
          }
          audioCtx.decodeAudioData(event.target.result, function(buffer) {
            bufferSource = audioCtx.createBufferSource();
            bufferSource.buffer = buffer;
            bufferSource.connect(gainNode);
            bufferSource.start();
          });
        };
        fileReader.readAsArrayBuffer(currentSong);
        playButton.style.display = 'none';
        pauseButton.style.display = 'inline-block';
      }
    }
  
    playButton.addEventListener('click', function() {
      if (!audioCtx) createAudioContext();
      playSong(currentSongIndex);
    });
  
    pauseButton.addEventListener('click', function() {
      if (bufferSource && audioCtx) {
        bufferSource.stop(); 
        playButton.style.display = 'inline-block';
        pauseButton.style.display = 'none';
      }
    });
  
    nextButton.addEventListener('click', function() {
      currentSongIndex++;
      if (currentSongIndex >= playlist.length) {
        currentSongIndex = 0;
      }
      playSong(currentSongIndex);
    });
  
    prevButton.addEventListener('click', function() {
      currentSongIndex--;
      if (currentSongIndex < 0) {
        currentSongIndex = playlist.length - 1;
      }
      playSong(currentSongIndex);
    });
  
    volumeControl.addEventListener('input', function() {
      if (gainNode) {
        gainNode.gain.value = volumeControl.value;
      }
    });
  
    fileInput.addEventListener('change', function(event) {
      const files = event.target.files;
      playlist = [];
  
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        playlist.push(file);
      }
  
      if (playlist.length > 0) {
        if (!audioCtx) createAudioContext(); 
        playSong(0);
      }
    });
  };