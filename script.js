
const pause = document.querySelector('.pause') ;
const play = document.querySelector('.play');
const audio = document.querySelector('.audio audio');
// play and pause audio
play.addEventListener('click' , () =>{
    audio.play() ;
    systemUpdate() ;
})
pause.addEventListener('click' , () =>{
    audio.pause() ;
})
// duration time
const durationTimes = document.querySelectorAll(".image-clock");
let defaultDurationTime = 120 ;

for(let i = 0 ; i < 4 ; i++){
    durationTimes[i].addEventListener("click" , () => {
        defaultDurationTime = durationTimes[i].getAttribute("duration-time") ; 
    })
}

// season
const seasons = document.querySelectorAll('.image-seasons');
const Video = document.querySelector(".container-video video");
console.log(seasons)
for(let i = 0 ; i < 4 ; i++){
    seasons[i].addEventListener('click' , () => {
        Video.src = seasons[i].getAttribute('video-src');
        systemUpdate() ;
    })
}
// systemUpdate
const rect = document.querySelector('.rect')   ;
let time = document.querySelector('.time') ;
let rectLength = rect.getTotalLength() ;
rect.style.strokeDasharray = rectLength ;
 

function systemUpdate(){
    if(audio.currentTime >= defaultDurationTime){
        audio.pause() ;
        audio.currentTime = 0 ;
    }
    totalOffset = audio.currentTime / defaultDurationTime ;
    rect.style.strokeDashoffset = -totalOffset * rectLength ;
    if(!audio.paused){
        requestAnimationFrame(systemUpdate) ;
    }
    let resultTime = defaultDurationTime - audio.currentTime ; 
    Countdown(resultTime) ;
}
systemUpdate() ;


function Countdown(timeInSec){
    let min = Math.floor(timeInSec / 60) ;
    let sec = Math.floor(timeInSec % 60) ;

    min = min < 10 ? `0${min}` : min ; 
    sec = sec < 10 ? `0${sec}` : sec ;

    time.innerHTML = `${min}:${sec}`;
}