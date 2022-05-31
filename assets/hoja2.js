let url = ''
window.onload = () => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=e8omsifJQcTRLLKn5Euydg0nLxddP5X1DFltTX6B')
        .then(res => res.json())
        .then(res => {
            let caja = document.querySelector('.caja2');
            url = res.url;
            let foto = `<img src="${url}">`;
            caja.innerHTML += foto;
        })
}

// Asigno el evento al boton guardar
$('.btnGuardar').on('click', (event) => {
    event.preventDefault();
    // Saco de local storage el array de imagenes en caso de existir sino creo un array vacio
    let arayImg = localStorage.getItem('imgs') ? JSON.parse(localStorage.getItem('imgs')) : [];
    // Subo la nueva img al array
    arayImg.push(url);
    // Guardo Las imagenes en localStorage
    localStorage.setItem('imgs', JSON.stringify(arayImg));
});