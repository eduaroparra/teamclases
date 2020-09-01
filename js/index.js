var $$ = Dom7;

//MuestraMensaje();

var idproducto=0;

var app = {
    /* Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }*/
};



function showsplashscreen(){

  setTimeout(function(){  InitApp();   }, 000);

}


function InitApp(){

   if(localStorage.getItem("team-login")=="autenticado"){
       mainView.router.navigate('/home/',{animate:true});   
   }else{
    mainView.router.navigate('/login/',{animate:true});
   }

}


function CerrarSesion()
{

  //checkConnection();

  localStorage.setItem("team-login", "false");

  mainView.router.navigate('/login/',{animate:true});

}



function checkConnection() {
  var networkState = navigator.connection.type;

  var states = {};
  states[Connection.UNKNOWN]  = 'Unknown connection';
  states[Connection.ETHERNET] = 'Ethernet connection';
  states[Connection.WIFI]     = 'WiFi connection';
  states[Connection.CELL_2G]  = 'Cell 2G connection';
  states[Connection.CELL_3G]  = 'Cell 3G connection';
  states[Connection.CELL_4G]  = 'Cell 4G connection';
  states[Connection.CELL]     = 'Cell generic connection';
  states[Connection.NONE]     = 'No network connection';

  alert('Connection type: ' + states[networkState]);
}




var app7 = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'teamclases',
    // App id
    id: 'com.team.app',
    /* Enable swipe panel
    panel: {
      swipe: 'left',
    },*/
    // Add default routes
    routes: [
      {
        path: '/notificaciones/',
        url: 'views/notificaciones.html',
      },{
        path: '/login/',
        url: 'views/login.html',
      },
      {
        path: '/registro/',
        url: 'views/registro.html',
      },{
        path: '/perfil/',
        url: 'views/perfil.html',
      },
      ,{
        path: '/main/',
        url: 'views/main.html',
      },
      ,{
        path: '/buscar/',
        url: 'views/buscar.html',
      },
      ,{
        path: '/producto/',
        url: 'views/producto.html',
      },
      ,{
        path: '/product/',
        url: 'views/product.html',
      },
      ,{
        path: '/carrito/',
        url: 'views/carrito.html',
      },
      ,{
        path: '/pago/',
        url: 'views/pago.html',
      },
      ,{
        path: '/lol/',
        url: 'views/lol.html',
      },
    ],

    // ... other parameters
  });





  var mainView = app7.views.create('.view-main');

 



  app7.panel.allowOpen = true;



     


  // Show preloader before Ajax request
   //app7.preloader.show('blue');

   


   // Create full-layout notification
var notificationFull = app7.notification.create({
    icon: '<i class="f7-icons">alarm</i>',
    title: 'Framework7',
    titleRightText: 'now',
    subtitle: 'This is a subtitle',
    text: 'This is a simple notification message',

  });



  function Ingresar(){

    var usuario = $$('eduardo.parra27').val();
    var password = $$('12345').val();

    app7.preloader.show('blue');

    app7.request({
      url: 'http://localhost/teamclases/api/login.php',
      data:{username:usuario,password:password},
      method:'POST',
      crossDomain: true,
      success:function(data){
           
        app7.preloader.hide();

        var objson = JSON.parse(data);

        if(objson.data == "AUTENTICADO"){

          localStorage.setItem("team-login", "autenticado");

        mainView.router.navigate('/home/',{animate:true});
        
        }else{
          console.log("respuesta appi:"+objson.data);
          alert("USUARIO Y/O PASSWORD INCORRECTO");
        }
      
      },
      error:function(error){

        app7.preloader.hide();
      
      }
      
      });

  }


  function Registrarse(){

      var nombre = $$('#nombre').val();
      var apellidos = $$('#apellidos').val();
      var telefono = $$('#telefono').val();
      var correo = $$('#correo').val();
      var usuario = $$('#usuarior').val();
      var password = $$('#password').val();
  

      app7.preloader.show('blue');
  
      app7.request({
        url: 'http://localhost/teamclases/api/registro.php',
        data:{usuario:usuario,password:password,nombre:nombre,apellidos:apellidos,correo:correo,telefono:telefono},
        method:'POST',
        crossDomain: true,
        success:function(data){
             
          app7.preloader.hide();
  
          var objson = JSON.parse(data);
  
          if(objson.status_message == "CORRECTO"){
  
          alert("Muchas gracias por registarte ya puedes acceder");
          mainView.router.navigate('/login/',{animate:true});
          
          }else{
  
            alert("Hubo un error intentalo nuevamente");
          }
        
        },
        error:function(error){
  
          app7.preloader.hide();
        
        }
        
        });
  
  }


 

  function AbrirNotificacion(){
    

    notificationFull.open();
   

  }


