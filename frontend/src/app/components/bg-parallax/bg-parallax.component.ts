import { Component, AfterViewInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-bg-parallax',
  templateUrl: './bg-parallax.component.html',
  styleUrls: ['./bg-parallax.component.css']
})
export class BgParallaxComponent implements AfterViewInit {

  constructor(private el: ElementRef) {}

  ngAfterViewInit(): void {
    // Verificamos que estamos en el cliente (navegador)
    if (typeof window !== 'undefined') {
      const seccion = this.el.nativeElement.querySelector('.parallax');

      const scrollParallax = () => {
        const recorrido = window.scrollY;
        const limite = seccion.offsetTop + seccion.offsetHeight;

        if (recorrido > seccion.offsetTop - window.outerHeight && recorrido <= limite) {
          seccion.style.backgroundPositionY = ((recorrido - seccion.offsetTop) / 1.5) + 'px';
        } else {
          seccion.style.backgroundPositionY = '0';
        }
      };

      window.addEventListener('scroll', scrollParallax);
    }
  }
}
