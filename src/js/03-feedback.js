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
  event.preventDefault();
  if (refs.email.value === '' || refs.message.value === '') {
    return alert('Будь ласка, заповніть усі поля!');
  }
  console.log({ email: refs.email.value, message: refs.message.value });
  refs.form.reset();
  localStorage.removeItem('feedback-form-state');
}

const loadForm = key => {
  try {
    const getForm = localStorage.getItem(key);
    return getForm === '' ? undefined : JSON.parse(getForm);
  } catch (error) {
    console.error('error: ', error);
  }
};

const storageAllForm = loadForm('feedback-form-state');

// Перевірка стану сховища.
// Якщо  в сховищі є збережені дані - заповнити ними поля форми.
if (storageAllForm) {
  refs.email.value = storageAllForm.email;
  refs.message.value = storageAllForm.message;
}
