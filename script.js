const draggables = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.card-drop');




draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', event => {
        event.dataTransfer.setData('text/plain', event.target.innerText);
        event.target.classList.add('draggin');
        console.log('drag iniciado: ', event.target.innerText);
    });

    draggable.addEventListener('dragend', event => {
        event.target.classList.remove('draggin');
        console.log('Drag finalizado: ', event.target.innerText);
    });
});

dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragenter', event => {
        event.preventDefault();
        dropzone.classList.add('over');
        console.log('Entrou na area de drop');

        dropzone.addEventListener('dragover', event => {
            event.preventDefault();
            console.log("Elemento sobre a area de drop");
        });

        dropzone.addEventListener('dragleave', () => {
            dropzone.classList.remove('over');
            console.log('Saiu da area de drop');
        })

        dropzone.addEventListener('drop', event => {
            event.preventDefault();
            dropzone.classList.remove('over');

            const dragging = document.querySelector('.dragging');
            if (dragging) {
                dropzone.innerHTML = '';
                dropzone.appendChild(dragging);
                console.log('Elemento solto na área de drop');
            }
        });

    });



});


