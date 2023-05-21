
const play = document.querySelector('.play'),
pause = document.querySelector('.pause');
const audio = document.querySelector('.audio audio') ;

// play and pause
play.addEventListener("click" , () => {
    audio.play()
    update()
});
pause.addEventListener("click" , () =>{
    audio.pause()
})
const ImagesSeasons = document.querySelectorAll(".image-seasons");
const Videos = document.querySelector('.container-video video') ;

ImagesSeasons.forEach(season => {
    season.addEventListener("click" , () =>{
        Videos.src = season.getAttribute("video-src")
    })
})

// image clock 
const imageClock = document.querySelectorAll('.image-clock');
let defaultDuration = 120 ;

imageClock.forEach((clock) =>{
    clock.addEventListener("click" , () =>{
        defaultDuration = clock.getAttribute("duration-time");
    })
})

// time video moved
const rect = document.querySelector('.rect'),
time = document.querySelector('.time');

let rectLength = rect.getTotalLength();

rect.style.strokeDasharray = rectLength;

function update(){
    if(audio.currentTime >= defaultDuration){
        audio.pause() ;
        audio.currentTime = 0 ;
    }
    let total = audio.currentTime / defaultDuration;
    rect.style.strokeDashoffset = -total * rectLength;

    let timeInSec =  defaultDuration - audio.currentTime ;
    FnTime(timeInSec)
    if(!audio.paused){
    requestAnimationFrame(update);
    }
}
update()

// calule the time

function FnTime(timeInSec){
    let min = Math.floor(timeInSec / 60 ) ;
    let sec =  Math.floor(timeInSec % 60) ;
    min = min < 10 ?  `0${min}` : min ;
    sec = sec < 10 ? `0${sec}` : sec ;
     
    time.innerHTML = `${min}:${sec}`
}



