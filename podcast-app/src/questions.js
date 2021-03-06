export class Question {
static create(question){
 return fetch("https://podcust-214b6-default-rtdb.europe-west1.firebasedatabase.app/questions.json", 
  {
    method: 'POST',
    body: JSON.stringify(question),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
   .then(response =>{
    question.id = response.name
    return question
  })
   .then(addToLocalStorage)
   .then(Question.renderList)
}

static renderList(){
  const questions = getQuestionsFromLocalStorage()
  const html = questions.length
   ? questions.map(toCard).join('')
    : ` <div class="mui--text-headline">Вы пока ничего не спрашивали</div>`;
  const $list = document.querySelector('#list');
  $list.innerHTML = html;
}

  static fetch(token) {
    if(!token){
      return Promise.resolve('<p>E вас нет токена</p>')
    }
   return fetch('https://podcust-214b6-default-rtdb.europe-west1.firebasedatabase.app/questions.json?auth=${token}')
    .then(response => response.json())
    .then(questions => {
      console.log('Questions', questions);
    })
  }
}


function addToLocalStorage(question){
  const all = getQuestionsFromLocalStorage();
  all.push(question);
  localStorage.setItem('questions', JSON.stringify(all));
}

function getQuestionsFromLocalStorage(){
  return JSON.parse(localStorage.getItem('questions') || '[]')
}

function toCard(question){
  return ` 
        <div class="mui--text-black-54">
        ${new Date(question.date).toLocaleDateString()}
        ${new Date(question.date).toLocaleTimeString()}
        </div>
        <div>
        ${question.text}
        </div>`
}

