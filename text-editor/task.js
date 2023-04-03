const imputText = document.getElementById(`editor`);

document.addEventListener(`keyup`, () => {
  localStorage.setItem(`lastText`, imputText.value);
})

window.addEventListener(`load`, () => {
  imputText.value = localStorage.getItem(`lastText`);
})