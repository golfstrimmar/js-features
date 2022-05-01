import { createModal, isValid } from './utils';
import { Question } from './questions';
import './style.css';
import { getAuthForm, authWithEmailAndPassword } from './auth';

const $form = document.querySelector('#form');
const $input = $form.querySelector('#question-input');
const $submitBtn = $form.querySelector('#submit');
const $btn = document.querySelector('#modal-btn');


window.addEventListener('load', Question.renderList);
$btn.addEventListener('click', openModal);
$form.addEventListener('submit', submitFormHandler);
$input.addEventListener('input', (e) => {
  $submitBtn.disabled = !isValid($input.value)
});




function submitFormHandler(e) {
  e.preventDefault();
  if (isValid($input.value)) {
    const question = {
      text: $input.value.trim(),
      date: new Date().toJSON()
    }
    $submitBtn.disabled = true
    Question.create(question).then(() => {
      $input.value = ""
      $input.className = ""
      $submitBtn.disabled = false
    }
    )
  }
}


function openModal(params) {
  createModal('Авторизация', getAuthForm())
  const $authForm = document.querySelector('#auth-form');
  $authForm.addEventListener('submit', authFormHandler, { once: true })
}

function authFormHandler(e) {
  e.preventDefault();
  const email = e.target.querySelector('#email').value
  const password = e.target.querySelector('#password').value
  authWithEmailAndPassword(email, password)
  .then(token => {
    return Question.fetch(token)
  })
}


