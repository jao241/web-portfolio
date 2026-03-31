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

function sendForm() {
  alert("Email enviado!");
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

function sendForm() {
  alert("Email enviado!");
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
