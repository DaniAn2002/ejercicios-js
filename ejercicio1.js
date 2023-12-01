//Codigo Daniel
/* const filtrarYDuplicar = (array) => {
    let result = array.map(num => {
        if (num % 2 === 0) {
            return "Los numeros pares son " + num
        } else {
            return "Los numeros impares son " + num + " que duplicado son " + num * 2
        }
    })
    return result

}

console.log(filtrarYDuplicar([5, 12, 56, 9, 7])); */


//Codigo de Annie
/* const filtrarYduplicar = (array) => {
    const result = array.map(num => {
        dups = 0
        pares = 0
        if (num % 2 === 0) {
            pares = num
            return "Los numeros pares son " + pares
        }
        else {
            dups = num * 2
            return "Los numeros impares son " + num + " que duplicado son " + dups
        }
    })
    return result
}
let numeros = [1, 8, 9, 15, 12, 4, 10, 23, 46]
console.log(filtrarYduplicar(numeros)) */

const filtrarYduplicar2 = (array) => {
    const pares = array.filter (num => num % 2 === 0)
    const impares = array.filter (num => num % 2 !== 0)
    return {
     numerosPares: pares,
     numerosImpares: impares
    }
    }
    let numeros = [1, 8, 9, 15, 12, 4, 10, 23, 46]
    console.log(filtrarYduplicar2(numeros))