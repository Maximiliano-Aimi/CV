function ConfirmDemo() {
    //Ingresamos un mensaje
    var mensaje = confirm("¿Desea contactarme?");
    //Verificamos si el usuario acepto el mensaje
    if (mensaje) {
    alert("¡Gracias por la oportunidad!");
    }
    //Verificamos si el usuario denegó el mensaje
    else {
    alert("¡Lamento leer eso! Suerte en su busqueda");
    }
}