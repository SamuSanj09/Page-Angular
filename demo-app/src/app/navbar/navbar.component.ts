import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';  // Asegúrate de que RouterModule esté importado
import { FormsModule } from '@angular/forms';  // Agregar FormsModule

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, FormsModule],  // Incluir FormsModule aquí
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  searchQuery: string = '';  // Definimos la variable para almacenar la búsqueda

  constructor(private router: Router) {}

  onSearch(event: Event): void {
    event.preventDefault(); // Previene la recarga de la página al enviar el formulario

    if (this.searchQuery.trim()) {
      console.log('Búsqueda realizada:', this.searchQuery);

      // Intentamos encontrar una sección con el ID especificado
      const targetId = this.searchQuery.toLowerCase();

      // Comprobamos si estamos buscando en la página actual
      const section = document.getElementById(targetId);
      
      if (section) {
        // Si la sección está en la misma página, hacemos scroll hacia ella
        section.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Si la sección no está en la página actual, intentamos navegar a la ruta correspondiente
        this.router.navigate([`/${targetId}`]).then(() => {
          // Luego de navegar, buscamos el elemento en la nueva ruta
          setTimeout(() => {
            const sectionAfterNavigation = document.getElementById(targetId);
            if (sectionAfterNavigation) {
              sectionAfterNavigation.scrollIntoView({ behavior: 'smooth' });
            }
          }, 1000);  
        });
      }
    }
  }
}
