// En un nuevo archivo llamado script.js (puedes crear este archivo en la misma carpeta que tu HTML y CSS)
let currentIndex = 0;

function cambiarImagen() {
    const imagenes = document.querySelectorAll('.gallery img');
    
    // Oculta la imagen actual
    imagenes[currentIndex].style.display = 'none';

    // Incrementa el índice, volviendo al inicio si llega al final
    currentIndex = (currentIndex + 1) % imagenes.length;

    // Muestra la nueva imagen
    imagenes[currentIndex].style.display = 'block';
}
