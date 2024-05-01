// Toggle class active

const tengah = document.querySelector(".tengah");
//ketka menu di klik
document.querySelector("#burger").onclick = () => {
  tengah.classList.toggle("active");
};

const menu = document.querySelector("#burger");

document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !tengah.contains(e.target)) {
    tengah.classList.remove("active");
  }
});

const form = document.getElementById("register-form");

addEventListener("submit", function (e) {
  const nameInput = document.getElementById("name");
  const emailinput = document.getElementById("email");
  const dateInput = document.getElementById("birth-date");
  const passwordInput = document.getElementById("password");
  const ComfirmInput = document.getElementById("confirm-password");
  const agreeInput = document.getElementById("agree-term");

  if (nameInput.value == "") {
    this.document.getElementById("error").innerHTML =
      "<p>Name must be Filled</p>";
    e.preventDefault();
  } else if (nameInput.value.length < 5) {
    this.document.getElementById("error").innerHTML =
      "<p>Name must consists of min. 5</p>";
    e.preventDefault();
  } else if (emailinput.value == "") {
    this.document.getElementById("error").innerHTML =
      "<p>Email must be Filled</p>";
    e.preventDefault();
  } else if (passwordInput.value.length < 5) {
    this.document.getElementById("error").innerHTML =
      "<p>Password must consists of min. 5</p>";
    e.preventDefault();
  } else if (passwordInput.value != ComfirmInput.value) {
    this.document.getElementById("error").innerHTML = "<p>Wrong password</p>";
    e.preventDefault();
  } else if (dateInput.value == "") {
    this.document.getElementById("error").innerHTML =
      "<p>Please Input ypur dates</p>";
    e.preventDefault();
  } else if (!agreeInput.checked) {
    this.document.getElementById("error").innerHTML =
      "<p>Please agree to terms n conditions</p>";
    e.preventDefault();
  }

  console.log("Name: " + nameInput.value);
  console.log("Email: " + emailinput.value);
  console.log("Birth: " + dateInput.value);
  console.log("Password: " + passwordInput.value);
  console.log("Confirm: " + ComfirmInput.value);
  console.log("Agreed: " + agreeInput.checked);
});
