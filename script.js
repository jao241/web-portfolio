const texts = [
  "Desenvolvedor Full Stack",
  "PHP • Laravel • Vue • TypeScript • Docker",
];

let displayedText = "";
let count = 0;
let index = 0;
const html = document.documentElement;

window.addEventListener("DOMContentLoaded", function () {
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
  const phoneElement = document.getElementById("telefone");

  let digits = phoneElement.value.replace(/\D/g, "");

  digits = digits.slice(0, 11);

  let formatted = "";

  if (digits.length > 0) {
    formatted = `(${digits.slice(0, 2)}`;
  }

  if (digits.length >= 3) {
    formatted += `) `;
  }

  if (digits.length >= 7) {
    if (digits.length === 11) {
      formatted += `${digits.slice(2, 7)}-${digits.slice(7)}`;
    } 
    else {
      formatted += `${digits.slice(2, 6)}-${digits.slice(6)}`;
    }
  } else if (digits.length > 2) {
    formatted += digits.slice(2);
  }

  phoneElement.value = formatted;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function isValidPhone(phone) {
  const digitsOnly = phone.replace(/\D/g, "");
  return digitsOnly.length >= 10 && digitsOnly.length <= 11;
}

function validateForm(formData) {
  const errors = {};

  if (
    !formData.nome ||
    formData.nome.trim().length < 3 ||
    /\d/.test(formData.nome)
  ) {
    errors.nome =
      "Nome deve ter pelo menos 3 caracteres e não pode conter números";
  }

  if (!formData.email || !isValidEmail(formData.email)) {
    errors.email = "Informe um e-mail válido";
  }

  if (!formData.telefone || formData.telefone.length < 10 || formData.telefone.length > 11) {
    errors.telefone = "Formato: (99) 99999-9999";
  }

  if (!formData.mensagem || formData.mensagem.trim().length < 10) {
    errors.mensagem = "Mensagem deve ter no mínimo 10 caracteres";
  }

  return errors;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

if (window.emailjs) {
  emailjs.init("KFZZd2cTNkWQBBsQ6");
}

async function sendForm(event) {
  if (event) event.preventDefault();

  const form = document.querySelector(".form-contato form");
  const submitButton = form.querySelector(".botao-formulario");
  const originalButtonText = "Enviar";

  const formData = {
    nome: document.getElementById("nome").value.trim(),
    email: document.getElementById("email").value.trim(),
    telefone: document.getElementById("telefone").value.replace(/\D/g, ""),
    mensagem: document.getElementById("mensagem").value.trim(),
  };

  const errors = validateForm(formData);

  document.querySelectorAll(".erro").forEach((e) => (e.innerHTML = ""));
  document.querySelectorAll("input, textarea").forEach((i) => {
    i.classList.remove("input-erro", "input-ok");
  });

  if (Object.keys(errors).length > 0) {
    Object.keys(errors).forEach((field) => {
      const input = document.getElementById(field);
      const erro = input.nextElementSibling;

      if (input) input.classList.add("input-erro");
      if (erro) {
        erro.style.display = "block";
        erro.innerHTML = errors[field];
      }
    });

    return;
  }

  document.querySelectorAll("input, textarea").forEach((i) => {
    i.classList.add("input-ok");
  });

  submitButton.disabled = true;
  submitButton.textContent = "Enviando...";

  try {
    const SERVICE_ID = "service_xt5ijnb";
    const TEMPLATE_ID = "template_44t8tqu";

    await emailjs.send(SERVICE_ID, TEMPLATE_ID, formData);

    alert("Email enviado com sucesso! 🚀");
    form.reset();

    document.querySelectorAll("input, textarea").forEach((i) => {
      i.classList.remove("input-ok");
    });
  } catch (error) {
    alert("Erro ao enviar formulário. Tente novamente.");
    console.error(error);
  } finally {
    submitButton.disabled = false;
    submitButton.textContent = originalButtonText;
  }
}

const root = document.documentElement;

function setDarkMode() {
  html.dataset.theme = "dark";
}

function setLightMode() {
  html.dataset.theme = "light";
}

function changeTheme() {
  const botao = document.querySelector(".botao-tema");

  if (html.dataset.theme === "light") {
    html.dataset.theme = "dark";
    botao.setAttribute("src", "./src/assets/light-mode-icon.svg");
  } else {
    html.dataset.theme = "light";
    botao.setAttribute("src", "./src/assets/dark-mode-icon.svg");
  }
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

let cameraStream;

async function iniciarCamera() {
  const video = document.getElementById("camera");

  try {
    cameraStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: "user" }
    });

    video.srcObject = cameraStream;
    video.style.display = "block";
  } catch (err) {
    console.error("Erro ao acessar câmera:", err);
  }
}

const btnCapturar = document.querySelector("#btn-capturar");

btnCapturar.addEventListener("click", () => {
  const video = document.querySelector("#camera");
  const canvas = document.querySelector("#canvas");
  const preview = document.querySelector("#preview");

  preview.style.display = "none";

  if (!cameraStream) {
    iniciarCamera();
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    return;
  }

  const context = canvas.getContext("2d");

  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  context.drawImage(video, 0, 0);

  const imageData = canvas.toDataURL("image/png");

  preview.src = imageData;
  preview.style.display = "block";
  preview.dataset.image = imageData;

  if (cameraStream) {
    cameraStream.getTracks().forEach(track => track.stop());
    cameraStream = null;
  }

  video.style.display = "none";

  const erro = preview.parentNode.querySelector(".erro");
  erro.innerHTML = "";
});