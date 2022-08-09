const textarea = document.querySelector("#textarea");
const total_counter = document.querySelector("#total-counter");
const remaining_counter = document.querySelector("#remaining-counter");

textarea.addEventListener('keyup',()=>{
    // console.log('key is pressed');
    updateCounter();
    updateRemaining();
})
updateCounter();
updateRemaining();

function updateCounter(){
    total_counter.innerText= textarea.value.length
}
function updateRemaining(){
    remaining_counter.innerText= textarea.getAttribute("maxLength")-textarea.value.length;
}