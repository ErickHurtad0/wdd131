let subscribers = JSON.parse(localStorage.getItem("subscribers")) || [];

const messageDiv = document.getElementById("message");

document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault(); 

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const genre = document.getElementById("genre").value;
    const consent = document.getElementById("consent").checked;

    if (!name || !email || !genre || !consent) {
        messageDiv.innerHTML = `<p class="error">Please complete all fields and consent to receive emails.</p>`;
        return;
    }

    const subscriber = { name, email, genre };
    subscribers.push(subscriber);
    localStorage.setItem("subscribers", JSON.stringify(subscribers));

    messageDiv.innerHTML = `<p class="success">Thank you, ${name}! You will now receive daily ${genre} recommendations.</p>`;

    document.getElementById("signupForm").reset();
});


document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("burguer-menu");
    const menu = document.getElementById("main-menu");

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle("active");
    });
});

const date = document.querySelector("#currentyear")

document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;
