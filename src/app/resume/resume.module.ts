import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { EducationComponent } from './components/education/education.component';
import { EmploymentComponent } from './components/employment/employment.component';
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
import { SkillsComponent } from './components/skills/skills.component';
import { ConnectComponent } from './components/connect/connect.component'
import { HttpClientModule } from '@angular/common/http';
import { ProjectsComponent } from './components/projects/projects.component';
import { ThemeSelectorComponent } from './components/theme-selector/theme-selector.component';
import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { JsonImportService } from './services/json-import.service';
import { ThemeControlService } from './services/theme-control.service';

import { NgModule } from '@angular/core';
import { ResumeComponent } from './resume.component';

@NgModule({
  declarations: [
    EducationComponent,
    EmploymentComponent,
    SkillsComponent,
    ConnectComponent,
    ProjectsComponent,
    ThemeSelectorComponent,
    HeaderBarComponent,
    ResumeComponent
  ],
  imports: [
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
    HttpClientModule,
    MatMenuModule
  ],
  providers: [ JsonImportService, ThemeControlService ],
  bootstrap: [],
})
export class ResumeModule { }
