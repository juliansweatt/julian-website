import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss',
    './connect.component.color-bars.scss',
    './connect.component.solar-system.scss',
    './connect.component.themes.scss']
})
export class ConnectComponent implements OnInit {

  public themes = [
    "christmas", 
    "halloween", 
    "independence", 
    "monochrome_dark", 
    "monochrome_light", 
    "pride", 
    "valentine"
  ];

  private defaultTheme = "pride";

  public currentTheme = this.defaultTheme;
  private themedElement;

  public constructor() {
  }

  public ngOnInit() {
    this.initialize();
  } 

  public setTheme(newTheme)
  {
    this.currentTheme = newTheme;
    this.themedElement.className = newTheme;
  }

  private initialize()
  {
    let d = new Date()
    let currentMonth = d.getMonth();
    let currentDate = d.getDate();
    
    this.themedElement = document.getElementById("css-theme-control");

    let assignedByDate = false;

    /***** Theme Months *****/
    if(currentMonth == 0)
    {
        if(currentDate == 1)
        {
            /* New Years */
            this.setTheme("monochrome_light");
            assignedByDate = true;
        }
    }
    else if(currentMonth == 1)
    {
        if(currentDate <= 14)
        {
            /* Valentine's Day */
            this.setTheme("valentine");
            assignedByDate = true;
        }
    }
    else if(currentMonth == 5)
    {
        /* LGBT Pride */
        this.setTheme("pride");
        assignedByDate = true;
    }
    else if(currentMonth == 6)
    {
        if(currentDate == 4)
        {
            /* Independence Day */
            this.setTheme("independence");
            assignedByDate = true;
        }
    }
    else if(currentMonth == 9)
    {
        /* Halloween */
        this.setTheme("halloween");
        assignedByDate = true;
    }
    else if(currentMonth==11)
    {
        if(currentDate <= 25)
        {
            /* Christmas */
            this.setTheme("christmas");
            assignedByDate = true;
        }
        else if(currentDate == 31)
        {
            /* New Years */
            this.setTheme("monochrome_light");
            assignedByDate = true;
        }
    }
    if(assignedByDate != true) {
      /* Default */
      this.setTheme(this.defaultTheme);
    }
  }

  public nextTheme()
  {
    console.log("Next Theme");
    let currentIndex = this.themes.indexOf(this.currentTheme);

    if( currentIndex < this.themes.length-1 )
    {
      this.setTheme(this.themes[currentIndex+1]);
    }
    else
    {
      this.setTheme(this.themes[0]);
    }
  }
}