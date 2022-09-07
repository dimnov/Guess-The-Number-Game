const answer = Math.floor(Math.random() * 10 + 1);
let guesses = 0;

document.getElementById("submitButton").onclick = function () {

  let guess = document.getElementById("guessField").value
  guesses++;

  if (guess == 0) {
    document.getElementById("text").innerHTML = `Type number!`;
  } else if (guess == answer && guesses == 1) {
    document.getElementById("text").innerHTML = `Wow! First try!🎉🎉🎉`;
  } else if (guess == answer) {
    document.getElementById("text").innerHTML = `You guessed the number in ${guesses} attempts. 🎉🎉🎉`;
  } else if (guess < answer) {
    document.getElementById("text").innerHTML = `Up!⬆️⬆️⬆️`;
  } else {
    document.getElementById("text").innerHTML = `Down!⬇️⬇️⬇️`;
  }
}
document.getElementById("resetButton").onclick = function () {
  window.location.reload();
}