const form = document.getElementById(`signin__form`);

form.addEventListener(`submit`, event => {
  event.preventDefault();
  const formData = new FormData(form);
  const xhr = new XMLHttpRequest();
  xhr.open(`POST`, `https://students.netoservices.ru/nestjs-backend/auth`);
  xhr.responseType = 'json';
  xhr.send(formData);
  xhr.onload = () => {
    if (xhr.response.success) {
      localStorage.setItem(`userId`, xhr.response.user_id);
      showWelcome();
      form.reset();
    } else {
      alert(`Неверный логин/пароль`);
    }
  }
})

window.addEventListener(`load`, () => {
  localStorage.userId ? showWelcome() : false;
})

function showWelcome() {
  const signal = document.querySelector(`.signin`);
  signal.classList.remove(`signin_active`);
  const welcome = document.querySelector(`.welcome`);
  const currentUser = welcome.querySelector(`span`);
  currentUser.textContent = localStorage.userId;
  welcome.classList.add(`welcome_active`);
}