import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { 
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatButtonModule,
  MatGridListModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatMenuModule,
 } from "@angular/material";
import { ResumeComponent } from './resume/resume.component';
import { ResumeModule } from './resume/resume.module';
import { ConnectComponent } from './connect/connect.component';

const appRoutes: Routes = [
  { path: 'resume', component: ResumeComponent },
  { path: 'connect', component: ConnectComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent,
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
    BrowserAnimationsModule,
    ResumeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
