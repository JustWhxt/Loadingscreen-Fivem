const audio = document.getElementById('audio');
    let isPlaying = true;

    function togglePlayPause() {
        if (isPlaying) {
            audio.pause();
        } else {
            audio.play();
        }
        isPlaying = !isPlaying;
    }
    
    document.body.onkeydown = function(e) {
        if (e.keyCode === 32) {
            togglePlayPause();
        }
    };