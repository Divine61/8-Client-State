const btnCloseModal = document.querySelector(`.modal__close`);
const modal = document.querySelector(`.modal`);

window.addEventListener(`load`, () => {
  if (getCookie(`modal`) === `closet`) {
    modal.classList.remove(`modal_active`);
  }
})

btnCloseModal.addEventListener(`click`, () => {
  modal.classList.remove(`modal_active`);
  setCookie('modal', `closet`);
  
})

function setCookie(name, value) {
  document.cookie = name + '=' + value;
}

function getCookie(name) {
  const value = `; ${document.cookie} `;
  let parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop();
  }
}