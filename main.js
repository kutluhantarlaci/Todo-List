const todoAddElm = document.getElementById('todoAdd');
const todoInpElm = document.getElementById('todoInp');
const todoListElm = document.getElementById('todoList');
const todoList = [
  { text: 'merhaba', status: 'true' }
];

const render = function () {

  todoListElm.innerHTML = '';
  todoList.forEach((item, i) => {
    todoListElm.innerHTML += `<li class="task">${item.text} - <a onclick="removeTask(${i})">sil</a></li>`
  });
};

const addTask = function () {

  if (!todoInpElm.value) {
    alert('Görev alanı boş bırakılamaz');

  } else {
    todoList.push({
      text: `${todoInpElm.value}`,
      status: `${todoInpElm.status}`
    });

    let myInd = todoList.length - 1;
    let liElm = document.createElement('li');
    liElm.classList.add('task');
    liElm.innerHTML = todoInpElm.value + ` - <a onclick="removeTask(${myInd})">sil</a>`;
    todoListElm.append(liElm);
  }
  todoInpElm.value = ''
};

const removeTask = function (id) {
  todoList.splice(id, 1)
  let tasks = document.getElementsByClassName('task');
  tasks[id].remove()
  render()
};

const todoListInit = function () {
  render();
};

todoListInit();
