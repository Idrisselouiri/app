const container = document.querySelector('.container');
let lastMouveTime = new Date() ;
const inactiveTime = 3000 ;
document.addEventListener("mousemove" , () =>{
    lastMouveTime = new Date() ;
    container.classList.remove('inmovid') ;
})

function removeCN(){
    let now = new Date();
    let totalDate = now - lastMouveTime ;
    if(totalDate >= inactiveTime){
        container.classList.add("inmovid")
    }
    requestAnimationFrame(removeCN)
}
removeCN()


