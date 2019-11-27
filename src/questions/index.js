export default [
  {
    question:
      'Para todas as pessoas que pretendem tirar carteira de motorista necessita de um conhecimento básico da finalidade de cada cor de semáfaros. O verde significa ______, o amarelo ______ e o vermelho ____. Outras cores não existem no semáfaro. ',
    answers: [
      'Reduzir a velocidade, seguir, parar',
      'Seguir, parar, reduzir a velocidade',
      'Seguir, reduzir a velocidade, parar',
      'Reduzir a velocidade, parar, seguir',
    ],
    correct: 2,
    code: `//Condição para o sinal verde
if (cor == "verde") {
  //retorna o que o sinal verde significa
  return "seguir";
}
//Condição para o sinal amarelo
else if (cor == "amarelo") {
  //retorna o que o sinal amarelo significa
  return "reduzir a velocidade";
}
//Condição para o sinal vermelho
else if (cor == "vermelho") {
  //retorna o que o sinal bermelho significa
  return "parar";
} else {
  //qualquer outra cor, não existe no semáfaro
  return "A cor não existe em semáfaro";
}`,
  },
  {
    question:
      'Para a entrada e saída de carros em estacionamentos, é de muitíssima importância que a catraca permaneça ______ enquanto os carros passam por ela.',
    answers: ['Levantada', 'Abaixada', 'Em movimento', 'Desligada'],
    correct: 0,
    code: `//condição em que quando o carro está sob a catraca
while (carro_sob_catraca) {
  //retorna que a catraca deve permanecer levantada
  return "Catraca permanece levantada";
}`,
  },
  {
    question:
      'Marília recebe R$10,00 de mesada todo mês. Depois de pegar o dinheiro, a menina correu para o supermercado para comprar chocolate, que custa R$1,00 cada. Porém a conta final não pode ________ o total de dinheiro que Marília tem.',
    answers: [
      'Ser menor que',
      'Ser maior que',
      'Ser igual que',
      'Ser menor ou igual que',
    ],
    correct: 1,
    code: `// Condicional de repetição para adicionar até dez chocolates
for (let quant_chocolate = 0; quant_chocolate <= 10; quant_chocolate++) {
  const chocolate = 0;
  // adicionando chocolate no carrinho
  const carrinho = chocolate++;
  print(carrinho);
}`,
  },
  {
    question:
      'Para fazer login em algum site, necessita-se colocar a senha _____ do cadastro.',
    answers: ['De tamanho diferente', 'Do mesmo tamanho', 'Diferente', 'Igual'],
    correct: 3,
    code: `// Definindo senha como '123'
senha = "123";
// Se a senha inserida for igual a '123'
if (senha == "123") {
  //então o login é autorizado
  return "Senha correta. Login autorizado";
} else {
  //Qualquer outra senha inserida, login não será autorizado
  return "Senha incorreta. Login não autorizado";
}`,
  },
  {
    question:
      'Buzinas de carro foram criadas como um alerta de trânsito. Caso ocorra _________, é natural o carro buzinar.',
    answers: [
      'Uma passeata',
      'Um cruzamento brusco',
      'Trânsito',
      'Um tráfego fluido',
    ],
    correct: 1,
    code: `//condicional para, caso houver um cruzamento brusco (verdade)
if (cruzamento_bruco == true) {
  //retorna que carro buzina
  return "Carro buzina";
} else {
  //caso não haja essa situação, carro não buzina
  return "Carro não buzina";
}`,
  },
];
