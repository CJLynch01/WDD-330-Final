window.onload = function() {
    let audioCtx = null; 
    let gainNode = null;
    let bufferSource = null;
    let analyser = null;
    let dataArray = null;
    
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
        analyser = audioCtx.createAnalyser();
        analyser.fftSize = 256;
        dataArray = new Uint8Array(analyser.frequencyBinCount);
        gainNode = audioCtx.createGain();
        gainNode.connect(analyser);
        analyser.connect(audioCtx.destination);
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

    function drawCircularVisualizer() {
        const canvas = document.getElementById('visualizer');
        const ctx = canvas.getContext('2d');
        const WIDTH = canvas.width;
        const HEIGHT = canvas.height;
        const centerX = WIDTH / 2;
        const centerY = HEIGHT / 2;
        const radius = Math.min(WIDTH, HEIGHT) / 3; // Adjust the radius to make the circle smaller or bigger
    
        ctx.clearRect(0, 0, WIDTH, HEIGHT);
    
        function draw() {
            requestAnimationFrame(draw);
    
            analyser.getByteFrequencyData(dataArray);
    
            ctx.fillStyle = 'rgb(0, 0, 0)';
            ctx.clearRect(0, 0, WIDTH, HEIGHT);
    
            const barWidth = (2 * Math.PI) / dataArray.length;
            const gap = 0.2;
            let angle = Math.PI / 2;
    
            for (let i = 0; i < dataArray.length; i++) {
                const barHeight = dataArray[i] * .3;  //Adjust bar height
                const x = centerX + Math.cos(angle) * radius;
                const y = centerY + Math.sin(angle) * radius;
                const endX = centerX + Math.cos(angle) * (radius - barHeight);
                const endY = centerY + Math.sin(angle) * (radius - barHeight);
                
                ctx.strokeStyle = 'rgb(' + (barHeight + 100) + ',50,50)';
                ctx.lineWidth = barWidth * radius;
                ctx.beginPath();
                ctx.moveTo(x, y);
                ctx.lineTo(endX, endY);
                ctx.stroke();

                angle += barWidth + gap;

                if ((i + 1) % 5 === 0) {
                    const blueX = centerX + Math.cos(angle) * radius;
                    const blueY = centerY + Math.sin(angle) * radius;
                    const blueEndX = centerX + Math.cos(angle) * (radius + barHeight);
                    const blueEndY = centerY + Math.sin(angle) * (radius + barHeight);

                    ctx.strokeStyle = 'blue';
                    ctx.lineWidth = (barWidth * radius) / 2; // Adjust the lineWidth for blue columns
                    ctx.beginPath();
                    ctx.moveTo(blueX, blueY);
                    ctx.lineTo(blueEndX, blueEndY);
                    ctx.stroke();
            }
        }

        ctx.fillStyle = 'black';
        ctx.font = 'bold 10px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('\u00A9 Christopher Lynch WDD-330 2024', centerX, centerY);
    }
        draw();
}

    createAudioContext();
    drawCircularVisualizer();
};