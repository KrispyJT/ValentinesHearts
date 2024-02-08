const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const messageDiv = document.getElementById('message');
const animationDiv = document.getElementById('animation');

yesButton.addEventListener('click', function() {
  messageDiv.textContent = 'YAAAY! 💖';
  messageDiv.style.color = 'green';
  animationDiv.innerHTML = '<img src="heart.gif" alt="heart animation">';
});

noButton.addEventListener('click', function() {
  messageDiv.textContent = 'Are you sure?';
  messageDiv.style.color = 'red';
  animationDiv.innerHTML = '<img src="dog.gif" alt="dog animation">';
  yesButton.textContent = 'YES';
  yesButton.style.fontSize = '16px';
  yesButton.style.padding = '8px 16px';
  yesButton.style.margin = '0 5px';
  noButton.textContent = 'Think Harder';
});
