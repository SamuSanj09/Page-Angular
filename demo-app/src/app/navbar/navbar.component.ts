import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import Fuse from 'fuse.js';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchQuery: string = '';

  // Mapa de palabras clave a rutas y secciones
  private routesMap =
  [
    { key: 'home', route: '', section: '' },
    { key: 'welcome', route: '/', section: 'welcome' },
    { key: 'obras', route: '/', section: 'obras' },
    { key: 'testimonios', route: '/', section: 'testimonios' },
    { key: 'about', route: 'about', section: '' },
    { key: 'equipo', route: 'about', section: 'equipo' },
    { key: 'mision', route: 'about', section: 'mision' },
    { key: 'contact', route: 'contact', section: '' },
    { key: 'contactos', route: 'contact', section: 'contactos' },
    { key: 'oficinas', route: 'contact', section: 'oficinas' }
  ];

  // Configuración de Fuse.js para búsqueda difusa
  private fuse = new Fuse(this.routesMap, {
    keys: ['key'], 
    threshold: 0.4, 
  });

  constructor(private router: Router) {}

  onSearch(event: Event): void {
    event.preventDefault(); // Evita el envío del formulario

    const results = this.fuse.search(this.searchQuery.trim().toLowerCase());
    if (results.length > 0) {
      const { route, section } = results[0].item;

      // Navegar a la ruta, si es necesario
      this.router.navigate([route]).then(() => {
        if (section) {
          setTimeout(() => this.scrollToSection(section), 500);
        }
      })
    } else {
      alert(`No se encontró ninguna coincidencia para "${this.searchQuery}".`);
    }
  }

  private scrollToSection(id: string): void {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`No se encontró la sección con ID: ${id}`);
      alert(`La sección "${id}" no existe.`);
    }
  }

  private handleNavigationError(err: any, query: string): void {
    console.error('Error al navegar:', err);
    alert(`No se pudo navegar a la sección o ruta correspondiente a "${query}".`);
  }
}
