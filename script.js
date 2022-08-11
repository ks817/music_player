//target audio and buttons

const music = document.querySelector('audio');
//Buttons
const prev = document.getElementById('prev');
const play = document.getElementById('play');
const next = document.getElementById('next');

//check if playing
let isPlaying = false;

//Play
function playSong(){
    isPlaying = true;
    //replace play to pause button & change hover title
    play.classList.replace('fa-play','fa-pause');
    play.setAttribute('title', 'pause');
    music.play();
}
//Pause
function pausesong(){
    isPlaying = false;
    play.classList.replace('fa-pause','fa-play');
    play.setAttribute('title', 'play');
    music.pause();
}

//Event listener for play or pause
play.addEventListener('click', () => (isPlaying ? pausesong() : playSong()));

// Update DOM
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `assets/music/${song.name}.mp3`;
    image.src = `assets/img/${song.name}.jpg`;
}

//Current Song
let songIndex = 0;

//Previous Song
function prevSong() {
    songIndex--;
    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

//Next Song
function nextSong() {
    songIndex++;
    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }
    loadSong(songs[songIndex]);
    playSong();
}

// Load First Song
loadSong(songs[songIndex]);
