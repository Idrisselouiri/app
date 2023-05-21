const openMenu = document.querySelector('.arrow-right');
const Seasons = document.querySelector('.seasons');

// open menu
openMenu.addEventListener("click" , () =>{
    openMenu.classList.toggle("rotate");
    Seasons.classList.toggle("open")
})