const form = document.querySelector("form");

//e-mail
const inputErrors = (element) => {
  const elementValidity = element.validity;
  if (elementValidity.typeMismatch) {
    element.setCustomValidity(
      `Please input in ${element.getAttribute("type")} format`
    );
  } else if (elementValidity.tooShort) {
    const minLength = element.getAttribute("minlength");
    element.setCustomValidity(
      `Your input must be at least ${minLength} characters long`
    );
  } else if (elementValidity.tooLong) {
    const maxLength = element.getAttribute("maxlength");
    element.setCustomValidity(
      `Your input is too long. The max characters is: ${maxLength}`
    );
  }
  element.reportValidity();
};
const email = document.getElementById("e-mail");
email.addEventListener("input", () => {
  if (!email.checkValidity()) {
    inputErrors(email);
  } else {
    email.setCustomValidity("");
  }
});

const country = document.getElementById("country");
country.addEventListener("input", () => {
  if (!country.checkValidity()) {
    inputErrors(country);
  } else {
    country.setCustomValidity("");
  }
});

const postalCode = document.getElementById("postal-code");
postalCode.addEventListener("input", () => {
  if (postalCode.validity.patternMismatch) {
    postalCode.setCustomValidity(
      "Please input your postal code in the following format: A1A 1A1"
    );
  } else {
    postalCode.setCustomValidity("");
  }
  postalCode.reportValidity();
});

const password = document.getElementById("password");
password.addEventListener("input", () => {
  if (password.validity.patternMismatch) {
    password.setCustomValidity(
      `Your password needs to be at least 8 characters long with 1 uppercase letter, 1 number, and 1 special character 
      (@, $, !, %, *, #, ?, &)`
    );
  } else {
    password.setCustomValidity("");
  }
  password.reportValidity();
});

const confirmPassword = document.getElementById("confirm-password");
confirmPassword.addEventListener("input", () => {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords don't match");
  } else {
    confirmPassword.setCustomValidity("");
  }
  confirmPassword.reportValidity();
});
