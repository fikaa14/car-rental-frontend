import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdditionalServicesComponent } from './additional-services/additional-services.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { HomeComponent } from './home/home.component';
import { RentalConditionsComponent } from './rental-conditions/rental-conditions.component';

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
    component: BookingComponent
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
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
