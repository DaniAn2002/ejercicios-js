
/* const buscarMayorMenos = (array) => {

    let mayor = array[0]
    let menor = array[0]

    for (let i = 0; i < array.length; i++) {
        if (array[i] > mayor) {
            mayor = array[i]
        } else if (array[i] < menor) {
            menor = array[i]
        }
    }

    return {
        mayor: mayor,
        menor: menor
    }

}

console.log(buscarMayorMenos([1, 5, 4, 6, 10])); */

const buscarMayorMenos1 = (array) => {
    array = array.sort((a, b) => a - b)

    return {
        menor: array[0],
        mayor: array[array.length - 1]
    }
}


console.log(buscarMayorMenos1([1, 25, 30, 5, 100, 4, 6, 10]));