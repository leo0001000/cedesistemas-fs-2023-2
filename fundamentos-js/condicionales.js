let edad = 18

// Condicionales simples. Son las que comparan una sola posibilidad

if (edad >= 18) { //true
    console.log('Es mayor de edad') //mensaje en la consola
}

//Condicionales compuestos

if (edad >= 18) {
    console.log('Es mayor de edad')
} else {
    console.log('NO es mayor de edad')
}

//Condicionales anidados 
if (edad > 18) {
    console.log('Es mayor de 18 años')
} else if (edad === 18) {
    console.log('Tiene 18 años')
} else {
    console.log('Es menor de 18 años')
}

//Condicionales ternarias
let mensaje = edad >= 18 ? 'Bienvenido' : 'No tienes acceso'   //<condición> ?'parte positiva' : 'parte negativa'
console.log(mensaje)