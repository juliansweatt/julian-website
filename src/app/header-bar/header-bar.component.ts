import { Component, OnInit } from '@angular/core';
import { ThemeControlService } from '../services/theme-control.service';

@Component({
  selector: 'header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  currentTheme:string = null;

  constructor(public themeService: ThemeControlService) {
    this.themeService.currentTheme.subscribe(currentTheme =>{
      this.currentTheme = currentTheme.valueOf();
    });
  }

  ngOnInit() {
  }
}
