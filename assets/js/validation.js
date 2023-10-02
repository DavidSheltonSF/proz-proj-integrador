const formInputs = document.querySelectorAll(".c-modal input");
const formInputs = document.getElementById("user_input_login_modal");
const formInputs = document.getElementById("password_input_login_modal");
const formInputs = document.getElementById(
  "email_input_recover_password_modal"
);
const formInputs = document.getElementById(
  "retype_password_input_new_password_modal"
);

formInputs.forEach((element) => {
  console.log(element);
  element.classList.add("u-input-correct");
  element.classList.add("u-input-error");
});

function checkInputs() {
  const user_input_login_modal = username.value;
  const password_input_login_modal = passaword.value;
  const email_input_recover_password_modal = email.value;
  const tax_indentifier_input_establishment_modal = tax.value;

  if (user_input_login_modal == "") {
    setErrorFor(user_input_login_modal, "Username is required.");
  } else {
    SetSucessFor(user_input_login_modal);
  }

  if (password_input_login_modal == "") {
    setErrorFor(email_input_recover_password_modal, "Email is required");
  } else if (checkEmail(email_input_recover_password_modal)) {
    setErrorFor(
      email_input_recover_password_modal,
      "Please enter a valid email."
    );
  } else {
    SetSucessFor(email_input_recover_password_modal);
  }

  if (password_input_login_modal == "") {
    setErrorFor(password_input_login_modal, "Password is required");
  } else if (password_input_login_modal.length < 7) {
    setErrorFor(
      password_input_login_modal,
      "Invalid password, minimum 7 characters"
    );
  } else {
    SetSucessFor(password_input_login_modal);
  }

  if (retype_password_input_new_password_modal == "") {
    setErrorFor(
      retype_password_input_new_password_modal,
      "Confirm the password."
    );
  } else if (
    (retype_password_input_new_password_modal = password_input_login_modal)
  ) {
    setErrorFor(password_input_login_modal, "Password do not match.");
  } else {
    SetSucessFor(retype_password_input_new_password_modal);
  }
}

function setErrorFor(user_input_login_modal, message) {
  const formInputs = user_input_login_modal.parenteElement;
  const small = formInputs.querySelector("small");

  small.innerText = message;

  formInputs.className = "formInputs error";
}

function SetSucessFor(input) {
  const formControl = input.parenteElement;

  formControl.className = "form-control sucess";
}
function checkEmail(email_input_recover_password_modal) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email_input_recover_password_modal
  );
}
