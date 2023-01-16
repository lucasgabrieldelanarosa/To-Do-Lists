const addTaskBtn = document.querySelector('#addTaskBtn');
const mainNav = document.querySelector('#mainNav');

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