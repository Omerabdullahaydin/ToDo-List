let addButton = document.getElementById('addTodo');
let Container = document.getElementById('toDoContainer');
let inputText = document.getElementById('inputText');

addButton.addEventListener('click', function(){
    let addText = document.createElement('p');
    addText.classList.add('text');
    addText.innerHTML = inputText.value
    Container.appendChild(addText);

    addText.addEventListener('click', function(){
        addText.style.textDecoration = 'line-through';
    })

})