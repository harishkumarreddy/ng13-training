import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'contact', component: ContactComponent},

  // Lazy loading
  { path: 'products', 
    loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule) },
  { path: 'students',
    loadChildren: () => import('./modules/students/students.module').then(m => m.StudentsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
