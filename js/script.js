// Visualizzare in un alert 5 numeri casuali.
// 30 secondi dopo la chiusura dell'alert, l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Genero 5 numeri random che l'utente visualizzerà nell'alert
let generateNumbers = generateArray(5, 1, 100);
console.log(generateNumbers);

// Nell'alert faccio vedere i numeri generati
alert(`Memorizza questi 5 numeri ${generateNumbers}`);
// un'alert per dare le istruzioni all'utente
alert('Clicca ok, dopo 30 secondi dovrai scrivere i numeri visualizzati in precedenza');

// Tempo di attesa (30 secondi) prima che l'utente digiti i numeri
setTimeout(startGame, 2000);

// Richiamo la funzione al termine dei 30 secondi 
function startGame(){
    // Creo un array per inserire i numeri dell'utente
    arrayUser = [];
    // PER 5 volte chiedo all'utente di darmi un numero 
    for( let i = 0; i < 5; i++) {
        let userNumber = parseInt(prompt('Indovina i 5 numeri'))
        // SE il numero inserito è incluso nell'array dei numeri da indovinare lo inserisco in un array
        if(generateNumbers.includes(userNumber)) {
            arrayUser.push(userNumber);
            console.log(arrayUser);
        }
    }

    // Stampo il risultato con un alert: indico quanti numeri sono stati indovinati dall'utente e quali
    alert(`Hai indovinato ${arrayUser.length} numero/i e sono i seguenti: ${arrayUser}`);  
}


// ------------------------
// UTILITY FUNCTIONS
// ------------------------
function generateArray(numbers, rangeMin, rangeMax) {
    // genero 16 bombe con numeri casuali in un array vuoto
    // Array vuoto
    const randomArray = [];

    while(randomArray.length < numbers) {
        // creare un numero ramdon da rangeMin a rangeMax
        const randomNumbers = getRndInteger(rangeMin, rangeMax);
        if(!randomArray.includes(randomNumbers)) {
            randomArray.push(randomNumbers);
        }
    }

    return randomArray;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}