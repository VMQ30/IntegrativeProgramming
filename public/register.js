(function () {
    movePanel();
    checkTextBox();

    document.querySelector(".sign-in-form").addEventListener("submit", login);
    document.querySelector(".sign-up-form").addEventListener("submit", signup);
})();

function checkTextBox() {
    document.querySelectorAll('.textbox').forEach(input => {
        input.addEventListener('input', () => {
            input.parentElement.classList.toggle('has-text', input.value.trim() !== "");
        });
    });
}

function movePanel() {
    const panel = document.querySelector('.panel');
    const signIn = document.querySelector('.change-sign-in');
    const signUp = document.querySelector('.change-sign-up');

    const signUpPanel = document.querySelector('.sign-up-panel');
    const signInPanel = document.querySelector('.sign-in-panel');

    signUp.addEventListener('click', () => {
        panel.classList.add('change-panel')
        signUpPanel.classList.add('move-left')
        signUpPanel.style.opacity = '0'
        signInPanel.style.opacity = '1'
        signInPanel.classList.add('move-left')
    });

    signIn.addEventListener('click', () => {
        panel.classList.remove('change-panel')
        signUpPanel.classList.remove('move-left')
        signInPanel.classList.remove('move-left')
        signUpPanel.style.opacity = '1'
        signInPanel.style.opacity = '0'
    });
}

async function login(event) {
    event.preventDefault();
    const email = document.querySelector("#sign-in-email").value;
    const password = document.querySelector("#sign-in-password").value;

    const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://actorsph.onrender.com";

    const response = await fetch((`${API_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
        localStorage.setItem("token", data.token)
        window.location.href = "talent-dashboard.html";
    } else {
        alert(data.msg);
    }
}

async function signup(event) {
    event.preventDefault();
    const firstName = document.querySelector("#first-name").value;
    const lastName = document.querySelector("#last-name").value;
    const email = document.querySelector("#signup-email").value;
    const password = document.querySelector("#sign-up-password").value;
    const confirm = document.querySelector("#signup-confirm-password").value;

    if (password !== confirm) {
        alert("Passwords do not match");
        return;
    }

    const API_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000"
    : "https://actorsph.onrender.com";

    const response = await fetch(`${API_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email, password })
    });

    const data = await response.json();

    if (response.ok) {
        alert("Signup successful! You can now sign in.");
    } else {
        alert(data.msg);
    }
}
