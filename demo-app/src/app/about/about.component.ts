import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  // Lista de valores de la empresa

  teamMembers = [
    { name: 'Juan Perez', role: 'Desarrollador Frontend', photo: 'assets/images/member1.jpg' },
    { name: 'Maria Lopez', role: 'Desarrolladora Backend', photo: 'assets/images/member2.jpg' },
    { name: 'Carlos Garcia', role: 'Diseñador UI/UX', photo: 'assets/images/member3.jpg' },
  ];

  valores = [
    { id: 1, title: 'Compromiso', description: 'Cumplimos con nuestros plazos y estándares de calidad.', show: false },
    { id: 2, title: 'Innovación', description: 'Siempre estamos en la búsqueda de nuevas tecnologías para mejorar.', show: false },
    { id: 3, title: 'Responsabilidad', description: 'Nos hacemos responsables por nuestros proyectos y su impacto.', show: false },
    { id: 4, title: 'Sinceridad', description: 'Nos hacemos responsables por nuestros proyectos y su impacto.', show: false },
    { id: 5, title: 'Amor', description: 'Nos hacemos responsables por nuestros proyectos y su impacto.', show: false }


  ];

  constructor() {}

  ngOnInit(): void {}

  // Método para alternar la visibilidad de la descripción de un valor
  toggleValue(id: number): void {
    const valor = this.valores.find(v => v.id === id);
    if (valor) {
      valor.show = !valor.show;
    }
  }
}
