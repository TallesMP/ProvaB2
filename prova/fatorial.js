function fatorial(numero) {
    //se o nmero for negativo, a função é cancelada
    if (numero < 0) 
          console.log('digite um numero positivo')
    //se o numero for 0 o fatorial é 1
    else if (numero == 0) 
        console.log(1)
    //caso contrario, é multiplicado o numero pela prorpia função de numero - 1
    else {
        console.log(numero * fatorial(numero - 1));
    }
  }
  