import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { FormsModule } from '@angular/forms';  // Agregar esto
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-root',
  standalone: true,

  imports: [RouterOutlet, NavbarComponent, CommonModule, 
              RouterLink, RouterLinkActive, FooterComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'demo-app';
}