function prueba(){

  alert("cambio");
}


  function MuestraMensaje(){
      alert("ehh funciona!!!");
      console.log("ehh funciona!!");
  }



  


  

  $$(document).on('page:init', '.page[data-name="login"]', function (e) {
     
    $$('#texto-login').html('Si ');

    

    var calendarDefault = app7.calendar.create({
      inputEl: '#demo-calendar-default',
    });
    
          
  
  });




  $$(document).on('page:init', '.page[data-name="home"]', function (e) {

     // alert("alerta");

    
     //app7.panel.enableSwipe('left');



     

     getSlider();

     getproduct();

  });


  $$(document).on('page:init', '.page[data-name="producto"]', function (e) {

  

    app7.preloader.show('blue');
    

    app7.request({
      url: 'http://localhost/teamclases/api/producto.php',
      data:{id:idproducto},
      method:'POST',
      crossDomain: true,
      success:function(data){
           
        app7.preloader.hide();

        var objson = JSON.parse(data);

        var product= "product";


        console.log(objson.data.titulo);


        $$('#titulo-product').html(objson.data.titulo);
        $$('#descripcion-product').html(objson.data.descripcion);
        $$('#precio-product').html(objson.data.precio);


        $$('#imagen1-product').html('<img src="images/trocar.jpg'+objson.data.imagen1+'" width="100%"/>');

                 
      
      },
      error:function(error){

        app7.preloader.hide();
      
      }
      
      });

    

      


});





function getSlider(){

      app7.preloader.show('blue');


      app7.request({
        url: 'http://localhost/teamclases/api/slider.php',
        data:{},
        method:'POST',
        crossDomain: true,
        success:function(data){
             
          app7.preloader.hide();
  
          var objson = JSON.parse(data);

          var slider= "";

          var swiper = app7.swiper.get('.swiper-container');
          swiper.removeAllSlides();

          for(x in objson.data){
                
               


               var slide ='<div class="swiper-slide"><img src="'+objson.data[x].imagen+'" /></div>';

               swiper.appendSlide(slide);

          }
  
          
        
        },
        error:function(error){
  
          app7.preloader.hide();
        
        }
        
        });




}



function showMenu(){

  

  app7.panel.open('left', true);

}


function getproduct(){


  app7.preloader.show();


  $$('#product').html("");


      app7.request({
        url: 'http://localhost/teamclases/api/product.php',
        data:{},
        method:'POST',
        crossDomain: true,
        success:function(data){
             
          app7.preloader.hide();
  
          var objson = JSON.parse(data);

          var product= "";

         

          for(x in objson.data){
                
                console.log(objson.data[x].titulo);



                product =' <div class="card demo-card-header-pic"><div style="background-image:url('+objson.data[x].imagen1+')" class="card-header align-items-flex-end">'+objson.data[x].titulo+'</div><div class="card-content card-content-padding"><p class="date">Posted on January 21, 2015</p><p>'+objson.data[x].titulo+'</p></div><div class="card-footer"><a href="#" class="link">'+objson.data[x].precio+'</a><a href="javascript:verinmueble('+objson.data[x].id+')" class="link">Ver más</a></div></div>';

                $$('#product').append(product);

          }
  
          
        
        },
        error:function(error){
  
          app7.preloader.hide();
        
        }
        
        });


}



function ver main(id){

      //alert(id);


      idmain = id;

      mainView.router.navigate('/main/',{animate:true});

      
      $$('img.lazy').trigger('lazy');
      $$('div.lazy').trigger('lazy');
}








function cambiaVista(){

  
}


  
