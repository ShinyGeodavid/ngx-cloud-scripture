# NgxCloudScripture

## Install

`npm install ngx-cloud-scripture --save`

## Get API Key

Navigate to `https://cloudscripture.com/developer` and click `Get Started` to create an account.

Once you create an account, you will be redirected back to the developer page.

The `Get Started` button will now be replaced by your API Key.

For this example, we will use the fake key `ABCDEFG-HIJKLMN-OPQRSTU-VWXYZZZ`

## Import

```
import { NgModule } from '@angular/core';
import { NgxCloudScriptureModule } from 'ngx-cloud-scripture';

@NgModule({
    imports: [
        NgxCloudScriptureModule.forRoot({apiKey: 'ABCDEFG-HIJKLMN-OPQRSTU-VWXYZZZ'})
    ],
})
export class AppModule { }
```

## Usage

```
import { Component } from '@angular/core';
import { NgxCloudScriptureService, DailyVerse, DailyReading } from 'ngx-cloud-scripture';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    constructor(private cloudScriptureService: NgxCloudScriptureService) {

    }

    public getDailyVerse() {
        // The version defaults to 'KJV' if none is given.
        // Currently only 'KJV' and 'NKJV' are supported.
        this.cloudScriptureService.getDailyVerse('NKJV').subscribe((dailyVerse: DailyVerse) => {
            console.log(dailyVerse);
        });
    }

     public getDailyReading() {
        // The version defaults to 'KJV' if none is given.
        // Currently only 'KJV' and 'NKJV' are supported.
        this.cloudScriptureService.getDailyReading('NKJV').subscribe((dailyReadings: DailyReading[]) => {
            console.log(dailyReadings);
        });
    }

}
```

## Classes

##### DailyVerse

| Property  | Description                                               | Data Type |
|-----------|-----------------------------------------------------------|-----------|
| book      | Book of the Bible that the verse resides in.              |    string |
| chapter   | Chapter of the book that the verse resides in.            |    number |
| copyright | Details of the Bible version's copyright (if applicable). |    string |
| formatted | Formatted verse for citing. Ex: "John 3:16"               |    string |
| text      | The text content of the verse.                            |    string |
| verse     | The number reference of the verse.                        |    number |
| version   | The requested Bible version abbreviation.                 |    string |

##### DailyReading

| Property  | Description                                               | Data Type |
|-----------|-----------------------------------------------------------|-----------|
| copyright | Details of the Bible version's copyright (if applicable). |    string |
| passage   | Title of the reading passage. Ex: "1 Samuel 1-3"          |    string |
| verses    | Collection of all verses in the reading passage           |  Verse [] |
| version   | The requested Bible version abbreviation.                 |    string |

##### Verse

| Property  | Description                                               | Data Type |
|-----------|-----------------------------------------------------------|-----------|
| book      | Book of the Bible that the verse resides in.              |    string |
| chapter   | Chapter of the book that the verse resides in.            |    number |
| formatted | Formatted verse for citing. Ex: "John 3:16"               |    string |
| text      | The text content of the verse.                            |    string |
| verse     | The number reference of the verse.                        |    number |

## Support

Have questions? Contact `support@swanscript.net`

Submit bugs to `https://github.com/ShinyGeodavid/ngx-cloud-scripture/issues`.