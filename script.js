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