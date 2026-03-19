const nomeProduto = "Monitor Gamer"

let precoBase = 1200.00
let precoFinal
let desconto

console.log(`Produto: ${nomeProduto}`)

console.log(`Preço original: ${precoBase}`)
console.log(`Preço original: ${precoBase.toFixed(2)}`)
console.log(`Preço original: ${precoBase.toLocaleString("pt-BR",{style: "currency", currency:"BRL"})}`)

if (precoBase >= 1000 ){
    desconto = 1-0.05
    precoFinal = precoBase * desconto
}
else if(precoBase >= 800){
    desconto = 1-0.02
    precoFinal = precoBase * desconto
}
else{
    precoFinal = precoBase
}


console.log(`Preço original: ${precoFinal.toLocaleString("pt-BR",{style: "currency", currency:"BRL"})}`)