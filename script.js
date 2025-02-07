let secretWord = '';
let attempts = 5;

function startGame() {
  secretWord = document.getElementById('secretWord').value.trim().toLowerCase();
  if (secretWord === '') {
    alert('Please enter a secret word!');
    return;
  }

  // Hide the input section and show the game section
  document.getElementById('playerInput').style.display = 'none';
  document.getElementById('gameSection').style.display = 'block';
}

function checkGuess() {
  const guess = document.getElementById('guessInput').value.trim().toLowerCase();
  if (guess === '') {
    alert('Please enter a guess!');
    return;
  }

  if (guess == secretWord) {
    document.getElementById('resultMessage').textContent = 'Congratulations! You guessed the right word!';
    document.getElementById('gameSection').style.display = 'none';
    document.getElementById('gameOver').style.display = 'block';
  } else {
    attempts--;
    if (attempts > 0) {
      document.getElementById('resultMessage').textContent = 'Wrong guess! Try again!';
      document.getElementById('attemptsLeft').textContent = attempts;
    } else {
      document.getElementById('resultMessage').textContent = `Game Over! The correct word was: ${secretWord}`;
      document.getElementById('gameSection').style.display = 'none';
      document.getElementById('gameOver').style.display = 'block';
    }
  }
}

function resetGame() {
  attempts = 5;
  document.getElementById('secretWord').value = '';
  document.getElementById('guessInput').value = '';
  document.getElementById('resultMessage').textContent = '';
  document.getElementById('attemptsLeft').textContent = attempts;

  document.getElementById('playerInput').style.display = 'block';
  document.getElementById('gameSection').style.display = 'none';
  document.getElementById('gameOver').style.display = 'none';
}
