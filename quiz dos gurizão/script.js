const quizData = [
    {
      question: "Qual a capital da França?",
      options: ["Paris", "Madrid", "Roma", "Berlim"],
      answer: "Paris"
    },
    {
      question: "Qual o maior planeta do sistema solar?",
      options: ["Júpiter", "Saturno", "Marte", "Terra"],
      answer: "Júpiter"
    },
    {
      question: "What is the largest planet in our solar system?",
      options: ["Jupiter", "Saturno", "Marte", "terra"],
      answer: "Jupiter"
    },
    {
      question: "Quem foi o primeiro presidente do Brasil?",
      options: ["Getúlio Vargas", "Juscelino Kubitschek", "Deodoro da Fonseca", "Tancredo Neves"],
      answer: "Deodoro da Fonseca"
    },
    {
      question: "Qual é o maior país do mundo em área territorial?",
      options: ["Rússia", "Canadá", "Estados Unidos", "China"],
      answer: "Rússia"
    },
    {
      question: "Qual é o autor de 'Dom Casmurro'?",
      options: ["Machado de Assis", "José de Alencar", "Guimarães Rosa", "Cecília Meireles"],
      answer: "Machado de Assis"
    },
    {
      question: "Quem pintou a obra 'Mona Lisa'?",
      options: ["Leonardo da Vinci", "Michelangelo", "Rafael", "Vincent van Gogh"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "Em que ano foi proclamada a Independência do Brasil?",
      options: ["1822", "1808", "1889", "1750"],
      answer: "1822"
    },
    {
      question: "Qual é o segundo maior país do mundo em área territorial?",
      options: ["Canadá", "Estados Unidos", "China", "Brasil"],
      answer: "Canadá"
    },
    {
      question: "Qual é a montanha mais alta do mundo?",
      options: ["Monte Everest", "Monte Kilimanjaro", "Monte McKinley", "Monte Fuji"],
      answer: "Monte Everest"
    },
    {
      question: "Quem escreveu 'O Pequeno Príncipe'?",
      options: ["Antoine de Saint-Exupéry", "Jules Verne", "Mark Twain", "Hans Christian Andersen"],
      answer: "Antoine de Saint-Exupéry"
    },
    {
      question: "Qual é a cor do sangue humano rico em oxigênio?",
      options: ["Vermelho", "Azul", "Verde", "Amarelo"],
      answer: "Vermelho"
    }
    // Outras perguntas aqui...
  ];
  
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  const submitButton = document.getElementById("submit");
  
  let currentQuestion = 0;
  let score = 0;
  
  function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;
  
    optionsElement.innerHTML = "";
    question.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      optionsElement.appendChild(button);
      button.addEventListener("click", selectAnswer);
    });
  }
  
  function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;
  
    if (selectedButton.innerText === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      showQuestion();
    } else {
      showResult();
    }
  }
  
  function showResult() {
    quiz.innerHTML = `
      <h1>Quiz Completed!</h1>
      <p>Your score: ${score}/${quizData.length}</p>
    `;
  }
  
  showQuestion();