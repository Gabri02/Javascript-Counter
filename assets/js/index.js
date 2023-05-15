const incrementBtn = document.getElementById('incrementBtn');
const decrementBtn = document.getElementById('decrementBtn');
const counterElement = document.getElementById('counter');

// Inizializza il valore del counter
let counterValue = 0;

// Aggiorna il valore del counter nell'elemento HTML
function updateCounter() {
    counterElement.textContent = counterValue;
}

// Incrementa il valore del counter
function incrementCounter() {
    counterValue++;
    updateCounter();
}

// Decrementa il valore del counter
function decrementCounter() {
    counterValue--;
    updateCounter();
}

//Esegue updatCounter la prima volta per visualizzare 0 al caricamento della pagina
updateCounter();

// Aggiunge gli event listener ai pulsanti
incrementBtn.addEventListener('click', incrementCounter);
decrementBtn.addEventListener('click', decrementCounter);
