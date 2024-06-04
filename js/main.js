//Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//il prezzo del biglietto è definito in base ai km (0.21 € al km)
//va applicato uno sconto del 20% per i minorenni
//va applicato uno sconto del 40% per gli over 65.
//L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
//Questo richiederà un minimo di ricerca.



//chiedere nome e comogme
let user = prompt("Nome intestatario biglietto");
document.getElementById("passenger").innerHTML = user;


//chiedere quanti chilometri vuole fare l'utente
let distanza = parseInt(prompt("Quanti chilometri vuoi percorrere?"));


console.log(distanza);

// chiedere l'età del utente
let userAge = parseInt(prompt("Quanti anni hai?"));


console.log(userAge);

//calcolare il prezzo del biglietto
// calcolare il relativo sconto in base all'età
// sottrarre il relativo sconto se presente dal prezzo del biglietto 
// stampare il prezzo del bigletto in relazione al età
//arrotondare il prezzo del biglietto a due cifre decimali 
let priceTicket;

if (userAge>65) {
    let price = distanza * 0.21;
    const priceover = ( price * 40) / 100 ;
    priceTicket = (price - priceover).toFixed(2);

    console.log(priceTicket);

}else if (userAge<17) {
     let price = distanza * 0.21;
     const priceunder = (price * 20) / 100;
     priceTicket = (price - priceunder).toFixed(2);

     console.log(priceTicket);

}else{
    priceTicket = (distanza * 0.21).toFixed(2);

     console.log("prezzo finale",priceTicket);
}
console.log(priceTicket);

//stampare costo del biglietto
let prisePrint = priceTicket + " $ ";
console.log(prisePrint);
document.getElementById("ticket").innerHTML = prisePrint;