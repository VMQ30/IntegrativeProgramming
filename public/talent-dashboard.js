const chatButton = document.querySelector('.chat-button');
const chatbot = document.querySelector('.chatbot-container');
const closeChat = document.querySelector('.close-chat');
const sendBtn = document.querySelector('.send-button');
const userInput = document.querySelector('.user-input');
const chatMessages = document.querySelector('.chatbot-messages');

chatButton.addEventListener('click', () => {
  chatbot.style.display =
    chatbot.style.display === 'flex' ? 'none' : 'flex';
});

closeChat.addEventListener('click', () => {
  chatbot.style.display = 'none';
});
sendBtn.addEventListener("click", async () => {
  const message = userInput.value.trim();
  if (!message) return;

  chatMessages.innerHTML += `<p><b>You:</b> ${message}</p>`;
  userInput.value = "";

  const botReply = document.createElement("p");
  botReply.innerHTML = `<b>Aivy:</b> <em>Thinking...</em>`;
  chatMessages.appendChild(botReply);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  setTimeout(() => {
    let reply;

    if (/hello|hi/i.test(message)) {
      reply = "Hello! 👋 I'm Aivy. How can I help you today?";
    } 
    
    else if (/name/i.test(message)) {
      reply = "My name is Aivy — your friendly chatbot!";
    } 
    
    else if (/how are you/i.test(message)) {
      reply = "I'm doing great, thank you for asking! 😊";
    } 
    
    else if (/bye|goodbye/i.test(message)) {
      reply = "Goodbye! Have a wonderful day 🌸";
    } 
    
    else {
      reply = `You said: "${message}". That's interesting! Tell me more.`;
    }

    botReply.innerHTML = `<b>Aivy:</b> ${reply}`;
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }, 1000);
});

console.log('hi')
const profileButton = document.querySelector('.profile-button')
profileButton.addEventListener('click', () => {
  window.location.href = 'create-profile.html'
})



