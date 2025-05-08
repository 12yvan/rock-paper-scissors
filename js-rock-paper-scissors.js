const score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  lost: 0,
  ties: 0
};
countScore();
function playGame  (playerMove) {
  const compMove = computerMove();
  let outcome = '';

  if (playerMove === 'rock') {
    if (compMove === 'rock') 
      outcome = 'Tie.';
    else if (compMove === 'paper')
      outcome = 'You Lost.';
    else if (compMove === 'scissors')
      outcome = 'You Won.';
  }

  if (playerMove === 'paper') {
    if (compMove === 'rock') 
      outcome = 'You Won.';
    else if (compMove === 'paper')
      outcome = 'Tie.';
    else if (compMove === 'scissors')
      outcome = 'You Lost.';
  }

  if (playerMove === 'scissors') {
    if (compMove === 'rock') 
      outcome = 'You Lost.';
    else if (compMove === 'paper')
      outcome = 'You Won.';
    else if (compMove === 'scissors')
      outcome = 'Tie.';
  }
  let resDisplay = document.querySelector('.display-result');
  resDisplay.innerHTML = `${outcome}`; 
  countScore(outcome);
  document.querySelector('.choice-display').innerHTML = `   You <img class="move-icon" src="images/${playerMove}-emoji.png"> 
  <img class="move-icon" src="images/${compMove}-emoji.png"> Computer`;
}

function countScore (outcome) {
  if (outcome === 'You Won.') {
    score.wins += 1;
  } else if (outcome === 'You Lost.') {
    score.lost += 1;
  } else if (outcome === 'Tie.') {
    score.ties += 1;
  }
  const scoreWriter = document.querySelector('.score-display');
  scoreWriter.innerHTML = `Wins: ${score.wins} Lost: ${score.lost} Ties: ${score.ties}`;
  localStorage.setItem('score', JSON.stringify(score));
}

function computerMove () {
  const compMove = Math.ceil(Math.random() * 3);
  let result = '';
  if (compMove === 1) {
    result = 'rock';
  } else if (compMove === 2) {
    result = 'paper';
  } else if (compMove === 3) {
    result = 'scissors';
  }
  return result;
}