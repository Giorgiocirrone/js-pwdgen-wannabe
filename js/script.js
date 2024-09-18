
/*

const myDiv = document.getElementById('paragraph');

const firstName = window.prompt('Qual\è il tuo nome ? ');


const secondName = window.prompt('Qual\è il tuo cognome ? ');


const colore = window.prompt('Qual\è il tuo colore preferito ? ')

const number = ('21')


const fullName = firstName + secondName;

const passk = fullName + number;

console.log(passk)

myDiv.innerText = 'ciao la tua password è ', passk;

*/


/*Ciao ragazzi!
esercizio di oggi: (insicurissimo) password generator
nome repo: js-pwdgen-wannabe
Traccia:
Chiedi all’utente il suo nome,
poi chiedi il suo cognome,
poi chiedi il suo colore preferito
Infine stampa in console nomecognomecolorepreferito21
ES: marcolanciverde21
BONUS
Scrivi la password generata in pagina invece che in console!
Nota bene:
- Iniziate stampando un console.log('JS OK') per assicurarvi che la pagina sia  correttamente collegata.
- Fate un bel commento multilinea con gli step che volete intraprendere (fase d'analisi)
- Mentre scrivete il codice, commentate ogni micro step e subito dopo verificate col (console.log())
- Disattivate Live Server finchè lavoriamo coi prompt o gli alert perchè potrebbe dar luogo a comportamenti strani
PS : Abbiamo un 21 da agganciare alla fine della password. Sarà un numero o una stringa? :faccia_pensosa:
Buon lavoro! :sorriso:
*/


/*
1-fase preparatore in cui prendo tutti gli elementi che mi servono dal DOM 
2-preparazione variabili in realzione alla raccolta dati 
3-raccolta dati vera  e propria 
4-elaborazione 
5-fase di out-put

*/


//fase prapratoria 

resultElement = document.getElementById('paragraph');
//validazione 
console.log(resultElement);

//fase di raccolta degli elementi 

const names = prompt('Come ti chiami di nome ?');
console.log(names);//perchè lo taglia ? 
const secondName = prompt('Secondo nome ?');
console.log(secondName);
const favouriteColor = prompt('Quale e il tuo colore preferito?');
console.log(favouriteColor);

const fullName = names + secondName;

//variabile costante 

const codeNumber = '21';
const message = 'La tua password  => '

//fase di lavorazione dei dati 
const passKey = fullName + favouriteColor + codeNumber;


//fase di out-put 

resultElement.innerText = ` la tua passwprd  e ${passKey}`;

console.log(message + passKey);






