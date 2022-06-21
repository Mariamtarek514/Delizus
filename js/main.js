// change navbar background
let nav = document.querySelector("nav");
window.addEventListener("scroll", (e) => {
    if (this.scrollY >= 20) {
        nav.style.cssText =
            "background:#222;border-bottom:2px solid var(--main-color);";
    } else {
        nav.style.cssText = "background:transparent;border-bottom:none";
    }
});
//toggle navbar list
let showMenu = document.getElementById("open-menu");
let closeMenu = document.getElementById("close-menu");
let menu = document.getElementById("nav-container");
showMenu.addEventListener("click", () => {
    menu.classList.add("list-cng");
});
document.addEventListener("click", (e) => {
    if (
        e.target.id != "open-menu" &&
        e.target.parentElement.id != "open-menu" &&
        e.target.id != "nav-container"
    ) {
        menu.classList.remove("list-cng");
    }
});

// img model
let foundImag = true,
    foundIfram = true,
    openBtn = document.querySelectorAll(".layer i"),
    imgModelSrc = document.querySelector(".img_model figure");
let closeBtn = document.getElementById("close-img"),
    imgModel = document.querySelector(".img_model"),
    image = document.createElement("img"),
    ifram = document.createElement("iframe");
document.addEventListener("click", (e) => {
    if (
        !e.target.classList.contains("toggle-iframe") &&
        !e.target.classList.contains("openIcon") &&
        !e.target.classList.contains("shownImage")
    ) {
        imgModel.style.display = "none";
        if (foundImag == false) {
            imgModelSrc.removeChild(image);
        } else if (foundIfram == false) {
            document.querySelector(
                ".img_model figure .toggle-iframe"
            ).style.display = "none";
        }
        foundImag = true;
        foundIfram = true;
    }
});
// add picture to img model

openBtn.forEach((icon) => {
    icon.addEventListener("click", (e) => {
        addItemToImgModel(e);
    });
});
function addItemToImgModel(element) {
    imgModel.style.display = "block";
    if (element.target == openBtn[0]) {
        document.querySelector(
            ".img_model figure .toggle-iframe"
        ).style.display = "block";
        foundIfram = false;
    } else {
        imgModelSrc.appendChild(image);
        image.className = "shownImage";
        document.querySelector(".img_model figure img").src =
            element.target.parentElement.parentElement.querySelector("img").src;
        foundImag = false;
    }
}
// filter
let select = document.querySelector(".select"),
    menueContainer = document.querySelectorAll(".menu-container");
let selectLinks = document.querySelectorAll(".select li");
selectLinks.forEach((links) => {
    links.addEventListener("click", (e) => {
        removeActiveClass(selectLinks);
        menueContainer.forEach((div) => {
            div.style.display = "none";
            if (div.classList.contains(e.target.dataset.select)) {
                div.style.display = "flex";
                e.target.classList.add("active");
            }
        });
    });
});

// toggle active class
function removeActiveClass(links) {
    links.forEach((link) => {
        link.classList.remove("active");
    });
}
// number section
let numberContainer = document.querySelectorAll(".number_container .number"),
    Section = document.getElementById("number"),
    startedFunction = false;

function startCount(element) {
    let goal = element.dataset.number;
    let counter = setInterval(() => {
        element.textContent++;
        if (element.textContent == goal) {
            clearInterval(counter);
        }
    }, 1000 / goal);
}

window.addEventListener("scroll", () => {
    let top = this.scrollY;
    let windowHeight = this.innerHeight;
    let numberTop = Section.offsetTop;
    let numberHeight = Section.offsetHeight;
    if (top >= numberTop + numberHeight - windowHeight) {
        if (!startedFunction) {
            numberContainer.forEach((num) => {
                startCount(num.querySelector("h3"));
            });
        }
        startedFunction = true;
    }
});
