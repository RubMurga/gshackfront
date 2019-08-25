import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UniqueTrackingComponent } from './unique-tracking/unique-tracking.component';


const routes: Routes = [
  {path: 'tracking/:id', component: UniqueTrackingComponent },
  {path: '', component: AppComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
