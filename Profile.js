(function(){
    dashboard()
})()

function dashboard(){
    const dashboard = document.querySelector('.dashboard')
    dashboard.addEventListener('click', () => {
        window.location.href = 'talent-dashboard.html'
    })
}