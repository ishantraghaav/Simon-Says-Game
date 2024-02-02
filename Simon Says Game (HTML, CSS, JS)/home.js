let btns = document.querySelectorAll(".option");
let easybtn = document.querySelector("#easy");
let mediumbtn = document.querySelector("#medium");
let hardbtn = document.querySelector("#hard");
let veryHardbtn = document.querySelector("#veryHard");

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(() => {
        btn.classList.remove("userflash");
    }, 150);
}

function btnPress() {
    let btn = this;
    userFlash(btn);
}

easybtn.addEventListener("click", function() {
    window.open(`easy.html`, '_top');
    console.log("opening easy");
});
mediumbtn.addEventListener("click", function() {
    window.open(`medium.html`, '_top');
    console.log("opening medium");
});
hardbtn.addEventListener("click", function() {
    window.open(`hard.html`, '_top');
    console.log("hard medium");
});
veryHardbtn.addEventListener("click", function() {
    window.open(`veryHard.html`, '_top');
    console.log("veryHard medium");
});

for(btn of btns) {
    btn.addEventListener("click", btnPress);
}