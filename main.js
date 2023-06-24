const container = document.querySelector(".container");


let LimitedTime = 3000 ; // 3s
let lastTimeMouseMoved = new Date() ;

container.addEventListener('mousemove' , () => {
    lastTimeMouseMoved = new Date() ;
    container.classList.remove('Concealment') ;
})

function deactiveCn(){
    let nowDate = new Date() ;
    let operatorTime = nowDate - lastTimeMouseMoved ;
    if( operatorTime >= LimitedTime){
        container.classList.add("Concealment")
    }

    requestAnimationFrame(deactiveCn)
}
deactiveCn() ;