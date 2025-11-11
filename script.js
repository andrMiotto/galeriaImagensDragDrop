const draggables = document.querySelectorAll('.card'); // todas as imagens arrastáveis
const dropzones = document.querySelectorAll('.card-drop'); // todas as áreas de drop

// --- DRAG START / END ---
draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', event => {
    event.dataTransfer.setData('text/plain', event.target.id || ''); // guarda o id ou vazio
    event.target.classList.add('dragging');
    console.log('Drag iniciado:', event.target);
  });

  draggable.addEventListener('dragend', event => {
    event.target.classList.remove('dragging');
    console.log('Drag finalizado');
  });
});

// --- DROPZONES ---
dropzones.forEach(dropzone => {
  dropzone.addEventListener('dragenter', event => {
    event.preventDefault();
    dropzone.classList.add('over');
  });

  dropzone.addEventListener('dragover', event => {
    event.preventDefault(); // permite soltar
  });

  dropzone.addEventListener('dragleave', () => {
    dropzone.classList.remove('over');
  });

  dropzone.addEventListener('drop', event => {
    event.preventDefault();
    const dragged = document.querySelector('.dragging');
    if (dragged) {
      dropzone.innerHTML = ''; // limpa o texto "Arraste a imagem aqui"
      dropzone.appendChild(dragged); // move o card pra área
    }
    dropzone.classList.remove('over');
    console.log('Imagem solta na área');
  });
});
