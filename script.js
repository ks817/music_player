const image = document.querySelector('img');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const music = document.querySelector('audio');
//Progress bar
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');
const CurrTimeElement = document.getElementById('current-time');
const durationElement = document.getElementById('duration');
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

//Load First Song
loadSong(songs[songIndex]);

//Update Progress Bar & Time
function updateProgressBar(e){
    if (isPlaying){
        const { duration, currentTime } = e.srcElement;
        //Update progress bar width
        const progressPercent = (currentTime / duration) * 100;
        //change the number into string to update css
        progress.style.width = `${progressPercent}%`;
        //Calculate the display for duration
        //time is in sec so convert to largest int minute
        const durationMinutes = Math.floor(duration / 60);
        //Get the seconds using mod
        let durationSeconds = Math.floor(duration % 60);
        //if secs less than 10 then add 0 infront
        if(durationSeconds < 10){
            durationSeconds = `0${durationSeconds}`;
        }
        //Avoid NAN by targeting dur element after math is done
        if(durationSeconds){
            //change the text content in duration element 
            durationElement.textContent = `${durationMinutes}:${durationSeconds}`;
        }
        //Calculate the display for Current Time
        //time is in sec so convert to largest int minute
        const currentMinutes = Math.floor(currentTime / 60);
        //Get the seconds using mod
        let currentSeconds = Math.floor(currentTime % 60);
        //if secs less than 10 then add 0 infront
        if(currentSeconds < 10){
            currentSeconds = `0${currentSeconds}`;
        }
        CurrTimeElement.textContent = `${currentMinutes}:${currentSeconds}`;

        
    }
}

// Event Listeners for Buttons
prev.addEventListener('click', prevSong);
next.addEventListener('click', nextSong);
music.addEventListener('timeupdate', updateProgressBar);
