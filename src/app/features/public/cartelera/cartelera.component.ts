import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export interface Pelicula {
  id: number;
  nombre: string;
  sinopsis: string;
  genero: string;
  duracion: number; //en minutos
  clasificacion: string;
  imagen: string;
  horarios: string[];
  esTopVentas: boolean;
  esEstreno: boolean;
}

@Component({
  selector: 'app-cartelera',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: 'cartelera.component.html',
  styleUrls: ['cartelera.component.css'],
})
export class CarteleraComponent {
  //cartelera mockup hardcodeada para pruebas

  peliculas = signal<Pelicula[]>([
    {
      id: 1,
      nombre: 'Jurassic Park',
      genero: 'Ciencia ficción, acción',
      duracion: 120,
      clasificacion: '+13',
      sinopsis:
        'Dinosaurios clonados vuelven a la vida en un parque temático, pero las cosas se complican cuando los animales escapan.',
      imagen:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0c9zfNoH2DrPe4sW1Kz2b4Y7dv1bfxeMvPKrAOQaKLw&s=10',
      horarios: ['14:00', '17:30', '21:00'],
      esTopVentas: true,
      esEstreno: false,
    },
    {
      id: 2,
      nombre: 'Pelicula de prueba 2',
      genero: 'Comedia',
      duracion: 95,
      clasificacion: 'ATP',
      sinopsis: 'Una comedia familiar que te hará llorar de risa.',
      imagen:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY-U5b2IpP_RxWDoYfQiPOj3qDeKQUwvDt_8VyTMkkZw&s=10',
      horarios: ['15:15', '19:00'],
      esTopVentas: true,
      esEstreno: false,
    },
    {
      id: 3,
      nombre: '??',
      genero: 'Suspenso',
      duracion: 110,
      clasificacion: '+18',
      sinopsis: 'Nadie sabe qué se esconde en la oscuridad.',
      imagen:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA9BNXFPiODbahqhQV3J2N6E415JR1S8AdJ67F3WqKfw&s=10',
      horarios: ['22:30', '23:45'],
      esTopVentas: false,
      esEstreno: true,
    },
  ]);

  terminoBusqueda = signal('');
  generoFiltro = signal('');

  peliculasFiltradas = computed(() => {
    const termino = this.terminoBusqueda().toLowerCase();
    const genero = this.generoFiltro();

    return this.peliculas().filter((pelicula) => {
      const coincideNombre = pelicula.nombre.toLowerCase().includes(termino);
      const coincideGenero = genero === '' || pelicula.genero === genero;

      return coincideNombre && coincideGenero && !pelicula.esEstreno;
    });
  });

  peliculasTop = computed(() => this.peliculas().filter((p) => p.esTopVentas && !p.esEstreno));
  proximosEstrenos = computed(() => this.peliculas().filter((p) => p.esEstreno));
}
