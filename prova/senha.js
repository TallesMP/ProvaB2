function verificarSenha(senha) {
//recebe o valor de "senha" e testa se tem maiuscula, minuscula, numero, e 8 caracteres
    const maiuscula = /[A-Z]/.test(senha);
    const minuscula = /[a-z]/.test(senha);
    const numero = /[0-9]/.test(senha);
    const caracteres = senha.length >= 8;
  
//se todos os valores forem "true", a senha é valida
    if (maiuscula && minuscula && numero && caracteres === true) {
      console.log("senha válida")
    } else {
      console.log("senha inválida")
    }
  }