let points = 0;
const completed = {};
let tasksCompleted = 0;

// Load points from localStorage if available
if (localStorage.getItem('points')) {
  points = parseInt(localStorage.getItem('points'));
  document.querySelector('#points').setAttribute('value', `Points: ${points}`);
}

AFRAME.registerComponent('task-handler', {
  init: function () {
    this.el.addEventListener('click', () => {
      const id = this.el.getAttribute('id');
      if (!completed[id]) {
        this.el.setAttribute('color', 'green');
        points += 10;
        completed[id] = true;
        tasksCompleted++;

        // Update points and save to localStorage
        document.querySelector('#points').setAttribute('value', `Points: ${points}`);
        localStorage.setItem('points', points);

        // Show messages
        if (tasksCompleted === 5) {
          document.querySelector('#message').setAttribute('value', "Keep going! 5 tasks completed!");
        }
        if (tasksCompleted === 10) {
          document.querySelector('#message').setAttribute('value', "Good! Well done! 10 tasks completed!");
        }
      }
    });
  }
});

// Attach the component to each task box dynamically
window.onload = () => {
  ['task1', 'task2', 'task3', 'task4', 'task5', 'task6', 'task7', 'task8', 'task9', 'task10'].forEach(id => {
    const el = document.querySelector(`#${id}`);
    el.setAttribute('task-handler', '');
  });
};
