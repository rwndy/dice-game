let scores = [0, 0]; //membuat variable score yg diisi array dengan nilai 0
let roundScore = 0;
let activePlayer = 0;
const dice = Math.floor(Math.random() * 6) + 1;
const currentScoreP1 = document.querySelector('#current-0').textContent = dice; // menampilkan current score diplayer 1
const imgDice = document.querySelector('.dice').style.display = 'none';
const btn_roll = document.querySelector('.btn-roll').addEventListener('click')

