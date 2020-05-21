function validateForm() {
  if (
    document.getElementById("user-id").value == "" ||
    document.getElementById("user-id").value.length < 15
  ) {
    alert("Please enter your Full Name");
    document.getElementById("user-id").focus();
    return false;
  }

  let password = document.getElementById("password");
  let mobile = document.getElementById("cell-number");
  let age = document.getElementById("age");

  if (password.value.length < 8) {
    alert("Not a Valid Password");
    password.focus();
    return false;
  }

  if (mobile.value.length != 10) {
    alert("Not a Valid Phone Number");
    mobile.focus();
    return false;
  }

  if (age.value < 18 || age.value > 100) {
    alert("Not Eligible");
    age.focus();
    return false;
  }

  return true;
}
