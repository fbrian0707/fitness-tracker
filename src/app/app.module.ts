import { MapService } from './_services/map.service';
import { ActivityService } from './_services/activity.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { ActivityListComponent } from './activity-list/activity-list.component';


const ROUTE: Routes = [
  {path: 'activities' , component: ActivityListComponent },
  {path: 'activities/:id' , component: MapComponent },
  {path: '' , redirectTo: '/activities', pathMatch: 'full' },
];

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ActivityListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTE)
  ],
  providers: [ActivityService, MapService],
  bootstrap: [AppComponent]
})
export class AppModule { }
