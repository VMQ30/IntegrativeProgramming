(function(){
    dashboard()
    document.addEventListener('DOMContentLoaded', loadProfile)
})()

function dashboard(){
    const dashboard = document.querySelector('.dashboard')
    dashboard.addEventListener('click', () => {
        window.location.href = 'talent-dashboard.html'
    })
}

async function loadProfile(){
    const token = localStorage.getItem('token')

    if(!token){
        alert('You must be logged in to view your profile')
        window.location.href = 'register.html'
        return
    }

    const response = await fetch('http://localhost:5000/profile/me', {
        headers:{
            "Authorization" : `Bearer ${token}`
        }
    })

    const data = await response.json()

    if(!response.ok){
        alert(data.msg || 'Failed to load profile')
        return
    }

    const profile = data.profile

    document.getElementById("actor-name").textContent = profile.stageName
    document.getElementById("actor-age").textContent = `Age: ${profile.age}`
    document.getElementById("actor-gender").textContent = `Gender: ${profile.gender}`
    document.getElementById("actor-location").textContent = `Location: ${profile.location}`
    document.getElementById("actor-ethnicity").textContent = `Ethnicity: ${profile.ethnicities?.join(", ")}`
    document.getElementById("actor-skills").textContent = `Skills: ${profile.skills?.join(", ")}`
    
}