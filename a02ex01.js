// 01. Crie uma função que recebe um array 
// de 2 números e coloque eles em ordem
// crescente. Não use o método sort.


// Entrada => array de 2 números
// Processamento =>
// 1. Criar função
// 2. Criar array ordered para colocar os números em ordem
// Saída => array ordenado

function sort(array) {
    let ordered = [array[0]]
    if (array[0]>array[1]) {
        ordered.unshift(array[1])
        return ordered
    } else {
        return array
    }
}
console.log(sort([10,8]))
console.log(sort([10,10]))
console.log(sort([6,10]))
