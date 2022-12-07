const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const spans = document.querySelectorAll(".span-required");
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

function setError(index) {
  campos[index].getElementsByClassName.border = "2px solid #e6e6e6";
  spans[index].style.display = "block";
}

function removeError(index) {
  campos[index].style.border = "";
  spans[index].style.display = "none";
}

function nameValidate() {
  if (campos[0].ariaValueMax.length < 3) {
    setError(0);
  } else {
    removeError(0);
  }
}

///////////////////////////////////////////////////////////////////////////////////
let slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
  showSlides((slideIndex = +n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides_imagens");
  let botoes = document.getElementsByClassName("botao");
  if (n > slides.length) {
    slideIndex = 1;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < botoes.length; i++) {
    botoes[i].className = botoes[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  botoes[slideIndex - 1].className += " active";
}
