const nameInput = document.querySelector("#nome");
const emailInput = document.querySelector("#email");
const sexoInput = document.querySelector(".sexo");
const contatoInput = document.querySelector("#motivo_de_contato");
const areaTextInput = document.querySelector("#area_de_texto");
const form = document.querySelector("form");

const errorMessage = document.querySelector(".span-required");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    nameValue === "" ||
    emailValue === "" ||
    sexoValue === "" ||
    contatoValue === "" ||
    areaTextValue === ""
  ) {
    errorMessage.textContent = "Please fill out the fields!";
    errorMessage.classList = "error";
    return;
  }
});
