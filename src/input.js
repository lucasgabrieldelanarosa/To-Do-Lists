const addTaskBtn = document.querySelector('#addTaskBtn');


addTaskBtn.addEventListener('click', () => {
    addTaskBtn.parentNode.removeChild(addTaskBtn);
})