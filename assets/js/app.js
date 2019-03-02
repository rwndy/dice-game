let scores = [0, 0]; //membuat variable score yg diisi array dengan nilai 0
let roundScore = 0;
let activePlayer = 0;
let dice;
const scoreGlobal1 = document.getElementById('score-0');
const scoreGlobal2 = document.getElementById('score-1');
const currentScoreP1 = document.getElementById('current-0');
const currentScoreP2 = document.getElementById('current-1');
const imgDice = document.querySelector('.dice');
const btn_roll = document.querySelector('.btn-roll');
const currentResultP1 = document.querySelector('#current-' + activePlayer);

scoreGlobal1.textContent = '0';
scoreGlobal2.textContent = '0';
currentScoreP1.textContent = '0'; // menampilkan current score diplayer 1
currentScoreP2.textContent = '0';
imgDice.style.display = 'none'; //menyembunyikan gambar
btn_roll.addEventListener('click', function() {
  dice = Math.floor(Math.random() * 6) + 1;

  imgDice.style.display = 'block'; //menampilkan gambar
  imgDice.src = 'assets/img/dice-' + dice + '.png'; //menampilkan gambar dadu di src img sesuai angka yang keluar

  if (dice !== 1) {
    roundScore += dice;
    currentResultP1.textContent = roundScore;
  } else {

  }
})