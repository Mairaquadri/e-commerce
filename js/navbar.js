const bar = document.getElementById("bar")
const barButton = document.getElementById("mobileMenu")
const close = document.getElementById("close")

if (bar) {
    bar.addEventListener("click", () => {
        barButton.classList.add("active")
    })
}
if (close) {
    close.addEventListener("click", () => {
        barButton.classList.remove("active")
    })
}



var BigPic = document.getElementById("big-pic");
var SmallPic = document.getElementsByClassName("small-pic");

// if (SmallPic[0]) {
//     SmallPic[0].addEventListener("click", () => {
//         BigPic.src = SmallPic[0].src;
//     })
// }
// if (SmallPic[1]) {
//     SmallPic[1].addEventListener("click", () => {
//         BigPic.src = SmallPic[1].src;
//     })
// }



SmallPic[0].addEventListener("click", () => {
    BigPic.src = SmallPic[0].src;

})
SmallPic[1].addEventListener("click", () => {
    BigPic.src = SmallPic[1].src;

})
SmallPic[2].addEventListener("click", () => {
    BigPic.src = SmallPic[2].src;

})
SmallPic[3].addEventListener("click", () => {
    BigPic.src = SmallPic[3].src;

})