(function(){
// Objeto con las propiedades del efecto Lightbox
var propLightbox = {
    imgContainer: document.getElementsByClassName('lightbox'),
    imagen: null,
    imagenSrc: null,
    cuerpoDom: document.getElementsByTagName('body')[0],
    lightbox_container: null,
    modal: null,
    cerrar_modal: null,
    animacion: 'fade' 
}

// Objeto con los métodos del efecto Lightbox
var metLightbox = {
    inicio: function() {
        for (var i = 0; i < propLightbox.imgContainer.length; i++) {
            propLightbox.imgContainer[i].addEventListener('click', metLightbox.capturaImagen);
        }
    },
    capturaImagen: function() {
        propLightbox.imagen = this;
        metLightbox.lightbox(propLightbox.imagen);
    },

    lightbox: function(imagen) {
        propLightbox.imagenSrc = window.getComputedStyle(imagen, null).backgroundImage.slice(5, -2);

        // Crear y configurar el contenedor lightbox
        propLightbox.lightbox_container = document.createElement('DIV');
        propLightbox.lightbox_container.setAttribute('id', 'lightbox_container');
        propLightbox.cuerpoDom.appendChild(propLightbox.lightbox_container);
        propLightbox.lightbox_container.style.width = '100%';
        propLightbox.lightbox_container.style.height = '100%';
        propLightbox.lightbox_container.style.position = 'fixed';
        propLightbox.lightbox_container.style.zIndex = '1000';
        propLightbox.lightbox_container.style.background = 'rgba(0,0,0,0.8)';
        propLightbox.lightbox_container.style.top = '0';
        propLightbox.lightbox_container.style.left = '0';
        propLightbox.lightbox_container.appendChild(document.createElement('DIV')).setAttribute('id', 'modal');
        propLightbox.modal = document.getElementById('modal');
        propLightbox.modal.style.height = '100%';
        propLightbox.modal.appendChild(document.createElement('img')).setAttribute('src',propLightbox.imagenSrc);
        propLightbox.modal.getElementsByTagName('img')[0].setAttribute('class', 'imagen-modal');
        if (propLightbox.animacion == 'fade') {
            document.getElementsByClassName('imagen-modal')[0].style.opacity = 0;
            setTimeout(function(){
                document.getElementsByClassName('imagen-modal')[0].style.opacity = 1;
            }, 100);
        }


        propLightbox.modal.innerHTML += '<i id="cerrar_modal" class="fa fa-times" aria-hidden="true"></i>';
        propLightbox.cerrarModal = document.getElementById('cerrar_modal');
        propLightbox.cerrarModal.addEventListener('click', metLightbox.cerrarModal)

    },

    cerrarModal: function(){
        propLightbox.cuerpoDom.removeChild(propLightbox.lightbox_container);

    }
}

metLightbox.inicio();



}())

