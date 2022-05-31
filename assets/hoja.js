// api de Lourdes https://mars-weather-rems.netlify.app/rems.json

 const url = 'http://cab.inta-csic.es/rems/rems_weather.xml';

let tiempo = {
    tempMinima: '',
    tempMaxima: '',
    presion: '',
    tempSueloMin: '',
    tempSueloMax: '',
    estado: ''
};

$(function () {
    ajax();
})

function ajax() {
    $.ajax({
        url: url, // hacer la llamada, sacar los datos.
        dataType: "xml" // formato en el que se llama.
    }).done(function (respuesta) { // donde entra la llamada si es correcta, respuesta, lo que trae (xml)
        console.log(respuesta); 
        tiempo.tempMinima = ($(respuesta).find("magnitudes").find('min_temp')[0].textContent);
        tiempo.tempMaxima = ($(respuesta).find("magnitudes").find('max_temp')[0].textContent);
        tiempo.presion = ($(respuesta).find("magnitudes").find('pressure')[0].textContent);
        tiempo.tempSueloMin = ($(respuesta).find("magnitudes").find('min_gts_temp')[0].textContent);
        tiempo.tempSueloMax = ($(respuesta).find("magnitudes").find('max_gts_temp')[0].textContent);
        tiempo.estado = ($(respuesta).find("magnitudes").find('atmo_opacity')[0].textContent);
        console.log(tiempo);
        $('#tempMinima').html(tiempo.tempMinima);
        $('#tempMaxima').html(tiempo.tempMaxima);
        $('#presion').html(tiempo.presion);
        $('#tempSueloMin').html(tiempo.tempSueloMin);
        $('#tempSueloMax').html(tiempo.tempSueloMax);
        $('#estado').html(tiempo.estado);
    }).fail(function () {
        alert("URL No Valida");
    })
} 




// window.onload = () => {
//     const url = 'http://cab.inta-csic.es/rems/rems_weather.xml';

//     let tiempo = {
//         tempMinima: '',
//         tempMaxima: '',
//         presion: '',
//         tempSueloMin: '',
//         tempSueloMax: '',
//         estado: ''
//     };

//     fetch('http://cab.inta-csic.es/rems/rems_weather.xml')
//         .then(res => res.json())
//         .then(res => {
//             console.log(res);
//             tiempo.tempMinima = res.magnitudes.min_temp;
//             tiempo.tempMaxima = res.magnitudes.max_temp;
//             tiempo.presion = res.magnitudes.pressure;
//             tiempo.tempSueloMin = res.magnitudes.min_gts_temp;
//             tiempo.tempSueloMax = res.magnitudes.max_gts_temp;
//             tiempo.estado = res.magnitudes.atmo_opacity;
//             // tiempo.tempMinima = (respuesta.find("magnitudes").find('min_temp')[0].textContent);
//             // tiempo.tempMaxima = (respuesta.find("magnitudes").find('max_temp')[0].textContent);
//             // tiempo.presion = (respuesta.find("magnitudes").find('pressure')[0].textContent);
//             // tiempo.tempSueloMin = (respuesta.find("magnitudes").find('min_gts_temp')[0].textContent);
//             // tiempo.tempSueloMax = (respuesta.find("magnitudes").find('max_gts_temp')[0].textContent);
//             // tiempo.estado = (respuesta.find("magnitudes").find('atmo_opacity')[0].textContent);
//             document.getElementById('#tempMinima').innerHTML(tiempo.tempMinima)
//             document.getElementById('#tempMaxima').innerHTML(tiempo.tempMaxima)
//             document.getElementById('#presion').innerHTML(tiempo.presion)
//             document.getElementById('#tempSueloMin').innerHTML(tiempo.tempSueloMin)
//             document.getElementById('#tempSueloMax').innerHTML(tiempo.tempSueloMax)
//             document.getElementById('#estado').innerHTML(tiempo.estado)
//         })
// }




/*console.log(($(respuesta).find("magnitudes").find('min_temp')))*/






