function sendMessage() {
    let input = document.getElementById("user-input");
    let chatBox = document.getElementById("chat-box");

    let userMsg = document.createElement("p");
    userMsg.textContent = "🧑‍💻 أنت: " + input.value;
    chatBox.appendChild(userMsg);

    let botMsg = document.createElement("p");
    botMsg.textContent = "🤖 حسن AI: هلا فيك! طلبك تحت التنفيذ 😉";
    chatBox.appendChild(botMsg);

    input.value = "";
    chatBox.scrollTop = chatBox.scrollHeight;
}