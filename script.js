let usciti = [];
let disponibili = [];
const c = 1;
const table = document.querySelector('#tabellone');
const btnEstrai = document.querySelector('#estrai');
const btnReset = document.querySelector('#reset');
const lastNumber = document.querySelector('#ultimo-numero');
const cronologiaNum = document.querySelector('#cronologia');
const contatore = document.querySelector('#conteggio');

function rendiTabellone(n) {
  table.textContent = '';
  disponibili = [];

  while (n <= 90) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('numero');

    const textSpan = document.createElement('span');
    textSpan.textContent = n;
    newDiv.appendChild(textSpan);

    if (usciti.includes(n)) {
      newDiv.classList.add('uscito');
    } else {
      disponibili.push(n);
    }

    table.appendChild(newDiv);
    n++;
  }
  conteggio();
};

btnEstrai.addEventListener('click', (e) => {
  e.preventDefault();
  estrai();
});

function estrai() {
  if (disponibili.length === 0) {
    alert("Tutti i numeri sono usciti!");
  } else {
    const indexNumScelto = Math.floor(Math.random() * disponibili.length);
    const numScelto = disponibili[indexNumScelto];
    usciti.push(numScelto);
    lastNumber.innerText = numScelto;
    disponibili.splice(indexNumScelto, 1);
  }
  rendiCronologia();
  rendiTabellone(c);
};

function rendiCronologia() {
  cronologiaNum.innerText = '';
  if (usciti.length === 0) {
    cronologiaNum.innerText = 'Nessun numero estratto.';
  } else {
    cronologiaNum.innerText += usciti.slice(-10).join(', ');
  }
};

btnReset.addEventListener('click', (e) => {
  e.preventDefault();
  usciti = [];
  lastNumber.innerText = "—";
  rendiCronologia();
  rendiTabellone(c);
});

function conteggio() {
  contatore.innerText = usciti.length;
};

window.onload = () => {
  rendiTabellone(c);
};