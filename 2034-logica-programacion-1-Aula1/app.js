// Variables
let numeroMaximoPosible = 20;
let numeroScreto = Math.floor(Math.random () *numeroMaximoPosible)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;

while (numeroUsuario != numeroScreto) {
     numeroUsuario = parseInt (prompt (`Me indicas un número entre 1 y ${numeroMaximoPosible}  por favor:`));

    console.log (typeof(numeroUsuario))
    /*
    Este código realiza 
    la comparacion 
    */
    if (numeroUsuario == numeroScreto) {
        //Acertamos, fue verdadera la condicion
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'} `);
    } else {
        if (numeroUsuario > numeroScreto) {
            alert('El Número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }  
        // Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos +=1;
            intentos++;

        //palabraVeces = 'veces';
            if (intentos > maximosIntentos ) {
               alert (`Llegaste al número ${maximosIntentos} maximo de intentos`);
               break
        }       
        //La condicion no se cumple
    // alert ('Lo siento, no acertaste el número')
        }
    }    