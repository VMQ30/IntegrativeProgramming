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