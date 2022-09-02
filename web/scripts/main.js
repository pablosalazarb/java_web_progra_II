/* 
 * Archivo controlador del front-end con js
 * Autor: Juan Pablo Salazar Barrios
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/JavaScript.js to edit this template
 */

//Definimos la funcion para envio de informacion de la forma 1
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

//Definimos la funcion para envios de datos de la forma 2
function sendInformation2(){
          //Creamos un nuevo objeto xmlhttprequest
          const http_request = new XMLHttpRequest();
          //Preparamos un objeto formdata
	  var formData = new FormData(document.getElementById('contact-form'));

	  //En caso que se procese la peticion correctamente
	  http_request.addEventListener('load', (event) => {
                //Mostramos un alert indicando que el proceso fue exitoso
                swal.fire(
                    'Felicidades!',
                    'Fuiste registrado en RedX! :D',
                    'success'
                );
	  });

	  //Si la peticion tiene un error, entonces mostramos una alerta
	  http_request.addEventListener('error', (event) => {
	    //Alerta de error con sweetAlert2
            swal.fire(
                    'Error',
                    'Oops, tuvimos un problema enviando tu informacion :(',
                    'error'
                ); 
	  });

	  //Configuramos los headers de la peticion
	  http_request.open('POST', 'servlet_controller'); //Abrimos la conexion

	  //Enviamos el objeto formData y los headers se incluyen en automatico
	  http_request.send(formData); //Enviamos el objeto
	
}
