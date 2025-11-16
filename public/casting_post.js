const board = document.getElementById("castingBoard");
const calls = JSON.parse(localStorage.getItem("castingCalls")) || [];

if (calls.length === 0) {
    board.innerHTML = "<p>No casting calls available yet.</p>";
} else {
    calls.forEach((call) => {
    const card = document.createElement("div");
    card.classList.add("casting-card");
    card.innerHTML = `
        <h3>${call.title}</h3>
        <p><strong>Description:</strong> ${call.description}</p>
        <p><strong>Deadline:</strong> ${call.deadline}</p>
        <p><strong>Location:</strong> ${call.location}</p>
    `;
    board.appendChild(card);
    });
}

const dashboard = document.querySelector('.dashboard')
dashboard.addEventListener('click', () => {
    window.location.href = 'talent-dashboard.html'
})
