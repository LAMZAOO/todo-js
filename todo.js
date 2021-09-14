// let e = document.getElementsByClassName('add-btn');

// e[0].addEventListener('click', function(){
//   addElement();
//   trashBox();
//   checkBox();
// });

// function addElement() {
//   const listText = document.getElementById('add-area');
//   let text = document.createTextNode(listText.value);
//   let li = document.createElement('li'); 
//   li.appendChild(text);
  
//   let trash = document.createElement('span');
//   trash.classList.add('trashPosition');
//   trash.classList.add('trash');
//   trash.innerHTML = '削除 <i class="fas fa-trash-alt"></i>';
//   li.appendChild(trash);
  
//   let check = document.createElement('span');
//   check.classList.add('checkPosition');
//   check.classList.add('check');
//   check.innerHTML = '完了 <i class="fas fa-check-square"></i>';
//   li.appendChild(check);

//   const lists = document.getElementById('todo');

//   lists.appendChild(li);
// };

// function trashBox() {
//   let trash = document.getElementsByClassName('trash');
//   for (i = 0; i < trash.length; i++) {
//     trash[i].addEventListener('click',function() {
//       let li = this.parentNode;
//       li.remove();
//     })
//   }
// };

// function checkBox() {
//   let check = document.getElementsByClassName('check');
//   let done = document.getElementById('done');
//   for (i = 0; i < check.length; i++) {
//     check[i].addEventListener('click',function() {
//       let li = this.parentNode;
//       done.appendChild(li);
//       this.remove();
//     });
//   }
// };

const addTaskTrigger = document.getElementsByClassName('add-button')[0];
const addTaskTarget = document.getElementsById('todo')[0];
const compTaskTarget = document.getElementById('done')[0];
const addTaskValue = document.getElementById('add-area')[0];

const removeTask = removeButton => {
  const removeTargetTask = removeButton.closest('li');
  addTaskTarget.removeChild(removeTargetTask);
};

const completeTask = completeButton => {
  const completeTargetTask = completeButton.closest('li');
  addTaskTarget.appendChild(compTaskTarget);
};