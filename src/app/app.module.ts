import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdditionalServicesComponent } from './additional-services/additional-services.component';
import { RentalConditionsComponent } from './rental-conditions/rental-conditions.component';
import { CustomerServiceComponent } from './customer-service/customer-service.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CommonModule } from '@angular/common';
import { VehicleComponent } from './booking/vehicle/vehicle.component';
import { FormatPipe } from './booking/vehicle/format.pipe';
import { CustomerCreateComponent } from './booking/vehicle/customer-create/customer-create.component';
import { BillComponent } from './booking/vehicle/bill/bill.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContactComponent,
    HomeComponent,
    FooterComponent,
    BookingComponent,
    AdditionalServicesComponent,
    RentalConditionsComponent,
    CustomerServiceComponent,
    LoginComponent, 
    SignUpComponent,
    VehicleComponent,
    FormatPipe,
    CustomerCreateComponent,
    BillComponent
  ],
  imports: [BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
