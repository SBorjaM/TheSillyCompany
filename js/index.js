$(function(){
	var header = document.getElementById('header');
	var headroom = new Headroom(header);
	headroom.init();

	//Menú Responsive
	//
	var ancho = $(window).width(),
		enlaces = $('#enlaces'),
		btnmenu = $('#btn-menu'),
		icono = $('#btn-menu .icono');
	if (ancho < 700) {
		enlaces.hide();
		icono.addClass('fa-bars');
	}
	btnmenu.on('click', function(e){
		enlaces.slideToggle();
		icono.toggleClass('fa-bars');
		icono.toggleClass('fa-times');
	});
	$(window).on('resize', function(){
		if ($(this).width() > 700) {
			enlaces.show();
			icono.addClass('fa-times');
			icono.removeClass('fa-bars');
		}else{
			enlaces.hide();
			icono.addClass('fa-bars');
			icono.removeClass('fa-times');
		}
	});
    $(".slides").slidesjs({
    	start: 1,
    	play: {
      	active: true,
        // [boolean] Generate the play and stop buttons.
        // You cannot use your own buttons. Sorry.
      	effect: "fade",
        // [string] Can be either "slide" or "fade".
      	interval: 2000,
        // [number] Time spent on each slide in milliseconds.
      	auto: true,
        // [boolean] Start playing the slideshow on load.
      	swap: true,
        // [boolean] show/hide stop and play buttons
      	pauseOnHover: false,
        // [boolean] pause a playing slideshow on hover
      	restartDelay: 2500
        // [number] restart delay on inactive slideshow
    	}
  	});
    //Formulario
  	var inputs = document.getElementsByClassName('input');
	for (var i = 0; i < inputs.length; i++) {
  		inputs[i].addEventListener('keyup', function(){
    	if(this.value.length>=1) {
      	this.nextElementSibling.classList.add('fijar');
    	} 
    	else {
      	this.nextElementSibling.classList.remove('fijar');
    	}
  		});
	}
});
function validarCampos(){
        
        var nom = document.getElementById('nombres').value;
        if (nom == null || nom.length == 0 || /^\s+$/.test(nom) || !isNaN(nom)) {
        	alert('Por favor ingrese su Nombre correctamente')
        	return false;
        }
        
        var cor = document.getElementById("correo").value;
        if (!/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(cor)){
        	alert("La dirección de email " + cor + " es incorrecta");
   			return false;
  		  }	
        
        var tel = document.getElementById("telefono").value;
        if (tel == null || tel.length == 0 || /^\s+$/.test(tel)) {
        	alert('Por favor ingrese su Teléfono')
        	return false;
        }
        if(isNaN(tel)) {
        	alert('Por favor ingrese solo campos numericos en el campo telefono')
  			return false;
		    }	
        
        var mens = document.getElementById('mensaje').value;
        if (mens == null || mens.length == 0 || /^\s+$/.test(mens)) {
        	alert('Por favor ingrese su Mensaje')
        	return false;
        }

        return true;	
}


