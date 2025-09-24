const menuToggle = document.getElementById("burguer-menu");
const mobileNav = document.getElementById("main-menu");

menuToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("active");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Mérida Mexico",
    location: "Mérida, Mexico",
    dedicated: "2000, July, 8",
    area: 10700,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/merida-mexico-temple/merida-mexico-temple-14119-main.jpg"
  },
  {
    templeName: "Monterrey Mexico",
    location: "Monterrey, Mexico",
    dedicated: "2002, April, 28",
    area: 16498,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/monterrey-mexico-temple/monterrey-mexico-temple-1068-main.jpg"
  },
  {
    templeName: "McAllen Texas",
    location: "McAllen, Texas, United States",
    dedicated: "2023, October, 8",
    area: 27897,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/mcallen-texas-temple/mcallen-texas-temple-39905-main.jpg"
  },
];

const container = document.getElementById("templesGrid");

function createTempleCard(filteredtemples) {
  container.innerHTML = ""; 
  filteredtemples.forEach(temple => {
    let card = document.createElement("figure");

    let img = document.createElement("img");
    img.src = temple.imageUrl;
    img.alt = temple.templeName;
    img.loading = "lazy";
    card.appendChild(img);

    let name = document.createElement("h3");
    name.textContent = temple.templeName;
    card.appendChild(name);

    let location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;
    card.appendChild(location);

    let dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;
    card.appendChild(dedicated);

    let area = document.createElement("p");
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;
    card.appendChild(area);

    container.appendChild(card);
  });
}

createTempleCard(temples);

const oldLink = document.querySelector("#old");
oldLink.addEventListener('click', () => {
  let oldTemples = temples.filter(temple => {
    let year = parseInt(temple.dedicated.split(",")[0]); 
    return year < 1900;
  });
  createTempleCard(oldTemples);
});

const newLink = document.querySelector("#new");
newLink.addEventListener('click', () => {
  let oldTemples = temples.filter(temple => {
    let year = parseInt(temple.dedicated.split(",")[0]); 
    return year > 2000;
  });
  createTempleCard(oldTemples);
});

const largeLink = document.querySelector("#large");
largeLink.addEventListener('click', () => {
  let oldTemples = temples.filter(temple => {
    let area = parseInt(temple.area); 
    return area > 90000;
  });
  createTempleCard(oldTemples);
});

const smallLink = document.querySelector("#small");
smallLink.addEventListener('click', () => {
  let oldTemples = temples.filter(temple => {
    let area = parseInt(temple.area); 
    return area < 10000;
  });
  createTempleCard(oldTemples);
});

const homeLink = document.querySelector("#home");
homeLink.addEventListener('click', () => {
  createTempleCard(temples);
});

document.getElementById("lastModified").textContent = 
  "Last Modification: " + document.lastModified;