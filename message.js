class Contacts{
    constructor(name, time, message){
        this.name = name;
        this.time = time;
        this.message = message;
        this.element = null;
    }
}

class Message{
    constructor(name, message){
        this.name = name;
        this.message = message;
    }
}

(function(){
    styleMessage();
    sendMessage();
    dashboard()
})();

function dashboard(){
    const dashboard = document.querySelector('.dashboard')
    dashboard.addEventListener('click', () => {
        window.location.href = 'talent-dashboard.html'
    })
}
function sendMessage(){
    const sendButton = document.querySelector('.send')
    const chatText = document.querySelector('.chat-text')
    const chats = document.querySelector('.chat-messages')

    sendButton.addEventListener('click', () => {
        console.log(chatText.value)
        const message = document.createElement('div')
        message.innerText = chatText.value
        message.classList.add('message')
        message.classList.add('sender')
        chats.appendChild(message)
        chatText.value = null
    })
}

function styleMessage(){
    const contactArray = [
        new Contacts("NexaCloud Solutions", "10:42 AM", "Maria: Our DevOps team has pushed the latest security patch to production."),
        new Contacts("QuantumByte AI", "Yesterday, 3:15 PM", "Dray: Can you confirm the model version used for the last deployment?"),
        new Contacts("CircuitStream Labs", "Today, 9:58 AM", "Mark: The real-time analytics dashboard is now fully operational."),
        new Contacts("FusionStack Technologies", "Friday, 6:31 PM", "Jenny: We've integrated the new API endpoint for billing queries."),
        new Contacts("VertexNet Security", "Monday, 11:02 AM", "Amy: All servers passed the vulnerability scan with no critical issues.")
    ];

    contactArray.forEach((contact) =>{
        const contactChatDetails = document.createElement("div");
        const contactChatBox = document.createElement("div");
        const contactPic = document.createElement("div");
        const contactMessage = document.createElement("p");
        const contactTime = document.createElement("p");
        const contactName = document.createElement("h3");
        const chatSidebar = document.querySelector(".contact-list");

        contact.element = contactChatBox;

        contactChatBox.style.display = "flex";
        contactChatBox.style.marginTop = "15px";
        contactChatBox.style.cursor = "pointer";
        contactChatBox.style.padding = "5px";
        contactChatBox.style.borderRadius = "10px";
        contactChatBox.classList.add("hover-div");

        contactPic.classList.add('profile-pic');

        contactTime.style.fontSize = "13px";
        contactTime.style.color = "#ff1b69";
 
        contactMessage.style.fontSize = "15px";
        contactMessage.style.whiteSpace = "nowrap";
        contactMessage.style.overflow = "hidden";
        contactMessage.style.textOverflow = "ellipsis";
        contactMessage.style.width = "15vw";
        contactMessage.style.color = "rgba(0, 0, 0, 0.54)";

        contactMessage.textContent = contact.message;
        contactTime.textContent = contact.time;
        contactName.textContent = contact.name;

        contactChatDetails.appendChild(contactName);
        contactChatDetails.appendChild(contactTime);
        contactChatDetails.appendChild(contactMessage);

        contactChatBox.appendChild(contactPic);
        contactChatBox.appendChild(contactChatDetails);
        
        chatSidebar.appendChild(contactChatBox);
    });
}