/*
Snack 1

Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while*/

// Richiesta ad utente numero per 5 volte ciclo FOR

// var size = 5;
// var somma = 0;

// for (var i = 1; i <= size; i++){
//     var number = parseInt(prompt('Inserisci numero ' + i + ' di ' + size ));
//     somma += number;

// }

// console.log('la somma dei numeri inseriti è: ', somma);



// Richiesta ad utente numero per 5 volte ciclo WHILE

// var size = 5;
// var somma = 0;
// var counter = 1;

// while (counter <= size){
//      var number = parseInt(prompt('Inserisci numero ' + counter + ' di ' + size ));
//      somma += number;
//      counter++;

// }
// console.log('La somma dei numeri inseriti è: ', somma);

/*********************************************************************************************** */

/*
Snack 2
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo*/

// Richiesta numero

// var number = parseInt(prompt('Inserire un numero')); 

// while(isNaN(number)){
//     number = parseInt(prompt('Prego inserire un numero')); // Verifico numero
// }

// if (number % 2 === 0){
//     console.log('Numero Pari, il numero inserito è: ', number);
// } else {
//     console.log('Numero inserito dispari, il suo successivo è: ', ++number);
// }


/******************************************************************************************** */


/*
Snack 3
Generatore di “nomi e cognomi” casuali: prendendo una lista di nomi e una lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.*/

// Creo liste di nomi e cognomi

// var nomi = ['giuseppe', 'michele', 'sara', 'pinco', 'davide'];
// var cognomi = ['mandriani', 'patruno', 'preziosa', 'vece', 'pallino'];
// var invitati = [];

// for (var i = 0; i < 3; i++){
//     // Generazione nomi random
//     var nomiRandom = Math.floor(Math.random() * nomi.length);
//     // console.log(nomiRandom);
    

//     // Generazione cognomi Cognomi Random
//     var cognomiRandom = Math.floor(Math.random() * cognomi.length);
//     // console.log(cognomiRandom);

//     // Genero nuova variabile per combinazione e aggiungo alla lista di invitati
//     var fullName = nomi[nomiRandom] + ' ' + cognomi[cognomiRandom];

//     invitati.push(fullName);
    
// }

// console.log(invitati); // Stampo lista di 3  nomi e cognomi random


/********************************************************************************************** */


/*
Snack 4
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari*/

// Creo array di numeri interi 

// var numeri =[1, 5, 9, 10, 99, 15];
// console.log(numeri);
// var somma = 0;

// for(var i=0; i<numeri.length; i++){
//     if(i % 2 !== 0){
//         somma += numeri[i]; // Aggiungo a somma il valore di i
//     }
// }

// console.log('La somma dei numeri in posizione dispari dell\' array è: ', somma);  // Stampo la somma

/********************************************************************************************************* */


/*
Snack 5 - Bonus
Crea due array di numeri che hanno un numero di elementi diversi.
Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.*/

// Creo array con lenght diversa

var listOne = [2, 4, 6, 8, 9, 2, 1, 12];
console.log('lunghezza array 1: ', listOne.length);

var listTwo = [2, 2 , 2];
console.log('lunghezza array 2: ', listTwo.length);


if(listTwo.length < listOne.length){
    do{
        var numberRandom = Math.floor(Math.random() * 100 + 1);
        listTwo.push(numberRandom);
    } while(listTwo.length < listOne.length);
    console.log('lunghezza array 1:', listOne.length);
    console.log('componenti array 1: ', listOne)
    console.log('lunghezza array 2: ', listTwo.length);
    console.log('componenti array 2: ', listTwo)

} else if(listTwo.length > listOne.length){
    do{
        var numberRandom = Math.floor(Math.random() * 100 + 1);
        listOne.push(numberRandom);
    } while(listOne.length < listTwo.length);
    console.log('lunghezza array 1:', listOne.length);
    console.log('componenti array 1: ', listOne)
    console.log('lunghezza array 2: ', listTwo.length);
    console.log('componenti array 2: ', listTwo)

} else {
    console.log("array stessa lunghezza")
}





