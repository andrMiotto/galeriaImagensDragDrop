const draggables = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.card-drop');

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', event => {
        event.target.classList.add('dragging');
    });

    draggable.addEventListener('dragend', event => {
        event.target.classList.remove('dragging');
    });
});

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover', event => {
        event.preventDefault();
        dropzone.classList.add('over');
    });

    dropzone.addEventListener('dragleave', () => {
        dropzone.classList.remove('over');
    });

    dropzone.addEventListener('drop', event => {
        event.preventDefault();
        dropzone.classList.remove('over');

        const dragging = document.querySelector('.dragging');
        if (dragging) {
            dropzone.innerHTML = '';
            const clone = dragging.cloneNode(true);
            clone.classList.remove('dragging');
            dropzone.appendChild(clone);
        }
    });
});
