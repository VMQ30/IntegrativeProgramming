const form = document.getElementById("castingForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();

    const title = form.querySelector("input[placeholder='Project Title']").value;
    const role = form.querySelector("input[placeholder='Role']").value;
    const location = form.querySelector("input[placeholder='Location']").value;
    const description = form.querySelector("textarea").value;
    const deadline = form.querySelector("input[type='date']").value;

    const calls = JSON.parse(localStorage.getItem("castingCalls")) || [];

    calls.push({ title, role, location, description, deadline });

    localStorage.setItem("castingCalls", JSON.stringify(calls));

    alert("✅ Casting call posted!");
    form.reset();
});