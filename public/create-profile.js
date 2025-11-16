(function(){
    checkAge();
    buttonClicked();
    dashboardButton();
    addSkills()
})()

function dashboardButton(){
    const dashboardButton = document.querySelector('.dashboard')
    dashboardButton.addEventListener('click', () =>{
        window.location.href = 'talent-dashboard.html'
    })
}

function checkAge(){
    const nextButton = document.querySelector('.next')
    const modalContainer = document.querySelector('.modal-container')
    const age = document.querySelector('.user-age')
    nextButton.addEventListener('click', () => {
        if (age.value < 18){
            modalContainer.style.display = 'flex'
            modalContainer.innerHTML = `<div class = 'confirmation'>
                <h3>Verify your Identity</h3>
                <p>ACTor.PH does not allow the creation of user profiles for children under the age of 18 without their parent or legal guardian’s consent. By checking the box below, you hereby affirm that you are the parent or legal guardian of the child whose profile you’re creating.</p>

                <div class = 'confirmation-box'>
                    <input type = "checkbox" class = 'confirm-age'>
                    <p>I certify that I am the parent or legal guardian of the child whose ACTor.PH profile I am creating, and I consent to the release of personally identifiable information of this child on ACTor.PH.</p>
                </div>

                <button class = 'confirm-button'>Next</button>
            </div>`

            const modal = document.querySelector('.confirmation')
            closeModal(modal);

        }

    })
}

function closeModal(modal){
    const modalBackground = document.querySelector('.modal-container')

    modalBackground.addEventListener('click', () => {
        modalBackground.style.display = 'none'
    })

    modal.addEventListener('click', (e) => {
        e.stopPropagation();
    })
}

function buttonClicked(){
    const buttons = document.querySelectorAll('.option-button')
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            button.style.backgroundColor = '#ff1b69'
            button.style.color = 'white'
        })
    })
}

function addSkills(){
    const addMoreButton = document.querySelector('.add-skills')
    const modalContainer = document.querySelector('.modal-container')
    addMoreButton.addEventListener('click', () => {
        modalContainer.style.display = 'flex'
        modalContainer.innerHTML = `<div class = 'modal'>
                <h3>Add a New Skill</h3>
                <input type="text" class="new-skill" placeholder="Enter skill name">
                <div>
                    <button class="save-skill">Save</button>
                    <button class="close-skill-modal">Cancel</button>
                </div>
            </div>`

        const modal = document.querySelector('.modal')
        const close = document.querySelector('.close-skill-modal')

        close.addEventListener('click', () => {
            modalContainer.style.display = 'none'
        })
        
        closeModal(modal)
    })
}

document.getElementById("submitProfile").addEventListener("click", async () => {
    const stageName = document.getElementById("stage-name").value;
    const age = document.getElementById("age").value;
    const location = document.getElementById("location").value;

    // Collect selected gender
    const genderButtons = document.querySelectorAll(".gender .option-button");
    let selectedGender = null;
    genderButtons.forEach(btn => {
        if (btn.classList.contains("selected")) selectedGender = btn.textContent;
    });

    // Collect selected ethnicities
    const ethButtons = document.querySelectorAll(".ethnicity .option-button");
    const selectedEthnicities = [];
    ethButtons.forEach(btn => {
        if (btn.classList.contains("selected")) selectedEthnicities.push(btn.textContent);
    });

    // Collect skills
    const skillButtons = document.querySelectorAll(".skills .option-button");
    const selectedSkills = [];
    skillButtons.forEach(btn => {
        if (btn.classList.contains("selected")) selectedSkills.push(btn.textContent);
    });

    // Save to backend
    const profileData = {
        stageName,
        gender: selectedGender,
        ethnicities: selectedEthnicities,
        age,
        location,
        skills: selectedSkills
    };

    try {
        const response = await fetch("http://localhost:5000/profile/create", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(profileData),
        });

        const data = await response.json();

        if (data.success) {
            alert("Profile created successfully!");
            window.location.href = "talent-dashboard.html";
        } else {
            alert("Error: " + data.message);
        }
    } catch (error) {
        alert("Something went wrong.");
        console.log(error);
    }
});

// Add click selection logic for buttons
document.querySelectorAll(".option-button").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.classList.toggle("selected");
    });
});
