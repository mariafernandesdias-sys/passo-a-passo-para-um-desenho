// Dados dos passos do tutorial
const steps = [
  {
    title: "1. Formas Básicas",
    description: "Comece desenhando um círculo para a cabeça e uma forma oval inclinada para o corpo. Use lápis fraco!",
    image: "https://via.placeholder.com/400x300?text=Passo+1:+Formas+Basicas"
  },
  {
    title: "2. Orelhas e Patas",
    description: "Adicione dois triângulos no topo do círculo para fazer as orelhas e adicione os esboços das patas na base.",
    image: "https://via.placeholder.com/400x300?text=Passo+2:+Orelhas+e+Patas"
  },
  {
    title: "3. Rosto e Detalhes",
    description: "Desenhe os olhos, o nariz e o focinho. Adicione o rabo saindo da parte de trás do corpo.",
    image: "https://via.placeholder.com/400x300?text=Passo+3:+Rosto+e+Detalhes"
  },
  {
    title: "4. Arte-Final e Cor",
    description: "Passe uma caneta escura nos traços principais, apague as linhas de lápis e pinte seu desenho!",
    image: "https://via.placeholder.com/400x300?text=Passo+4:+Arte-Final+e+Cor"
  }
];

let currentStep = 0;

// Elementos do DOM
const stepNumberEl = document.getElementById("step-number");
const stepImageEl = document.getElementById("step-image");
const stepTitleEl = document.getElementById("step-title");
const stepDescriptionEl = document.getElementById("step-description");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Função para mudar de passo
function changeStep(direction) {
  currentStep += direction;

  // Atualiza o conteúdo da página
  stepNumberEl.textContent = `Passo ${currentStep + 1} de ${steps.length}`;
  stepImageEl.src = steps[currentStep].image;
  stepTitleEl.textContent = steps[currentStep].title;
  stepDescriptionEl.textContent = steps[currentStep].description;

  // Ativa/Desativa os botões dependendo da etapa
  prevBtn.disabled = currentStep === 0;
  nextBtn.disabled = currentStep === steps.length - 1;
}
