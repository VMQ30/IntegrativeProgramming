class Actors{
    constructor(name, age, address, race, gender, skills, photo){
        this.name = name,
        this.age = age,
        this.address = address,
        this.race = race,
        this.gender = gender,
        this.skills = skills,
        this.photo = photo
    }
}

(function(){
    const actors = [
        new Actors("RJ Cruz", 27, "Manila, Philippines", "Asian", "Male", ["Stage Acting", "Improvisation", "Singing"], "ActorPhotos/actor1.jpg"),
        new Actors("Jane Smith", 25, "Quezon City, Philippines", "Asian", "Female", ["Dance", "Voice Acting", "Modeling"], "ActorPhotos/actor2.jpg"),
        new Actors("Carlos Reyes", 30, "Cebu, Philippines", "Hispanic", "Male", ["Stage Combat", "Guitar", "Drama"], "ActorPhotos/actor3.jpg"),
        new Actors("Maria Santos", 22, "Davao, Philippines", "Asian", "Female", ["Singing", "Ballet", "Hosting"], "ActorPhotos/actor4.jpg"),
        new Actors("David Johnson", 35, "New York, USA", "Caucasian", "Male", ["Film Acting", "Accents", "Comedy"], "ActorPhotos/actor5.jpg"),
        new Actors("Emily Brown", 29, "London, UK", "Caucasian", "Female", ["Theater", "Poetry Reading", "Dance"], "ActorPhotos/actor6.jpg"),
        new Actors("Hiro Tanaka", 31, "Tokyo, Japan", "Asian", "Male", ["Stage Acting", "Sword Fighting", "Voice Acting"], "ActorPhotos/actor7.jpg"),
        new Actors("Aiko Nakamura", 26, "Osaka, Japan", "Asian", "Female", ["Anime Voice Acting", "Dance", "Singing"], "ActorPhotos/actor8.jpg"),
        new Actors("Michael Lee", 28, "Los Angeles, USA", "Asian-American", "Male", ["Comedy", "Hosting", "Improvisation"], "ActorPhotos/actor9.jpg"),
        new Actors("Sarah Williams", 24, "Toronto, Canada", "Caucasian", "Female", ["Singing", "Stage Combat", "Dance"], "ActorPhotos/actor10.jpg"),
        new Actors("Alex Morgan", 27, "San Francisco, USA", "Caucasian", "Non-binary", ["Drama", "Stand-up Comedy", "Improvisation"], "ActorPhotos/actor11.jpg"),
        new Actors("Jordan Kim", 23, "Seoul, South Korea", "Asian", "Non-binary", ["Dance", "Rap", "Voice Acting"], "ActorPhotos/actor12.jpg"),
        new Actors("Riley Parker", 32, "Sydney, Australia", "Caucasian", "Other", ["Stage Acting", "Directing", "Photography"], "ActorPhotos/actor13.jpg"),
        new Actors("Sam Garcia", 29, "Mexico City, Mexico", "Hispanic", "Non-binary", ["Singing", "Guitar", "Poetry"], "ActorPhotos/actor14.jpg"),
        new Actors("Taylor Brooks", 26, "Chicago, USA", "African-American", "Other", ["Film Acting", "Dance", "Spoken Word"], "ActorPhotos/actor15.jpg"),
        new Actors("Chen Wei", 32, "Beijing, China", "Asian", "Male", ["Martial Arts", "Stage Acting", "Voice Acting"], "ActorPhotos/actor16.jpg"),
        new Actors("Li Na", 28, "Shanghai, China", "Asian", "Female", ["Dance", "Singing", "Drama"], "ActorPhotos/actor17.jpg"),
        new Actors("Peter Müller", 34, "Berlin, Germany", "Caucasian", "Male", ["Stage Acting", "Accents", "Film Acting"], "ActorPhotos/actor18.jpg"),
        new Actors("Anna Schmidt", 26, "Munich, Germany", "Caucasian", "Female", ["Piano", "Singing", "Theater"], "ActorPhotos/actor19.jpg"),
        new Actors("Nia Mensah", 22, "Cape Coast, Ghana", "African", "Non-binary", ["Singing", "Drama", "Modeling"], "ActorPhotos/actor20.jpg")
    ];
    displayCards(actors);
    dashboard();
})()

function displayCards(actors){
    const gridContainer = document.querySelector('.actors-grid')
    actors.forEach((actor) => {
        const card = document.createElement('div')
        card.classList.add('actors-card')
        card.innerHTML = `<div class="actor-photo">
                <img src="${actor.photo}" alt="${actor.name}">
            </div>
            <div class = 'actors-info'>
                <h4>${actor.name}</h4>
                <p>${actor.address}</p>
                <button class = 'view-more'>Details</button>
            </div>`
        gridContainer.appendChild(card)

        const viewButton = card.querySelector('.view-more')

        viewButton.addEventListener('click', () => {
            displayMoreInfo(actor)
        })
    })
}

function displayMoreInfo(actor){
    const modalContainer = document.querySelector('.actors-details-container')
    const modal = document.querySelector('.actors-details')

    modalContainer.style.display = 'flex'
    modal.innerHTML = `<div class="actor-photo-card">
                <img src="${actor.photo}" alt="${actor.name}">
            </div>

				<div class="actor-info">
					<h2 class="actor-name">${actor.name}</h2>
					<p><strong>Location: ${actor.address}</strong></p>
					<p><strong>Age:</strong> ${actor.age}</p>
					<p><strong>Gender:</strong> ${actor.gender}</p>
					<p><strong>Race:</strong> ${actor.race}</p>

					<div class="actor-skills">
						<h3>Skills</h3>
						<ul class = 'skills-list'>
							
						</ul>
					</div>

					<button>Contact</button>
				</div>`
    
                const skillWrapper = document.querySelector('.skills-list')
    actor.skills.forEach((skill) => {
        const skillContainer = document.createElement('li')
        skillContainer.innerText = skill
        skillWrapper.appendChild(skillContainer)
    })

    closeModal()
}

function closeModal(){
    const modalContainer = document.querySelector('.actors-details-container')
    const modal = document.querySelector('.actors-details')

    modalContainer.addEventListener('click', () => {
        modalContainer.style.display = 'none'
    })

    modal.addEventListener('click', (e) => {
        e.stopPropagation()
    })
}

function dashboard(){
    const dashboard = document.querySelector('.dashboard')
    dashboard.addEventListener('click', () => {
        window.location.href = 'talent-dashboard.html'
    })
}