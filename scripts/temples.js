



const menuToggle = document.getElementById("burguer-menu");
const mobileNav = document.getElementById("main-menu");

menuToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});







const date = document.querySelector("#currentyear")

document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;