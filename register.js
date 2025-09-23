(function(){
    movePanel()
})()

function movePanel(){
    const panel = document.querySelector('.panel')
    const signIn = document.querySelector('.change-sign-in')
    const signUp = document.querySelector('.change-sign-up')

    const signUpForm = document.querySelector('.sign-up')
    const signInForm = document.querySelector('.sign-in')

    const signUpPanel = document.querySelector('.sign-up-panel')
    const signInPanel = document.querySelector('.sign-in-panel')

    signUp.addEventListener('click', () => {
        panel.classList.add('change-panel')
        signUpPanel.classList.add('move-left')
        signUpPanel.style.opacity = '0'
        signInPanel.style.opacity = '1'
        signInPanel.classList.add('move-left')
    })

    signIn.addEventListener('click', () => {
        panel.classList.remove('change-panel')
        signUpPanel.classList.remove('move-left')
        signInPanel.classList.remove('move-left')
        signUpPanel.style.opacity = '1'
        signInPanel.style.opacity = '0'
    })
}