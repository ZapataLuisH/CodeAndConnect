//Propiedades de Menu Movil
var propMenu = {
    burguer_menu: document.getElementById('burger_menu'),
    slideMenu: document.getElementById('slideMenu'),
    menu_activo: false,
    elem_menu: document.querySelectorAll('#slideMenu .menu-principal a')
}

//metodos de Menu Movil
var metMenu = {
    inicio: function(){
        propMenu.burguer_menu.addEventListener('click', metMenu.toggleMenu);
        // Corrección: Inicializa 'i' en 0
        for (var i = 0; i < propMenu.elem_menu.length; i++) {
            propMenu.elem_menu[i].addEventListener('click', metMenu.ocultarMenu);
        }
    },
    toggleMenu: function(){
        if (propMenu.menu_activo == false) {
            propMenu.menu_activo = true;
            propMenu.slideMenu.className += ' active';
        } else {
            propMenu.menu_activo = false;
            propMenu.slideMenu.className = propMenu.slideMenu.className.replace(' active', '');
        }
    },
    ocultarMenu: function(){
        propMenu.menu_activo = false;
        propMenu.slideMenu.className = propMenu.slideMenu.className.replace(' active', '');
    }
}

metMenu.inicio();
