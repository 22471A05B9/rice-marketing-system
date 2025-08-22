import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { BusinessesComponent } from './businesses/businesses.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { SettingsComponent } from './settings/settings.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { UserService } from './user.service';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { RegisterComponent } from './register/register.component';
import { DetailsComponent } from './details/details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PaddysComponent } from './paddys/paddys.component';
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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BusinessesComponent,
    ContactComponent,
  AboutComponent,
    LoginComponent,
    ImageSliderComponent,
  
    DetailsComponent,
    SearchResultsComponent,
  SettingsComponent,
   PaddysComponent,
    ImageSliderComponent,
    RegisterComponent,
    PaddysComponent,
    ElevatorComponent,
    ColorComponent,
    DumpComponent,
    UseComponent,
    GradingComponent,
    PrecleaningComponent,
    PostcleaningComponent,
    SeperatorComponent,
    DischargerComponent,
    FaqComponent,
    FarmerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule  // Include HttpClientModule here
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
