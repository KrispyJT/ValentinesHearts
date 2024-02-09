const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const resizeButton = document.getElementById('resizeButton'); // Added resizeButton
const messageDiv = document.getElementById('message');
const animationDiv = document.getElementById('animation');

// Function to handle button size increase
resizeButton.addEventListener('click', function() {
  let sizeMultiplier = parseFloat(getComputedStyle(resizeButton).getPropertyValue('font-size')) || 16; // Get the current font size
  sizeMultiplier += 5; // Increase font size by 5px each time
  resizeButton.style.fontSize = sizeMultiplier + 'px'; // Apply new font size
});

// Function to handle "Yes" button click
yesButton.addEventListener('click', function() {
  messageDiv.textContent = 'YAAAY! 💖';
  messageDiv.style.color = 'green';
  animationDiv.innerHTML = '<img src="heart.gif" alt="heart animation">';
  yesButton.style.fontSize = '24px'; // Increase font size for YES button
});

// Function to handle "No" button click
noButton.addEventListener('click', function() {
  messageDiv.textContent = 'Are you sure?';
  messageDiv.style.color = 'red';
  animationDiv.innerHTML = '<img src="dog.gif" alt="dog animation">';
  yesButton.textContent = 'YES';
  yesButton.style.fontSize = '16px'; // Reset font size for YES button
  yesButton.style.padding = '10px 20px'; // Reset padding for YES button
  noButton.textContent = 'Think Harder';
  noButton.style.fontSize = '12px'; // Decrease font size for Think Harder button
  noButton.style.padding = '8px 16px'; // Decrease padding for Think Harder button
});
