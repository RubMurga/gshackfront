import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UniqueTrackingComponent } from './unique-tracking/unique-tracking.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: 'tracking/:id', component: UniqueTrackingComponent },
  {path: '', component: DashboardComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
