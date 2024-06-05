const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "Qual é a cor dos olhos da Bia?",
    alternativas: [
      "Azul",
      "Castanho"
    ]
  },

  {
    enunciado: "Quem é o melhor vilão Jason ou Fred Krügger",
    alternativas: [
      "Jason",
      "Fred"
    ]
  },

  {
    enunciado: "Pergunta 3",
    alternativas: [
      "Resposta 1",
      "Resposta 2"
    ]
  },

  {
    enunciado: "Pergunta 4",
    alternativas: [
      "Resposta 1",
      "Resposta 2"
    ]
  },

  {
    enunciado: "Pergunta 5",
    alternativas: [
      "Resposta 1",
      "Resposta 2"
    ]
  }
];

let atual = 0;
let perguntaAtual;

function mostraAlternativas () {
  for (const alternativa of perguntaAtual.alternativas) {
    
  }
}
function mostraPergunta() {
  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();