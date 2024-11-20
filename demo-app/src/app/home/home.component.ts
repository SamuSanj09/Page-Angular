import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Asegúrate de importar CommonModule

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  // Arreglo de testimonios
  testimonios = [
    { text: "Excelente trabajo, la construcción de mi casa fue muy rápida y con materiales de calidad.", 
      author: "Carlos López" },
    { text: "Estoy muy satisfecho con los resultados. El equipo fue muy profesional y cumplió todos los plazos.", 
      author: "Ana García" },
    { text: "Recomiendo ampliamente los servicios de esta constructora, siempre atentos a mis necesidades.", 
      author: "Luis Pérez" }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
