(function(){
    movePanel()
})()

function movePanel(){
    const panel = document.querySelector('.panel')
    const moveToSignIn = document.querySelector('.change-sign-in')
    const moveToSignUp = document.querySelector('.change-sign-up')

    const signUpForm = document.querySelector('.sign-up')
    const signInForm = document.querySelector('.sign-in')

    const signUpPanel = document.querySelector('.sign-up-panel')
    const signInPanel = document.querySelector('.sign-in-panel')

    moveToSignIn.addEventListener('click', () => {
        panel.classList.add('change-panel')
        signInPanel.classList.add('move-left')
        signUpPanel.classList.remove('move-right')
    })

    moveToSignUp.addEventListener('click', () => {
        panel.classList.remove('change-panel')
        signInPanel.classList.remove('move-left')
        signUpPanel.classList.add('move-right')
    })
}