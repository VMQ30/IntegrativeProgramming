(function(){
    closeModal();
    checkAge();
    buttonClicked();
    dashboardButton();
})()

function dashboardButton(){
    const dashboardButton = document.querySelector('.dashboard')
    dashboardButton.addEventListener('click', () =>{
        window.location.href = 'talent-dashboard.html'
    })
}

function checkAge(){
    const nextButton = document.querySelector('.next')
    const modal = document.querySelector('.confirmation-container')
    const age = document.querySelector('.user-age')
    nextButton.addEventListener('click', () => {
        console.log(age.value)
        if (age.value < 18){
            modal.style.display = 'flex'
        }
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
function closeModal(){
    const modal = document.querySelector('.confirmation')
    const modalBackground = document.querySelector('.confirmation-container')
    modalBackground.addEventListener('click', () => {
        modalBackground.style.display = 'none'
    })

    modal.addEventListener('click', (e) => {
        e.stopPropagation();
    })
}