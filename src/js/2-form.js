let formData = { email: '', message: '' };
const inputForm = document.querySelector('.feedback-form');

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('feedback-form-state')) {
    const formDefault = JSON.parse(localStorage.getItem('feedback-form-state'));
    formData = formDefault;
    inputForm.elements.email.value = formData.email;
    inputForm.elements.message.value = formData.message;
  }
});

inputForm.addEventListener('input', () => {
  formData.email = inputForm.elements.email.value.trim();
  formData.message = inputForm.elements.message.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

inputForm.addEventListener('submit', e => {
  e.preventDefault();

  if (
    inputForm.elements.email.value.trim() === '' ||
    inputForm.elements.message.value.trim() === ''
  ) {
    alert('Fill please all fields');
    return;
  }
  if (
    inputForm.elements.email.value.trim() !== '' &&
    inputForm.elements.message.value.trim() !== ''
  ) {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    Object.keys(formData).forEach(key => (formData[key] = ''));
    Array.from(inputForm.elements).forEach(element => (element.value = ''));
  }
});

// На що буде звертати увагу ментор при перевірці:

// На живій сторінці відображається форма з двома елементами форми і кнопкою типу submit
// Форма стилізована згідно з макетом
// На формі прослуховуються події input і submit
// При введенні даних у будь-який елемент форми вони записуються у локальне сховище під ключем "feedback-form-state", збережені дані не містять пробіли по краях
// Введення даних в одне поле форми не видаляє дані в сховищі для іншого
// При оновленні сторінки дані з локального сховища підставляються в елементи форми, у полях форми відсутні undefined
// При сабміті форми є перевірка, щоб обидва елементи форми були заповнені
// Під час сабміту форми, якщо обидва елементи форми заповнені, виводиться у консоль об'єкт з полями email, message та їхніми поточними значеннями, а також очищаються сховище і поля форми
// Якщо після сабміту форми ввести в будь-який елемент форми дані, то в локальному сховищі не з’являються дані від попереднього сабміта
