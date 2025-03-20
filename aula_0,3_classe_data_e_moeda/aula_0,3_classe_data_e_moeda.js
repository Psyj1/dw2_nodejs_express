//classes no javascript
class Carro {
    //atributo
    constructor(marca, modelo, ano) {
      this.marca = marca;
      this.modelo = modelo;
      this.ano = ano;
    }
    //metodos
    buzinar() {
      return "Beep! Beep!";
    }
  }
   
  //criando uma instancia (objetos) da classe carro
  const carroPopular = new Carro("Fiat", "Uno", "2012");
   
  console.log(
    `O carro ${carroPopular.marca} é do modelo ${
      carroPopular.modelo
    } que foi lançado em ${
      carroPopular.ano
    } e ele tem uma buzina muito forte olha!, ${carroPopular.buzinar()}`
  );
   
  console.log();
   
  const carroEsportivo = new Carro();
  carroEsportivo.modelo = "Chevrolet";
  carroEsportivo.marca = "Camaro";
  carroEsportivo.ano = "2024";
  console.log(
    `O carro ${carroEsportivo.marca} é do modelo ${
      carroEsportivo.modelo
    } que foi lançado em ${
      carroEsportivo.ano
    } e ele tem uma buzina muito forte olha!, ${carroEsportivo.buzinar()}`
  );
   
  //adicionndo um novo atributo
  carroEsportivo.corNeon = "Azul";
  //adicionndo um novo metodo
  carroEsportivo.turbo = function () {
    return "Vrummmm! O carro está acelerando!!!";
  };
   
  console.log();
   
  console.log(
    `O carro ${carroEsportivo.marca} é do modelo ${
      carroEsportivo.modelo
    } que foi lançado em ${
      carroEsportivo.ano
    } e ele tem um motor muito forte olha!, ${carroEsportivo.turbo()} e a cor dele do ${
      carroEsportivo.marca
    } é ${
      carroEsportivo.corNeon
    }. Mas cuidade a buzina dele pode te infartar ${carroEsportivo.buzinar()}`
  );
   
  /////////////MANUPILANDO FATAS/////////////////
  /////////////NO JAVASCRIPT/////////////////////
   
  const dateAtual = new Date();
   
  console.log(typeof dateAtual);
   
  //pegando o dia atual
   
  const dia = dateAtual.getDate();
  const mes = dateAtual.getMonth();
  const ano = dateAtual.getFullYear();
   
  console.log();
  console.log(`Hoje é dia ${dia} do ${mes + 1} de ${ano}`);
   
  //Adiconando mais 10 dias, da data atual
   
  dateAtual.setDate(dateAtual.getDate() + 10);
  dateAtual.setMonth(dateAtual.getMonth() + 3);
  dateAtual.setFullYear(dateAtual.getFullYear() + 2);
  console.log();
   
  console.log(`Daqui a 10 dias será ${dateAtual.getDate()}`);
  console.log(); //add 10 day
   
  console.log(`Daqui a 3 mes será ${dateAtual.getMonth() + 1}`);
  console.log(); //add 3 month
   
  console.log(`Daqui a 10 ano será ${dateAtual.getFullYear()}`);
  console.log(); //add 2 year
  //notion.so
   
  ////////////////////////////
  //trabalhando com moedas no javascript
  /////////////////////
   
  let salario = 2500.3;
  console.log(salario);
  // Mostrando as casas decimais
  console.log(salario.toFixed(2));
  // Ocultando as casas decimais
  console.log(salario.toFixed(0));
  // alterando marcador de casa decimal
  console.log(salario.toFixed(2).replace(".", ","));
   
  //formatação de moedas
  //mostrando o salario em real
  console.log(
    salario.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
  );
   
  console.log(
    salario.toLocaleString("en", { style: "currency", currency: "usd" })
  );
   
  //convertendo de real para dolar
  //const salarioDolar = salario * 6
  const salarioDolar = salario * 0.176;
  console.log(
    salarioDolar.toLocaleString("en", { style: "currency", currency: "usd" })
  );
   
  //formatação de string
   
  const name = "Paulo";
   
  // alternando para LETRA MAIUSCULAS
  console.log(name.toUpperCase())
   
  // alternando para letras minusculas
  console.log(name.toLocaleLowerCase())
   
  // contando caracteres de uma string

  const Nome = "Paulo"

  //Alterando para letras maiúsculas
  console.log(Nome.toUpperCase())

  //Alterando para letras maiúsculas
  console.log(Nome.toLowerCase())

  //Contando caracteres de uma string
  console.log(Nome.length)

  //Removendo espaços
  const novoNome = nome.replace(/\s/g, "")
  console.log(novoNome)
  console.log(novoNome.length)

