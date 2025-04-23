import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BgParallaxComponent } from './components/bg-parallax/bg-parallax.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BgParallaxComponent], // Importación del componente parallax
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CodeAndConnect';
}
