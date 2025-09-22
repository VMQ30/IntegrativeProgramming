(function(){
    movePanel()
})()

function movePanel(){
    const panel = document.querySelector('.panel')
    const moveToSignIn = document.querySelector('.change-sign-in')
    const moveToSignUp = document.querySelector('.change-sign-up')

    const signUpForm = document.querySelector('.sign-up')
    const signInForm = document.querySelector('.sign-in')

    moveToSignIn.addEventListener('click', () => {
        panel.classList.add('change-panel')
    })

    moveToSignUp.addEventListener('click', () => {
        panel.classList.remove('change-panel')
    })
}