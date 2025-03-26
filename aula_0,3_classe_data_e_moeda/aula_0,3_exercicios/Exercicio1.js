/*
1 – Crie uma classe em JavaScript chamada Heroi, que
represente um herói genérico. Essa classe deve conter os seguintes atributos:

- nome

- vida

- velocidade

- forca


Além disso, implemente os seguintes métodos na classe Heroi:

- correr(): Exibe uma mensagem informando que o
herói está correndo.

- andar(): Exibe uma mensagem informando que o
herói está andando.

- atacar(): Exibe uma mensagem informando que o
herói está atacando.

- defender(): Exibe uma mensagem informando que o
herói está se defendendo.

Use o “return” para retornar as mensages.

 

Após criar a classe Heroi, instancie três objetos baseados nela, representando os heróis. Atribua valores para os atributos que foram definidos na classe para cada herói, inserindo também os atributos e métodos adicionais, conforme abaixo:

Homem-Aranha

Atributo adicional: 

- teia (0 ou 1, indicando se ele pode ou não soltar teia)

Método adicional:

- sentidoAranha(): Exibe uma mensagem informando que ele
detectou perigo.

 

Superman

Atributo adicional: 

- podeVoar (0 ou 1, indicando se ele pode ou não voar)

Método adicional:

- visaoCalor(): Exibe uma mensagem informando que ele está
usando sua visão de calor.

 

Batman

Atributo adicional: 

- esconder (0 ou 1, indicando se ele está se escondendo ou
não)

Método adicional:

- investigar(): Exibe uma mensagem informando que ele está
investigando um crime.
*/

class heroi {
    constructor(nome, vida, velocidade, forca){
        this.nome = nome;
        this.vida = vida;
        this.velocidade = velocidade;
        this.forca = forca;
    }

        correr(){
            return `${this.nome} está correndo!`;
        };

        andar(){
            return `${this.vida} está andando!`;
        };

        atacar(){
            return `${this.velocidade} está atacando`;
        };

        correr(){
            return `${this.forca} está correndo!`
        };
    }

const HomemAranha = new heroi("Peter", "85", "75", "80");

HomemAranha.teia = "Soltando a teia";
HomemAranha.sentido = "inimigo perto!";

console.log(`O ${HomemAranha.atacar()}, e agora está ${HomemAranha.teia()}`);

const superHomem = new heroi("Henry", "Infinita", "100", "MAIS DE 8 MILLLLLL!");

superHomem.voar = "O Super Homem está voando!";
superHomem.visaoCalor = "O Super Homem está usando a visão de calor!";

console.log(`${superHomem.voar()}, e agora está ${superHomem.visaoCalor}`);

const batman = new heroi("Bruce", "60", "100", "50");

batman.esconder = "O batman está escondido";
batman.investigar = "O batman agora está investigando um crime";

console.log(`${batman.esconder()}, e agora ${batman.investigar()}`);