let count = localStorage.getItem("reviewCount");

if (!count) {
  count = 0;
}

count++;

localStorage.setItem("reviewCount", count);

const counter = document.getElementById("counter");
if (counter) {
  counter.textContent = `You have submitted ${count} review(s).`;
}

const date = document.querySelector("#currentyear")

document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;