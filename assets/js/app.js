let scores, roundScore, activePlayer;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

let dice;
let gamePlay;


const scoreGlobal1 = document.getElementById('score-0');
const scoreGlobal2 = document.getElementById('score-1');
const currentScoreP1 = document.getElementById('current-0');
const currentScoreP2 = document.getElementById('current-1');
const player1 = document.getElementById('name-0');
const player2 = document.getElementById('name-1');

const playerPanel0 = document.querySelector('.player-0-panel');
const playerPanel1 = document.querySelector('.player-1-panel');

const imgDice = document.querySelector('.dice');
const btn_roll = document.querySelector('.btn-roll');
const btn_hold = document.querySelector('.btn-hold');
const btn_new = document.querySelector('.btn-new');

const currentResultP1 = document.querySelector('#current-' + activePlayer);
const GlobalResult = document.querySelector('#score-' + activePlayer);
const winner = document.querySelector('#name-' + activePlayer);
const playerWin = document.querySelector('.player-' + activePlayer + '-panel');

scoreGlobal1.textContent = '0';
scoreGlobal2.textContent = '0';
currentScoreP1.textContent = '0'; // menampilkan current score diplayer 1
currentScoreP2.textContent = '0';
imgDice.style.display = 'none'; //menyembunyikan gambar
btn_roll.addEventListener('click', function() {

  if (gamePlay) {
    dice = Math.floor(Math.random() * 6) + 1;

    imgDice.style.display = 'block'; //menampilkan gambar setelah game dimainkan
    imgDice.src = 'assets/img/dice-' + dice + '.png'; //menampilkan gambar dadu di src img sesuai angka yang keluar

  if (dice !== 1) {
    roundScore += dice;
    currentResultP1.textContent = roundScore; //menambahkan score dan jika mendapatkan angka 1 maka ke player 2
  } else {
    nextPlayer();
    }
  }
  
});

//menyimpan nilai ketika menekan tombol hold
btn_hold.addEventListener('click', function() {
  if (gamePlay) {
    
    scores[activePlayer] += roundScore; //menambah current score ke global score

  GlobalResult.textContent = scores[activePlayer];

  // cek kondisi jika player menang
  if (scores[activePlayer] >= 100) {
    winner.textContent = 'winner';
    imgDice.style.display = 'none';
    playerWin.classList.add('winner');
    playerWin.classList.remove('active');

    gamePlay = false;
  } else {
    
    nextPlayer();
  }
  }

});

function nextPlayer() {
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  currentScoreP1.textContent = '0';
  currentScoreP2.textContent = '0';

  playerPanel0.classList.toggle('active');
  playerPanel1.classList.toggle('active');

  imgDice.style.display = 'none';
}

btn_new.addEventListener('click', function() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  imgDice.style.display = 'none';
  gamePlay = true;
  
  scoreGlobal1.textContent = '0';
  scoreGlobal2.textContent = '0';

  currentScoreP1.textContent = '0';
  currentScoreP2.textContent = '0';

  player1.textContent = 'player 1';
  player2.textContent = 'player 2';
  
  playerPanel0.classList.remove('winner');
  playerPanel1.classList.remove('winner');
  
  playerPanel0.classList.remove('active');
  playerPanel1.classList.remove('active');
  playerPanel0.classList.add('active');
});
