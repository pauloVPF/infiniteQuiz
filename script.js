// all the questions
const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para criar websites interativos.",
        "Uma linguagem de marcação para formatar texto em páginas web.",
        "Uma ferramenta para desenhar interfaces gráficas.",
      ],
      correta: 0,
    },
    {
      pergunta: "Onde o JavaScript é executado?",
      respostas: [
        "No navegador web.",
        "No servidor web.",
        "Em ambos, navegador web e servidor web.",
      ],
      correta: 2,
    },
    {
      pergunta: "Qual a sintaxe básica para declarar uma variável em JavaScript?",
      respostas: [
        "var nomeDaVariavel = valor;",
        "let nomeDaVariavel = valor;",
        "const nomeDaVariavel = valor;",
      ],
      correta: 1,
    },
    {
      pergunta: "O que é um tipo de dado em JavaScript?",
      respostas: [
        "Uma maneira de classificar os valores que uma variável pode armazenar.",
        "Uma função para realizar cálculos matemáticos.",
        "Um comando para controlar o fluxo de execução de um programa.",
      ],
      correta: 0,
    },
    {
      pergunta: "Quais são os tipos de dados primitivos em JavaScript?",
      respostas: [
        "String, Number, Boolean, undefined, null.",
        "Array, Object, Function.",
        "Date, RegExp, Error.",
      ],
      correta: 0,
    },
    {
      pergunta: "Como criar uma função em JavaScript?",
      respostas: [
        "function nomeDaFuncao(parametros) { ... }",
        "var nomeDaFuncao = function(parametros) { ... }",
        "const nomeDaFuncao = (parametros) => { ... }",
      ],
      correta: 0,
    },
    {
      pergunta: "O que é um loop em JavaScript?",
      respostas: [
        "Uma estrutura de controle que permite executar um bloco de código repetidamente.",
        "Uma função para comparar dois valores.",
        "Um comando para enviar dados para o servidor.",
      ],
      correta: 0,
    },
    {
      pergunta: "Quais são os tipos de loops mais comuns em JavaScript?",
      respostas: [
        "for, while, do while.",
        "if, else, switch.",
        "try, catch, finally.",
      ],
      correta: 0,
    },
    {
      pergunta: "Como adicionar um evento a um elemento HTML usando JavaScript?",
      respostas: [
        "elemento.addEventListener('evento', funcao);",
        "elemento.onclick = funcao;",
        "elemento.onmouseover = funcao;",
      ],
      correta: 0,
    },
    {
      pergunta: "Como manipular o DOM (Document Object Model) em JavaScript?",
      respostas: [
        "Usando os métodos e propriedades do objeto document.",
        "Usando a biblioteca jQuery.",
        "Usando a biblioteca Angular.",
      ],
      correta: 0,
    },
  ];

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corrects = new Set()
const numberOfQuestions = perguntas.length
const showTotal = document.querySelector('#hits span')

showTotal.textContent = corrects.size + ' de ' + numberOfQuestions

// loop
for(const item of perguntas) {
  const quizItem = template.content.cloneNode(true)
  quizItem.querySelector('h3').textContent = item.pergunta

    for(let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        
        dt.querySelector('input').onchange = (event) => {
            const isCorrect = event.target.value == item.correta

            corrects.delete(item)
            if(isCorrect) {
                corrects.add(item)
            }
            showTotal.textContent = corrects.size + ' de ' + numberOfQuestions
        }
        quizItem.querySelector('dl').appendChild(dt)
    }
  // remove the first item
    quizItem.querySelector('dl dt').remove()

  // insert the question in the website
  quiz.appendChild(quizItem)
}