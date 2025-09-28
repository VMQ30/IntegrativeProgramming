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

const OPENAI_API_KEY = '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'

sendBtn.addEventListener("click", async () => {
  const message = userInput.value.trim();
  if (!message) return;

  // show user message
  chatMessages.innerHTML += `<p><b>You:</b> ${message}</p>`;
  userInput.value = "";

  // show placeholder
  const botReply = document.createElement("p");
  botReply.innerHTML = `<b>Aivy:</b> <em>Thinking...</em>`;
  chatMessages.appendChild(botReply);
  chatMessages.scrollTop = chatMessages.scrollHeight;

  try {
    const res = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          { role: "system", content: "You are a helpful AI named Aivy." },
          { role: "user", content: message },
        ],
      }),
    });

    const data = await res.json();

    if (data.error) {
      botReply.innerHTML = `<b>Aivy:</b> Error: ${data.error.message}`;
    } else {
      const reply = data.choices[0].message.content;
      botReply.innerHTML = `<b>Aivy:</b> ${reply}`;
    }

    chatMessages.scrollTop = chatMessages.scrollHeight;
  } catch (e) {
    botReply.innerHTML = `<b>Aivy:</b> Error: ${e.message}`;
  }
});


