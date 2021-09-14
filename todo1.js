const addTaskTrigger = document.getElementsByClassName('js-addTask-trigger')[0];
const addTaskTarget = document.getElementsByClassName('js-addTask-target')[0];
const addTaskValue = document.getElementsByClassName('js-addTask-value')[0];
const compTaskTarget = document.getElementsByClassName('js-compTask-target')[0];
//DOM操作

addTaskTrigger.addEventListener('click', event => {
  const task = addTaskValue.value;
  addTask(task);
  addTaskValue.value = '';
  //「add」を押したときの挙動
});

const addTask = task => {
  const listItem = document.createElement('li');
  const removeButton = document.createElement('button');
  const completeButton = document.createElement('button');

  removeButton.innerText = '削除';
  removeButton.addEventListener('click', () => removeTask(removeButton));

  completeButton.innerText = '完了';
  completeButton.addEventListener('click', () => completeTask(completeButton));

  //追加したタスクに削除＆完了ボタンを付与

  listItem.innerText = task;

  listItem.append(removeButton);
  listItem.append(completeButton);

  addTaskTarget.appendChild(listItem);
  //「ToDo」にタスクを追加
};

const removeTask = removeButton => {
  const removeTask = removeButton.closest('li');
  addTaskTarget.removeChild(removeTask);
};
//「削除」を押したときの挙動

const completeTask = completeButton => {
  const completeTask = completeButton.closest('li');
  compTaskTarget.appendChild(completeTask);
};
//「完了」を押したときの挙動
