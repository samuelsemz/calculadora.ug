function calculadora(a, b, operacao) {
    if (operacao === "soma") return a + b;
    if (operacao === "subtracao") return a - b;
    if (operacao === "multiplicacao") return a * b;
    if (operacao === "divisao") return b !== 0 ? a / b : "divisão por zero nao é permitida.";
    return "operaçao invalida";
}

console.log(calculadora(8, 4, "soma"));           
console.log(calculadora(8, 4, "subtracao"));     
console.log(calculadora(8, 4, "multiplicacao"));  
console.log(calculadora(8, 4, "divisao"));         
console.log(calculadora(8, 0, "divisao"));        
console.log(calculadora(8, 4, "invalido"));     
