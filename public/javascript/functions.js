const editButtons = document.querySelectorAll('.btn-edit');
const postContents = document.querySelectorAll('.post-content');

editButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        if (button.value == "Edit") {
            button.value = "Save"
            button.classList.toggle('btn-save');
            postContents[index].removeAttribute("disabled");
            postContents[index].value =  postContents[index].placeholder;
        } else {
            button.value = "Edit"
            button.classList.toggle('btn-save');
        }
    });
});