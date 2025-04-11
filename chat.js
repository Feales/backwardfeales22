document.addEventListener("DOMContentLoaded", () => {
  const chatbotContainer = document.getElementById("chatbot-container");

  // Create chatbot response function
  const chatbotResponse = (message) => {
    const response = document.createElement("div");
    response.classList.add("chatbot-response");
    response.innerHTML = message;
    chatbotContainer.appendChild(response);
  };

  // Handle user input
  const userInputHandler = () => {
    const userMessage = document.getElementById("user-input").value;

    if (userMessage) {
      const userMessageElement = document.createElement("div");
      userMessageElement.classList.add("user-message");
      userMessageElement.innerHTML = userMessage;
      chatbotContainer.appendChild(userMessageElement);

      // Clear the input field
      document.getElementById("user-input").value = "";

      // Display a response based on user input
      if (userMessage.toLowerCase().includes("hello")) {
        chatbotResponse("Hi there! 👋 How can I help you today?");
      } else if (userMessage.toLowerCase().includes("portfolio")) {
        chatbotResponse("You're on my portfolio page! You can ask me about my work.");
      } else {
        chatbotResponse("Sorry, I didn't understand that. Try saying 'Hello' or 'Portfolio'.");
      }
    }
  };

  // Trigger the chatbot response when user submits input
  document.getElementById("submit-btn").addEventListener("click", userInputHandler);
});
