const btnMenu = document.querySelector('.arrow-right');
const Seasons = document.querySelector('.seasons');

btnMenu.addEventListener('click' , () =>{
    Seasons.classList.toggle("show-menu");
    btnMenu.classList.toggle("rotate");
})