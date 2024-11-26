import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Añade esta importación

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
   {path: '', component: HomeComponent},
   {path:'about', component: AboutComponent},
   {path:'contact', component: ContactComponent}
];

export const appConfig: ApplicationConfig = {
   providers: [
     provideZoneChangeDetection({ eventCoalescing: true }), 
     provideRouter(routes),
     provideHttpClient() // Añade este proveedor
   ]
};