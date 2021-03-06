const form = document.querySelector(".js-form"),
  input = document.querySelector("input"),
  gretting = document.querySelector(".js-grettings");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  paintGretting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintGretting(text) {
  form.classList.remove(SHOWING_CN);
  gretting.classList.add(SHOWING_CN);
  gretting.innerHTML = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    //she is not
    askForName();
  } else {
    //she is
    paintGretting(currentUser);
  }
}

function init() {
  loadName();
}
init();
