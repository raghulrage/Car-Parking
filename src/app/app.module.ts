import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeMainSectionComponent } from './home-main-section/home-main-section.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { SlotsComponent } from './dashboard/slots/slots.component';
import { BookingsComponent } from './dashboard/bookings/bookings.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookslotComponent } from './dashboard/bookslot/bookslot.component';

import { AdminService} from './services/admin.service';
import { LocationsService } from './services/locations.service';
import { BookingsService } from './services/bookings.service';
import { VehicleService } from './services/vehicle.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderLoginComponent } from './header-login/header-login.component';
import { UsersService } from './services/users.service';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AddLocationComponent } from './admin/admin-dashboard/add-location/add-location.component';
import { AddSlotComponent } from './admin/admin-dashboard/add-slot/add-slot.component';
import { AllbookingsComponent } from './admin/admin-dashboard/allbookings/allbookings.component';
import { SlotsService } from './services/slots.service';
import { AddVehicleComponent } from './admin/admin-dashboard/add-vehicle/add-vehicle.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeMainSectionComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    SlotsComponent,
    BookingsComponent,
    DashboardComponent,
    BookslotComponent,
    HeaderLoginComponent,
    AdminComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AddLocationComponent,
    AddSlotComponent,
    AllbookingsComponent,
    AddVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [LocationsService, BookingsService, VehicleService, UsersService, SlotsService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
