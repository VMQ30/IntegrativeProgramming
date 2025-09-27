(function(){
    closeModal();
})()

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