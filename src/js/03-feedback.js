import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const email = form.elements.email;
const message = form.elements.message;
const objFromLC = localStorage.getItem('feedback-form-state');

form.addEventListener('input', throttle(setToLC, 500));
form.addEventListener('submit', submitForm);

getToLC();

function getToLC() {
  const localStorageObj = JSON.parse(objFromLC);
  if (localStorageObj === null) {
    email.value = '';
    message.value = '';
  } else {
    email.value = localStorageObj.email;
    message.value = localStorageObj.message;
  }
}
function setToLC() {
  localStorage.setItem(
    'feedback-form-state',
    JSON.stringify({ email: email.value, message: message.value })
  );
}

function submitForm(e) {
  e.preventDefault();
  console.log(JSON.parse(objFromLC));
  email.value = '';
  message.value = '';
  localStorage.clear();
}
