let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result > p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');

function getComputerChoice() 
{
  const choices = ['r', 'p', 's'];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}
function convertCase(anythingIwant) 
{
    if (anythingIwant === 'p') return 'Paper';
    if (anythingIwant === 's') return 'Scissors';
    return 'Rock';
}
function win(userChoice, computerChoice) 
{
  userScore++;
  const userName = 'user'.fontsize(3).sub();
  const compName = 'comp'.fontsize(3).sub();
  const userScore_div = document.getElementById(userChoice);
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertCase(userChoice)}${userName} beats  ${convertCase(computerScore)}${compName}  You win! `;
  userScore_div.classList.add('green-glow');
  setTimeout(() => userScore_div.classList.remove('green-glow'), 300);
}
function loses(userChoice, computerChoice) 
{
  computerScore++;
  const userName = 'user'.fontsize(3).sup();
  const compName = 'comp'.fontsize(3).sup();
  const userScore_div = document.getElementById(userChoice);
  computerScore_span.innerHTML = computerScore;
  userScore_span.innerHTML = userScore;
  result_p.innerHTML = `${convertCase(userChoice)}${userName} loses to  ${convertCase(computerScore)}${compName}. You lose!`;
  userScore_div.classList.add('red-glow');
  setTimeout(() => userScore_div.classList.remove('red-glow'), 300);
}
function draw(userChoice, computerChoice) 
{
  const userName = 'user'.fontsize(3).sup();
  const compName = 'comp'.fontsize(3).sup();
  const userScore_div = document.getElementById(userChoice);
  result_p.innerHTML = `It was a draw! You both chose ${convertCase(userScore)}`;
  userScore_div.classList.add('grey-glow');
  setTimeout(() => userScore_div.classList.remove('grey-glow'), 300);
}
function game(userChoice) 
{
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
          win(userChoice, computerChoice);
          break;
        case 'rp':
        case 'ps':
        case 'sr':
          loses(userChoice, computerChoice);
          break;
        case 'rr':
        case 'ss':
        case 'pp':
          draw(userChoice, computerChoice);
          break;
      }
}
function main() 
{
   rock_div.addEventListener('click', ()  => game('r'));
   paper_div.addEventListener('click', ()  => game('p'));
   scissors_div.addEventListener('click', ()  => game('s')); 
} 
main();