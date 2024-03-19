// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.




// dopo 30 sec i numeri scompaiono 
// e compaiono 5 prompt che chiedono i numeri visualizzati prima
// controllo se i numeri inseriti dall'utente sono uguali a quelli generati dal pc 
// riporto quanti e quali ha indovinato  


// genero 5 numeri 
const pcNumbers = [];
while (pcNumbers.length < 5){
    const generateNumber = getRndInteger(1, 100);

    if(!pcNumbers.includes(generateNumber)) {
        pcNumbers.push(generateNumber);
    }
}
// li faccio vedere in pagina 
const listNumber = document.querySelector('#numbers')
listNumber.innerHTML = pcNumbers;

// parte il timer di 30 sec 
// variabile dei secondi 
let seconds = 0;

// selezione dal dom doce far vedere il tempo 
let timer = document.querySelector('#timer');

const cronometer = setInterval(function() {
    seconds++;
    timer.innerHTML = seconds;
   
    if(seconds == 30) {
        clearInterval(cronometer);
  
        listNumber.innerHTML = "";
        setTimeout(question, 1000);
    }
}, 1000);



// FUNCTIONS
function question(){
    

    const userNumbers = [];

    for(let i = 0; i < 5; i++){
        const userImput = parseInt(prompt('dimmi i numeri che hai visto 1 alla volta'));
        userNumbers.push(userImput);
        
    }
       // controllo che i numeri dell'utente siano uguali a quelli del pc
    checkNumbers(userNumbers);
}

// funzione che controlla i numeri uguali
function checkNumbers(userNumbers){
       let correctNumber = 0;
    for (const num of userNumbers){
        if(pcNumbers.includes(num)){
            correctNumber++;
        }
    }
    alert(`hai indovinato ${correctNumber} numeri`);
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}