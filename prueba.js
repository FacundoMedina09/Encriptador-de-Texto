/* (Encriptador) */

var textentrada = document.querySelector('#textentrada'); /* Captura texto de entrada */
var textsalida = document.querySelector('#textsalida');
var alertcopiado = document.querySelector('#alertcopiado');
var concatenacion = " ";    /* (Encriptador) */
var lenPalabra;
var exitpalabra; 


const dato = {
    palabra: ''
}

textentrada.addEventListener("input", function(event){
    dato.palabra = event.target.value;
})

function encriptar(){

    lenPalabra = dato.palabra.length;
    var resultado = encriptador(dato.palabra);
    textsalida.textContent = resultado;
    console.log(resultado);
    dato.palabra = " ";
    resultado = " ";
    concatenacion = " ";

}

/* (Desencriptador) */

var palabra = " ";
var resul_descript;

function desencriptar(){
    lenPalabra = dato.palabra.length;
    var resultado = desencriptador(dato.palabra);
    textsalida.textContent = resultado;
    console.log(resultado);
    dato.palabra = " ";
    resultado = " ";
    palabra = " ";

}



/* Funcion para encriptar */ 

function encriptador(ingreso) {

    ingreso = ingreso.toLowerCase();
    var concatenacion = " ";

    for (var posicion = 0; posicion < lenPalabra; posicion++) {

        switch (ingreso[posicion]) {
            case 'a':
                concatenacion = concatenacion + "ai";
                break;
            case 'e':
                concatenacion = concatenacion + "enter";
                break;
            case 'i':
                concatenacion = concatenacion + "imes";
                break;

            case 'o':
                concatenacion = concatenacion + "ober";
                break;

            case 'u':
                concatenacion = concatenacion + "ufat";
                break;

            default:
                concatenacion = concatenacion + ingreso[posicion];
                break;
        }

    }
    exitpalabra = concatenacion
    return exitpalabra
}

/* Funcion para desencriptar*/

function desencriptador(ingreso){

    ingreso = ingreso.toLowerCase();
   
    for(var posicion = 0; posicion < ingreso.length; posicion++){

        if(ingreso[posicion] == 'a'){
            palabra = palabra + 'a';
            posicion = posicion + 1;               
        }

        else if(ingreso[posicion]== 'e'){
            palabra = palabra + 'e';
            posicion = posicion + 4;
       }

        else if(ingreso[posicion] == 'i'){
            palabra = palabra + 'i';
            posicion = posicion + 2;
        }

        else if(ingreso[posicion] == 'o'){
            palabra = palabra + 'o';
            posicion = posicion + 3;
        }

        else if(ingreso[posicion] == 'u'){
            palabra = palabra + 'u';
            posicion = posicion + 3;
       }

        else{
            palabra = palabra + ingreso[posicion];
       }

    }

    resul_descript = palabra;
    return resul_descript;
}


/* Boton para copiar */

function copyToClickBoard() {

    navigator.clipboard.writeText(textsalida.innerHTML);

    alertcopiado.textContent = "Copiado de forma exitosa!";

    setTimeout(function reset() {
        alertcopiado.textContent = " ";
    }, 3000);

}

    
