var hamburger = document.querySelector(".hamburger");
var sidebar = document.querySelector(".sidebar")
var overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", toggleSidebar);

overlay.addEventListener("click", toggleSidebar);

function toggleSidebar() {
    sidebar.classList.toggle("sidebar_opened");
    overlay.classList.toggle("overlay_shown");
    hamburger.classList.toggle("hamburger_activated")
}

function showInfo() {
    document.querySelector(".content-wrapper").innerText = document.body.clientWidth;
};
showInfo();

// i will just add this comment