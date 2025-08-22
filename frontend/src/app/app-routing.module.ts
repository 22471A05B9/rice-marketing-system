import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaddysComponent } from './paddys/paddys.component';
import { HomeComponent } from './home/home.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DetailsComponent } from './details/details.component';
import { SettingsComponent } from './settings/settings.component';
import { ElevatorComponent } from './elevator/elevator.component';
import { ColorComponent } from './color/color.component';
import { DumpComponent } from './dump/dump.component';
import { UseComponent } from './use/use.component';
import { GradingComponent } from './grading/grading.component';
import { PrecleaningComponent } from './precleaning/precleaning.component';
import { PostcleaningComponent } from './postcleaning/postcleaning.component';
import { SeperatorComponent } from './seperator/seperator.component';
import { DischargerComponent } from './discharger/discharger.component';
import { FaqComponent } from './faq/faq.component';
import { FarmerComponent } from './farmer/farmer.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'use', component: UseComponent },
  { path: 'paddys', component: PaddysComponent },
  { path: 'grading', component: GradingComponent },
  { path: 'farmer', component: FarmerComponent },
  { path: 'precleaning', component:PrecleaningComponent },
  { path: 'postcleaning', component:PostcleaningComponent },
  { path: 'seperator', component: SeperatorComponent },
  { path: 'discharger', component:DischargerComponent},
  { path: 'color', component: ColorComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'dump', component: DumpComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'businesses', component: BusinessesComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'settings', component: SettingsComponent},
  { path: 'about', component: AboutComponent },
  { path: 'elevator', component: ElevatorComponent },
  { path: 'home', component: HomeComponent },
  { path: 'image-slider', component: ImageSliderComponent },
  { path: 'details', component: DetailsComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default route to login
  { path: '**', redirectTo: '/login' } // Wildcard route for 404 Not Found
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
