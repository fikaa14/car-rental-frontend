import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionalServicesComponent } from './additional-services/additional-services.component';
import { BookingComponent } from './booking/booking.component';
import { VehicleComponent } from './booking/vehicle/vehicle.component';
import { VehicleResolver } from './booking/vehicle/vehicle.resolver';
import { ContactComponent } from './contact/contact.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RentalConditionsComponent } from './rental-conditions/rental-conditions.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'book-now',
    component: BookingComponent,
  },
  { 
    path: 'vehicle/:id', 
    component: VehicleComponent, 
    resolve: {param1: VehicleResolver} 
  },
  {
    path: 'additional-services',
    component: AdditionalServicesComponent
  },
  {
    path: 'rental-conditions',
    component: RentalConditionsComponent
  },
  {
    path: 'customer-service',
    component: CustomerServiceComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'sign-up/login',
    redirectTo: 'login'
  },
  {
    path: 'login/sign-up',
    redirectTo: 'sign-up'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
