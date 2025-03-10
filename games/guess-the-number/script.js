let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const guess = parseInt(document.getElementById('guessInput').value);
    const result = document.getElementById('result');

    if (guess === randomNumber) {
        result.textContent = 'Congratulations! You guessed the number!';
        result.style.color = 'green';
    } else if (guess < randomNumber) {
        result.textContent = 'Too low! Try again.';
        result.style.color = 'red';
    } else if (guess > randomNumber) {
        result.textContent = 'Too high! Try again.';
        result.style.color = 'red';
    }
}