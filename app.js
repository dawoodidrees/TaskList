// 'use strict'

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


form.addEventListener('submit', function (e) {
  e.preventDefault();
  if (taskInput.value.trim() === '') {
    console.log('Add a task');
    return;
  } else {
    const li = document.createElement('li')
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(taskInput.value));

    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);
    taskList.appendChild(li);
    taskInput.value = '';
  }
});

document.querySelector('.collection').addEventListener('click', function (e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are You Certain?')) {
      e.target.parentElement.parentElement.remove();
    } else {
      alert('Changes Saved')
    }
  }
})

clearBtn.addEventListener('click', function () {
  taskList.innerHTML = '';
})

filter.addEventListener('keyup', function (e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;
    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block'
    } else {
      task.style.display = 'none'
    }
  })
});
