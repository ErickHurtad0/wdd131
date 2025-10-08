
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("burguer-menu");
    const menu = document.getElementById("main-menu");

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
});

const date = document.querySelector("#currentyear")

document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;