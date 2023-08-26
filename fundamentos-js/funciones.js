// Función típica
function saludar (nombre){
    console.log("Hola!! ", nombre);
}

saludar("Juan");

//Sumar

function sumar(n1, n2){
    return n1 + n2;
}
sumar(10, 7) //17

//Restar
//Arrow Function - Función flecha es más simplificada
const restar = (n1, n2) =>  { //si pongo la palabra "export" antes de const, me permite llamar 
    //esta función desde cualquier parte del código
    return n1 - n2;
}

const multiplicar = (n1, n2) => n1 * n2;

//Diferencias entre VAR y LET

const scope = () => {
    if (true){
        let var1 = 'Variable 1' //let solo es visible dentro del IF
        let var2 = 'Variable 2' //Var es visible desde cualquier parte del código pero no es tan bueno
    }
    console.log('var2', var2)
    console.log('var1', var1)
}