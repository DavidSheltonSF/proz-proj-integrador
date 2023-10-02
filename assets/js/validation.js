const formInputs = document.querySelectorAll(".c-modal input");
const formInputs = document.getElementById("user_input_login_modal")
const formInputs = document.getElementById("password_input_login_modal");
const formInputs = document.getElementById("email_input_recover_password_modal");
const formInputs = document.getElementById("tax_indentifier_input_establishment_modal");

formInputs.forEach((element) => {
  console.log(element);
  element.classList.add("u-input-correct");
  element.classList.add("u-input-error");
});

Function checkInputs() {
  const user_input_login_modal = username.value;
  const password_input_login_modal = passaword.value;
  const email_input_recover_password_modal = email.value
  const tax_indentifier_input_establishment_modal = tax.value

  if (user_input_login_modal == '') {
    setErrorFor(user_input_login_modal, "Username is required."); 
  } else {
    SetSucessFor(user_input_login_modal);
  }
} 

Function setErrorFor (user_input_login_modal, message)[
  const formInputs = user_input_login_modal.parenteElement;
  const small = formInputs.querySelector("small");

  small.innerText = message;

  formInputs.className = "formInputs.error";
  