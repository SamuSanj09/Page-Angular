import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

// Importa los componentes para las rutas
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";

const routes: Routes = [    
    { path: '', component: HomeComponent }, // Ruta principal
    { path: 'about', component: AboutComponent }, // Ruta "Acerca de"
    { path: 'contact', component: ContactComponent } // Ruta "Contacto"
];

@NgModule({
    imports: [RouterModule.forRoot(routes)], // Configuración de las rutas
    exports: [RouterModule], // Exporta el RouterModule para usarlo en otros módulos
})
export class AppRoutingModule { }
