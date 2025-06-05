document.addEventListener("DOMContentLoaded", () => {
  let applications = 0;
  let aiEnabled = false;
  let aiInterval;
  let aiCount = 0;
  let aiCost = 100;

  const applicationsDisplay = document.getElementById("applications");
  const sendButton = document.getElementById("send-button");
  const buyAIButton = document.getElementById("buy-ai");

  function updateDisplay() {
    applicationsDisplay.textContent = applications;
    buyAIButton.disabled = applications < aiCost;
    buyAIButton.textContent = `Hire AI Assistant (Cost: ${Math.ceil(aiCost)})`;
  }

  sendButton.addEventListener("click", () => {
    applications++;
    updateDisplay();
  });

  buyAIButton.addEventListener("click", () => {
    if (applications >= 100) {
      aiCount++;
      applications -= aiCost;
      aiCost = 1.2 * aiCost;
      updateDisplay();
      aiEnabled = true;
      buyAIButton.disabled = true;
      aiInterval = setInterval(() => {
        applications += aiCount * 5;
        updateDisplay();
      }, 1000);
    }
  });
});
