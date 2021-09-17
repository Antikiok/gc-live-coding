const listElem = document.querySelector('.list');

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderTasks = tasksList => {
  console.log('render');
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }, index) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');

      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('data-id', index);
      checkbox.checked = done;

      checkbox.classList.add('list__item-checkbox');
      if (done) {
        listItemElem.classList.add('list__item_done');
      }

      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

const createBtnElement = document.querySelector('.create-task-btn');
const inputElement = document.querySelector('.task-input');

// алго
// get data
// create a task object, add to array
// re-render

function onCreateTask() {
  //

  console.dir(inputElement);

  const { value } = inputElement;
  console.log(value);

  tasks.push({
    text: value,
    done: false,
  });

  renderTasks(tasks);
}

// WEB FLOW
// get data
// render
// update data, don't update DOM (!!!!)
// re-render

// input: string, callback
// output: undefined
createBtnElement.addEventListener('click', onCreateTask);

// algo
// 1 chek if clicked on checkbox
// 2 find task where clicked
// 3 update task
// re-render

function updateTaskHandler(event) {
  //

  console.dir(event.target);
  console.log(event.target.classList);
  if (event.target.classList.contains('.list__item-checkbox')) {
    return;
  }
  console.log('checbox is clicked');
  console.log(event.target.dataset);
}

// WEB FLOW
// get data
// render
// update data, don't update DOM (!!!!)
// re-render

// input: string, callback
// output: undefined
listElem.addEventListener('click', updateTaskHandler);
