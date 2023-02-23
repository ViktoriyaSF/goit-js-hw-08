import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};

refs.form.addEventListener('input', throttle(formInput, 500));
refs.form.addEventListener('submit', formOnSubmit);

function formInput() {
  const allInput = {
    email: refs.email.value.trim(),
    message: refs.message.value.trim(),
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(allInput));
}

function formOnSubmit(event) {
  event.preventDafualt();
  refs.form.resert();
  localStorage.removeItem('feedback-form-state');
}
