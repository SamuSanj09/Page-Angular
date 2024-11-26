import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Importa los componentes para las rutas
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)], // Configuración de las rutas
    exports: [RouterModule], 
})
export class AppRoutingModule { }
