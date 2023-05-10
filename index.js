class TodoApp {
    constructor() {
      this.taskList = [];
    }
  
    get todos() {
      return this.taskList;
    }
  
    set todos(tasks) {
      this.taskList = tasks;
    }
  
    addTodo() {
      const taskInput = document.getElementById('taskInput');
      const newTask = taskInput.value.trim();
  
      if (newTask !== '') {
        this.taskList.push({
          task: newTask,
          completed: false
        });
  
        taskInput.value = '';
        this.displayTodos();
      }
    }
  
    deleteItem(index) {
      this.taskList.splice(index, 1);
      this.displayTodos();
    }
  
    toggleStatus(index) {
      this.taskList[index].completed = !this.taskList[index].completed;
      this.displayTodos();
    }
  
    displayTodos() {
      const taskListContainer = document.getElementById('taskList');
      taskListContainer.innerHTML = '';
  
      this.taskList.forEach((task, index) => {
        const listItem = document.createElement('li');
        const toggleButton = document.createElement('button');
        const removeButton = document.createElement('button');
  
        toggleButton.innerHTML = task.completed ? 'Undo' : 'Complete';
        toggleButton.addEventListener('click', () => this.toggleStatus(index));
  
        removeButton.innerHTML = 'Remove';
        removeButton.addEventListener('click', () => this.deleteItem(index));
  
        listItem.innerHTML = `
          <span class="${task.completed ? 'completed' : ''}">${task.task}</span>
        `;
        listItem.appendChild(toggleButton);
        listItem.appendChild(removeButton);
  
        taskListContainer.appendChild(listItem);
      });
    }
  }
  
  const todoApp = new TodoApp();
  
  document.getElementById('addButton').addEventListener('click', () => {
    todoApp.addTodo();
  });
  