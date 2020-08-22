import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SlotsComponent } from './dashboard/slots/slots.component';
import { BookingsComponent } from './dashboard/bookings/bookings.component';
import { BookslotComponent } from './dashboard/bookslot/bookslot.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AddLocationComponent } from './admin/admin-dashboard/add-location/add-location.component';
import { AddSlotComponent } from './admin/admin-dashboard/add-slot/add-slot.component';
import { AllbookingsComponent } from './admin/admin-dashboard/allbookings/allbookings.component';
import { AddVehicleComponent } from './admin/admin-dashboard/add-vehicle/add-vehicle.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'dashboard',component:DashboardComponent,
  children:[
    {path:'',component:SlotsComponent},
    {path:'bookings',component:BookingsComponent},
    {path:'bookslot/:locationid',component:BookslotComponent}
  ]},
  {path:'admin',component: AdminComponent,
  children:[
    {path:'',component:AdminLoginComponent}
  ]},
  {path:'admin-dashboard',component: AdminDashboardComponent,
  children:[
    {path:'',component: AddLocationComponent},
    {path:'add-slot', component: AddSlotComponent},
    {path:'allbookings', component: AllbookingsComponent},
    {path: 'add-vehicle', component: AddVehicleComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
