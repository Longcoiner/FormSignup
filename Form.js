const form = document.getElementById("form");
const errorText = document.getElementById("error");

form.onsubmit = function (e) {
  e.preventDefault();
  const email = document.getElementById("email");
  const password = document.getElementById("pass");
  const check1 = document.getElementById("check1");
  const check2 = document.getElementById("check2");

  let messError = [];
  if (email.value == "" || email.value == null) {
    // messError.push("email is requried");
    document.getElementById("err-email").innerHTML =
      "<span>email requried</span>";
    document.getElementById("err-email").classList.add("error");
    document.getElementById("email").classList.add("error-border");
  } else {
    document.getElementById("err-email").innerHTML = "";
    document.getElementById("email").classList.remove("error-border");
  }
  if (password.value.length == "") {
    document.getElementById("err-pass").innerHTML =
      "<span>password requried</span>";
    // messError.push("password is requried");
    document.getElementById("err-pass").classList.add("error");
    document.getElementById("pass").classList.add("error-border");
    document.getElementById("icon-password1").classList.add("err-icon");
  } else {
    document.getElementById("err-pass").innerHTML = "";
    document.getElementById("pass").classList.remove("error-border");
    document.getElementById("icon-password1").classList.remove("err-icon");
  }
  if (!check1.checked) {
    // messError.push("pls fill checkbox 1");
    document.getElementById("err-check1").innerHTML =
      "<span>check1 requried</span>";
  } else {
    document.getElementById("err-check1").innerHTML = "";
  }
  if (check2.checked !== true) {
    // messError.push("pls fill checkbox 2");
    document.getElementById("err-check2").innerHTML =
      "<span>check2 requried</span>";
  } else {
    document.getElementById("err-check2").innerHTML = "";
  }
  //   if (messError.length > 0) {
  //     e.preventDefault();
  //     // errorText.innerText = messError.join(", ");
  //   }
};
function showPassword() {
  const password = document.getElementById("pass");
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}
