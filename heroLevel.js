//Informe o nome do herói através da variável abaixo

let heroi = "Spiderman";

//Informe a quantidade de xp do herói

let xp = 6001;

let level = 0;

if (xp > 10000) {
    level = "Radiante";
} else if (xp > 9000) {
    level = "Imortal";
} else if (xp > 8000) {
    level = "Ascendente";
} else if (xp > 7000) {
    level = "Platina";
} else if (xp > 6000) {
    level = "Ouro";
} else if (xp > 2000) {
    level = "Prata";
} else if (xp > 1000) {
    level = "Bronze";
} else {
    level = "Ferro";
}

console.log(`O personagem ${heroi} tem ${xp} pontos de xp está no nível ${level}!`);



/* Tabela de níveis de xp
Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 6.000 = Prata
Se XP for entre 6.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante
*/