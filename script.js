document.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll(".number");
  const submit = document.querySelector(".btn");
  const rating = document.querySelector(".rating");
  const card = document.querySelector(".main-card");
  const success = document.querySelector(".Thank_you");
  const warningMessage = document.querySelector('.warning-message');

  let value = null;

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      buttons.forEach(function(btn) {
        btn.classList.remove('list__change');
      });
      button.classList.add('list__change');
      value = button.textContent;
    });
  });

  submit.addEventListener('click', function() {
    if (value) {
      rating.textContent = value;
      card.style.display = "none";
      success.style.display = "inline";
      warningMessage.style.display = 'none'; // Hide the warning message
    } else {
      warningMessage.style.display = 'flex'; // Show the warning message
    }
  });
});