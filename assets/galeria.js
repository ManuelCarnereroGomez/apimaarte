let imgClicked = '';
let arrayImg = [];
// Eventos que suceden cuando arranque la aplicacion
$(function () {
    mostrar();
    // Asigna al boton eliminar un evento click
    $('.eliminar').on('click', () => {
        borrar();
    })
})

function mostrar() {
    // Saco de localStorage el array con las imagenes
    arrayImg = JSON.parse(localStorage.getItem('imgs'));
    if (arrayImg && arrayImg.length !== 0) {
        // Recorro el array para ir mostrando las imagenes
        arrayImg.forEach((element, i) => {
            $('.caja').append(`<img index='${i}' class='imgGaleria' src="${element}">`)
        });

        // Le asigno a las imagenes el evento para guardar su id
        $('.imgGaleria').on('click', (event) => {
            imgClicked = event.target.attributes.index.value;
        })
    } else {
        // Escribo esto en caso de no contar con imagenes, por si acaso
        $('.caja').html('No cuenta con imagenes guardadas')
    }
}

function borrar() {
    if(imgClicked !== ''){
        // Elimino del array la imagen seleccionada
        arrayImg.splice(imgClicked, 1);
        // Guardo en localStorage el nuevo array con las imagenes
        localStorage.setItem('imgs', JSON.stringify(arrayImg));
        resetear();
    }
}

function resetear(){
    $('.caja').html('');
    imgClicked = '';
    mostrar();
}
