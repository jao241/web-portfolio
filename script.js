const texts = [
  "Desenvolvedor Full Stack",
  "PHP • Laravel • Vue • TypeScript • Docker",
];

let displayedText = "";
let count = 0;
let index = 0;

window.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("type-text");

  function type() {
    if (count === texts.length) count = 0;

    const currentText = texts[count];
    displayedText = currentText.slice(0, ++index);

    element.textContent = displayedText;

    if (displayedText.length === currentText.length) {
      count++;
      index = 0;
      setTimeout(type, 1500);
    } else {
      setTimeout(type, 60);
    }
  }

  type();
});

function formatPhoneField() {
  phoneElement = document.getElementById("telefone");

  const digits = phoneElement.value.replace(/\D/g, "");

  const ddd = digits.slice(0, 2);
  const firstPart =
    digits.length === 11 ? digits.slice(2, 7) : digits.slice(2, 6);
  const secondPart = digits.length === 11 ? digits.slice(7) : digits.slice(6);

  phoneElement.value = `(${ddd}) ${firstPart}-${secondPart}`;
}


// Função para validar email
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Função para validar telefone
function isValidPhone(phone) {
  const digitsOnly = phone.replace(/\D/g, "");
  return digitsOnly.length >= 10 && digitsOnly.length <= 11;
}

// Função para validar o formulário
function validateForm(formData) {
  const errors = [];
  if (!formData.nome || formData.nome.trim().length === 0) {
    errors.push("Nome é obrigatório");
  }
  if (!formData.email || !isValidEmail(formData.email)) {
    errors.push("Email inválido");
  }
  if (formData.telefone && !isValidPhone(formData.telefone)) {
    errors.push("Telefone inválido");
  }
  if (!formData.mensagem || formData.mensagem.trim().length === 0) {
    errors.push("Mensagem é obrigatória");
  }
  return errors;
}


// ====== EMAILJS INTEGRAÇÃO ======
// 1. Adicione o script do EmailJS no <head> do seu index.html:
// <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
// 2. Crie uma conta em https://www.emailjs.com/
// 3. Crie um serviço (ex: Gmail) e um template
// 4. Pegue seu PUBLIC_KEY, SERVICE_ID e TEMPLATE_ID

// Inicialize o EmailJS (substitua pelo seu PUBLIC_KEY)
if (window.emailjs) {
  emailjs.init('KFZZd2cTNkWQBBsQ6');
}

async function sendForm(event) {
  if (event) event.preventDefault();
  const form = document.querySelector(".form-contato form");
  const submitButton = form.querySelector(".botao-formulario");
  const originalButtonText = "Enviar";

  const formData = {
    nome: document.getElementById("nome").value.trim(),
    email: document.getElementById("email").value.trim(),
    telefone: document.getElementById("telefone").value.trim(),
    // data_nascimento: document.getElementById("data-nascimento").value,
    mensagem: document.getElementById("mensagem").value.trim(),
  };

  const errors = validateForm(formData);
  if (errors.length > 0) {
    alert("Erros no formulário:\n" + errors.join("\n"));
    return;
  }

  submitButton.disabled = true;
  submitButton.textContent = "Enviando...";

  console.log(formData);
  
  try {
    // Substitua pelos seus IDs do EmailJS
    const SERVICE_ID = 'service_xt5ijnb';
    const TEMPLATE_ID = 'template_44t8tqu';

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData);
    alert("Email enviado com sucesso! Entrarei em contato em breve.");
    form.reset();
  } catch (error) {
    alert("Erro ao enviar formulário. Tente novamente mais tarde.");
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalButtonText;
  }
}

const root = document.documentElement;

function setDarkMode() {
  root.classList.add("dark");
  localStorage.setItem("theme", "dark");
}

function setLightMode() {
  root.classList.remove("dark");
  localStorage.setItem("theme", "light");
}

// Carregar tema salvo
(function () {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    root.classList.add("dark");
  }
})();

function formatPhoneField() {
  phoneElement = document.getElementById("telefone");

  const digits = phoneElement.value.replace(/\D/g, "");

  const ddd = digits.slice(0, 2);
  const firstPart =
    digits.length === 11 ? digits.slice(2, 7) : digits.slice(2, 6);
  const secondPart = digits.length === 11 ? digits.slice(7) : digits.slice(6);

  phoneElement.value = `(${ddd}) ${firstPart}-${secondPart}`;
}

function showTypeAnimated() {
  const element = document.getElementById("type-text");

  let count = 0;
  let index = 0;
  let displayedText = "";

  const texts = [
    "Desenvolvedor Full Stack",
    "PHP • Laravel • Vue • TypeScript • Docker",
  ];

  function type() {
    if (count === texts.length) count = 0;

    const currentText = texts[count];
    displayedText = currentText.slice(0, ++index);

    element.textContent = displayedText;

    if (displayedText.length === currentText.length) {
      count++;
      index = 0;
      setTimeout(type, 1500);
    } else {
      setTimeout(type, 60);
    }
  }
  type();
}

window.addEventListener("DOMContentLoaded", () => {
  showTypeAnimated();
});