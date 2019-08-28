import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatMenuModule } from "@angular/material/menu";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTooltipModule } from "@angular/material/tooltip";
import { ResumeComponent } from './resume/resume.component';
import { ResumeModule } from './resume/resume.module';
import { ConnectComponent } from './connect/connect.component';
import { ThemeSelectorComponent } from './theme-selector/theme-selector.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { ThemeControlService } from './services/theme-control.service';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'resume', component: ResumeComponent },
  { path: 'connect', component: ConnectComponent },
  { path: 'home', component: ConnectComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ConnectComponent,
    ThemeSelectorComponent,
    HeaderBarComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
    BrowserAnimationsModule,
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
    ResumeModule
  ],
  providers: [ThemeControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
