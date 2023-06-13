function primo()
//Cria um loop que gera numeros de 1 a 1000
for (let numero = 2; numero <= 1000; numero++) {
    let primo = true;
//Cria um loop que retorna o valor de primo para falso caso
//o resto de divisão seja 0, para cada numero de 1 a 1000 do loop anterior
    for (let c = 2; c < numero; c++) {
       if (numero % c == 0) {
          primo = false;
          break;
       }
    }
 
    if (primo) {
       console.log(numero);
    }
 }
