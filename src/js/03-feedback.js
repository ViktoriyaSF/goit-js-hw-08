import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('form'),
  email: document.querySelector('input'),
  message: document.querySelector('textarea'),
};
const KEY_FORM = 'feedback-form-state';

refs.form.addEventListener('input', throttle(formInput, 500));
refs.form.addEventListener('submit', formOnSubmit);

populateTextarea();

function formInput() {
  // функція вводу забераємо в обєкт тещо ввели
  const allInput = {
    email: refs.email.value.trim(),
    message: refs.message.value.trim(),
  };
  // записуємо в сховище дані , ключ та обєкт -перезаписавши його рядком
  localStorage.setItem(KEY_FORM, JSON.stringify(allInput));
}

function formOnSubmit(event) {
  event.preventDefault();
  // перевірка заповнення всіх полів
  if (refs.email.value === '' || refs.message.value === '') {
    return alert('Будь ласка, заповніть усі поля!');
  }
  // вивод обєкта що був заведенний
  // console.log({ email: refs.email.value, message: refs.message.value });
  console.log(JSON.parse(localStorage.getItem(KEY_FORM))); // ще варіант як визвати обєктзі сховища
  refs.form.reset(); // чистим форму
  localStorage.removeItem(KEY_FORM); // чистим від цих данних лок сховище
}

function populateTextarea() {
  const storageAllForm = JSON.parse(localStorage.getItem(KEY_FORM));
  // storageAllForm якщо пуста видає null, тобто false
  if (storageAllForm) {
    refs.email.value = storageAllForm.email;
    refs.message.value = storageAllForm.message;
  }
}
// =============================================
// 2 варінт як перевірити стан сховеща та показати що там є
// function populateTextarea() {
//   // перевіряємо на помилку а потім парсимо тещо буде в сховищі
//   const loadForm = key => {
//     try {
//       const getForm = localStorage.getItem(key);
//       return getForm === '' ? undefined : JSON.parse(getForm);
//     } catch (error) {
//       console.error('error: ', error);
//     }
//   };

//   const storageAllForm = loadForm(KEY_FORM);

//   // Перевірка стану сховища.
//   // Якщо  в сховищі є збережені дані - заповнити ними поля форми.
//   if (storageAllForm) {
//     refs.email.value = storageAllForm.email;
//     refs.message.value = storageAllForm.message;
//   }
// }
