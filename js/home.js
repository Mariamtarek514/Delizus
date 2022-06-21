// change backgorund
let images = ["landing01.jpg", "landing02.jpg"];
let control = document.getElementById("landing").dataset.background;
let imgIndex;
setInterval(() => {
    images.forEach(() => {
        if (control == "yes") {
            let random = Math.floor(Math.random() * images.length);
            document.getElementById(
                "landing"
            ).style.background = `url("images/${images[random]}") no-repeat center/cover`;
            document.getElementById("landing").style.opacity = "1";
            dynamicHeader(random);
            imgIndex = random;
        }
    });
}, 4000);
let next = document.getElementById("next"),
    prev = document.getElementById("prev");
next.addEventListener("click", () => {
    control = "no";
    imgIndex++;
    if (imgIndex <= images.length - 1) {
        showImgContent(imgIndex);
        dynamicHeader(imgIndex);
    } else {
        imgIndex = 0;
        showImgContent(imgIndex);
        dynamicHeader(imgIndex);
    }
});
prev.addEventListener("click", () => {
    control = "no";
    imgIndex--;
    if (imgIndex >= 0) {
        showImgContent(imgIndex);
        dynamicHeader(imgIndex);
    } else {
        imgIndex = images.length - 1;
        showImgContent(imgIndex);
        dynamicHeader(imgIndex);
    }
});
function showImgContent(index) {
    document.getElementById(
        "landing"
    ).style.background = `url("images/${images[index]}") no-repeat center/cover`;
    document.getElementById("landing").style.opacity = "1";
    control = "yes";
}
function dynamicHeader(index) {
    let header = document.querySelector(".heading");
    if (index == 0) {
        header.innerHTML = "enjoy your dinner";
    } else {
        header.innerHTML = "exquisite Atmosphere";
    }
    header.style.opacity = "1";
}
