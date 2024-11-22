import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { FormsModule } from '@angular/forms';  // Agregar esto
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, FormsModule] ,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'

})
export class NavbarComponent {
  searchQuery: string = ''; // Definir la variable para almacenar la búsqueda

  onSearch(): void {
    if (this.searchQuery.trim()) {
      console.log('Búsqueda realizada:', this.searchQuery);
    }
  }
}