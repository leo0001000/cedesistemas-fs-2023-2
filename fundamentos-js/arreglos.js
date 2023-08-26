const nombres = ['Luis', 'Thiago', 'leo', 'Dulce', 'Mariana']

console.log(nombres[1])


//Agregar nuevo nombre al arreglo
nombres.push('Alexander')

//Buscar dentro de un arreglo
//(parametros) => 
const personaEncontrada = nombres.find(cadaNombre => cadaNombre === 'leo')

//Old way 
const personaEncontradaTradicional = nombres.find(function(item){
    return item === 'leo'
})

//ejemplo 
const buscarPersona = (arreglo, nombreABuscar) => {
    return arreglo.find(item, index => item === nombreABuscar)
}
const index = buscarPersona(nombres, 'alex')
console.log(nombres[index])

//filtrar dentro de un arreglo, para sacar un elemento de la lista
const nuevaListaNombres = nombres.filter( item => item != 'leo' )
console.log(nuevaListaNombres)

//filtrar los que empiecen por una letra
const empiezanPorM = nombres.filter( item => item.charAt(0) === 'M')
console.log(empiezanPorM)

//Recorrer un arreglo
nombres.map(item => console.log('item', item)) //el map desplazó al 'foreach'

