const addTaskBtn = document.querySelector('#addTaskBtn');
const addProjectBtn = document.querySelector('#addProjectBtn');
const mainNav = document.querySelector('#mainNav');
const mainAsideLeft = document.querySelector('#main-aside-left');

addTaskBtn.addEventListener('click', () => {
    const addTaskForm = document.createElement('form');
    addTaskForm.classList.add('main-nav-addTaskForm');

    addTaskForm.innerHTML = `
    <input type="text" placeholder="Add a Task" class="main-nav-addTaskForm-input">

    <section class="main-nav-addTaskForm-section">
        <button class="main-nav-addTaskForm-section-btn save">Save</button>
        <button class="main-nav-addTaskForm-section-btn cancel">Cancel</button>
    </section>

    `

    mainNav.insertBefore(addTaskForm, addTaskBtn);

    mainNav.removeChild(addTaskBtn);
})

addProjectBtn.addEventListener('click', () => {
    const addProjectForm = document.createElement('form');
    addProjectForm.classList.add('main-aside-left-inputForm');

    addProjectForm.innerHTML = `
    <input type="text" placeholder="Add a Task" class="main-aside-left-inputForm-input">

    <section class="main-aside-left-inputForm-section">
        <button class="main-aside-left-inputForm-section-btn save">Save</button>
        <button class="main-aside-left-inputForm-section-btn cancel">Cancel</button>
    </section>

    `

    mainAsideLeft.insertBefore(addProjectForm, addProjectBtn);

    mainAsideLeft.removeChild(addProjectBtn);
})