/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = 0;
document.getElementById('score-1').textContent = 0;
document.getElementById('current-0').textContent = 0;
document.getElementById('current-1').textContent = 0;

//-------------------Roll Dice Button-------------------------------------------------------------
document.querySelector('.btn-roll').addEventListener('click', function(){
  var dice = Math.floor(Math.random() * 6) + 1;
  diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = 'img/dice-' + dice + '.png';

  if (dice != 1) {
    roundScore += dice;
    document.getElementById('current-' + activePlayer).textContent = roundScore;
  } else {
    nextPlayer();
  }

})

//---------------------Hold Button------------------------------------------------------------------
document.querySelector('.btn-hold').addEventListener('click', function(){

  scores[activePlayer] += roundScore;
  document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];

  //----------------------winner-------------------------------------------------------------------
  if (scores[activePlayer] >= 100) {
    document.getElementById('name-' + activePlayer).innerHTML = '<strong>' + 'Winner' + '</strong>';
    document.getElementById('name-' + activePlayer).style.backgroundColor = '#9ad899';
    document.getElementById('name-' + activePlayer).style.color = '#fff';
  }

  nextPlayer();
});


//-------------------------New Player Function-----------------------------
function nextPlayer(){
  document.getElementById('current-' + activePlayer).textContent = 0;
    activePlayer == 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}


//---------------------------- New Game Button------------------------------
document.querySelector('.btn-new').addEventListener('click', function(){

  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;
  document.getElementById('current-0').textContent = 0;
  document.getElementById('current-1').textContent = 0;

  activePlayer = 0;
  document.querySelector('.player-0-panel').classList.add('active');

  document.getElementById('name-0').textContent = 'PLAYER 1';
  document.getElementById('name-1').textContent = 'PLAYER 2';
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.dice').style.display = 'none';

  document.getElementById('name-' + activePlayer).style.backgroundColor = '#fff';
  document.getElementById('name-' + activePlayer).style.color = 'black';
})
