function quadradoPerfeito(numero) {
//raiz quadrada do numero
    resultado = Math.sqrt(numero)
//se o resultado da raiz quadrada for inteiro, então ele é verdadeiro, portanto um quadrado perfeito
    if (Number.isInteger(resultado) === true)
       {console.log(numero + ' é um quadrado perfeito')}
    else 
       {console.log(numero + ' não é um quadrado perfeito')}
}