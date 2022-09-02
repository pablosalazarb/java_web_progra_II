/* 
 * Archivo controlador del front-end con js
 * Autor: Juan Pablo Salazar Barrios
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

function sendInformation(){
    //Creamos un objeto Httprequest.
    let request = new XMLHttpRequest();
    //Abrimos la peticion indicandole el metodo de envio y el valor verdadero.
    request.open('POST' , 'servlet_controller', true);
    //Configuramos el header de la peticion (que tipo de dato enviaremos, etc)
    request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    
    //Verificamos el evento de cambio en el estado de la funcion
    request.onreadystatechange = function(){
        //Si la peticion se proceso (status done)
        if(request.readyState === XMLHttpRequest.DONE){
            //Verificamos si la peticion se proceso correctamente o con error
            if(request.status === 200){
                //Mostramos un alert indicando que el proceso fue exitoso
                swal.fire(
                    'Felicidades!',
                    'Fuiste registrado en RedX! :D',
                    'success'
                );
            } else{
                //Mostramos un alert indicando el error!
                swal.fire(
                    'Error',
                    'Oops, tuvimos un problema enviando tu informacion :(',
                    'error'
                );
            }
        }
    };
    var formData = new FormData(document.getElementById('contact-form'));
    request.send(formData);
}

