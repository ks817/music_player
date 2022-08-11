const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
//Buttons
const prev = document.getElementById('previous');
const play = document.getElementById('play');
const next = document.getElementById('next');

//Create an array of object with all info for each songs
const songs = [
    {
        name: 'music-1',
        displayName: 'Flowing Water: Creek',
        artist: 'Sounds of Beautiful World',
    },

    {
        name: 'music-2',
        displayName: 'Ocean Coast',
        artist: 'Ashaneen',
    },
];

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
function pauseSong(){
    isPlaying = false;
    play.classList.replace('fa-pause','fa-play');
    play.setAttribute('title', 'play');
    music.pause();
}

//Event listener for play or pause
play.addEventListener('click', () => (isPlaying ? pauseSong() : playSong()));

// Update DOM
function loadSong(song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src = `img/${song.name}.jpeg`;
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

// Event Listeners for Buttons
prev.addEventListener('click', prevSong);
next.addEventListener('click', nextSong);
