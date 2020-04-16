import { Component } from '@angular/core';
import { NgxCloudScriptureService, DailyVerse, DailyReading } from 'ngx-cloud-scripture';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private cloudScriptureService: NgxCloudScriptureService,
              private popup: MatSnackBar) {

  }

  public getDailyVerse() {
    // The version defaults to 'KJV' if none is given.
    // Currently only 'KJV' and 'NKJV' are supported.
    this.cloudScriptureService.getDailyVerse('NKJV').subscribe((dailyVerse: DailyVerse) => {
      console.log(dailyVerse);
      this.popup.open('Verse output to console!', 'Dismiss', {duration: 4000});
    }, (error) => {
      this.popup.open('Error getting verse!', 'Dismiss', {duration: 4000});
    });
}

 public getDailyReading() {
    // The version defaults to 'KJV' if none is given.
    // Currently only 'KJV' and 'NKJV' are supported.
    this.cloudScriptureService.getDailyReading('NKJV').subscribe((dailyReadings: DailyReading[]) => {
      console.log(dailyReadings);
      this.popup.open('Readings output to console!', 'Dismiss', {duration: 4000});
    }, (error) => {
      this.popup.open('Error getting readings!', 'Dismiss', {duration: 4000});
    });
  }
}
