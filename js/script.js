document.addEventListener("DOMContentLoaded", () => {
  let applications = 0;
  let aiEnabled = false;
  let aiInterval;
  let aiCount = 0;

  const applicationsDisplay = document.getElementById("applications");
  const sendButton = document.getElementById("send-button");
  const buyAIButton = document.getElementById("buy-ai");

  function updateDisplay() {
    applicationsDisplay.textContent = applications;
    if (applications >= 100) {
      buyAIButton.disabled = false;
    }
  }

  sendButton.addEventListener("click", () => {
    applications++;
    updateDisplay();
  });

  buyAIButton.addEventListener("click", () => {
    if (applications >= 100) {
      aiCount++;
      applications -= 100;
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
