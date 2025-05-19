const inputField = document.querySelector('.input_field');
const btn = document.querySelector('.submit_btn');
const list = document.querySelector('.to_do_list')


function handleSubmit() {
    const item = document.createElement('li');
    item.innerText = inputField.value;
    item.classList.add('addedToDo')
    list.appendChild(item)
    inputField.value = '';
    item.addEventListener('click', () => {
        item.classList.add('completed')
    })
    item.addEventListener('dblclick', () => {
        list.removeChild(item)
    })
}

btn.addEventListener('click', () => {
    handleSubmit();
})


inputField.addEventListener ('keydown', function (event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            handleSubmit();

        }
    });



    // btn.addEventListener('click', () => {
//     const item = document.createElement('li');
//     item.innerText = inputField.value;
//     item.classList.add('addedToDo');
//     list.appendChild(item);
//     inputField.value = '';

//     item.addEventListener('click', () => {
//         item.classList.add('completed')
//     })
// item.addEventListener('dblclick', () => {
//     list.removeChild(item);
// })

// })