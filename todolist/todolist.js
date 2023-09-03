// array for todo
const todoList = [
  'Cook dinner',
  'Wash dishes',
  'Go for a walk'
];

// select tags
const addBtn = document.querySelector('.addBtn');
const input = document.querySelector('#input');
const todoDisplay = document.querySelector('.todoDisplay');

// Add input values to the array
input.addEventListener("keydown", function(event) {
  if (event.key === 'Enter') {
    const inputValue = input.value;

    if (inputValue === "") {
      alert('please enter a todo');
    } else {
      todoList.push(inputValue);
      input.value = "";
      updateList();
    }
  }
});

// Function to update the list
const updateList = () => {
  // Looping through the array to create HTML
  let listHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    listHTML += `<div class="todoLists"><li>${todoList[i]}</li> <button class="deleteButton" data-index="${i}">x</button></div>`;
  }

  todoDisplay.innerHTML = listHTML;

  // Add event listeners to delete buttons
  const deleteButtons = document.querySelectorAll('.deleteButton');
  deleteButtons.forEach(button => {
    button.addEventListener("click", function() {
      const index = parseInt(button.getAttribute("data-index"));
      todoList.splice(index, 1);
      updateList();
    });
  });
};

// Initial call to updateList
updateList();

// Toggle input visibility
addBtn.addEventListener("click", function() {
  if (input.classList.contains('showHide')) {
    input.classList.remove('showHide');
  } else {
    input.classList.add('showHide');
  }
});
