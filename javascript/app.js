let input_fields = document.getElementsByClassName("input");
let submit_btn = document.getElementById("submitbtn");
let error_msg = document.getElementsByClassName("error-msg");
let email_validation = document.getElementById("email-error");

submit_btn.addEventListener("click", function () {
  for (let i = 0; i < input_fields.length; i++) {
    if (input_fields[i].value == "") {
      input_fields[i].classList.add("icon");
      error_msg[i].classList.remove("hide");
    } else {
      error_msg[i].classList.add("hide");
      input_fields[i].classList.remove("icon");
    }
  }
});
