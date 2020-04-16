import { Injectable, Inject } from '@angular/core';
import { CloudScriptureConfig, DailyVerse, DailyReading } from './interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NgxCloudScriptureService {

  private apiKey: string;

  constructor(@Inject('config') config: CloudScriptureConfig, private http: HttpClient) {
    this.apiKey = config.apiKey;
  }

  getDailyVerse(version: string = 'KJV'): Observable<DailyVerse> {
    return this.http.get<DailyVerse>(`https://cloudscripture.com/api/daily/verse/${version}?apiKey=${this.apiKey}`);
  }

  getDailyReading(version: string = 'KJV'): Observable<DailyReading[]> {
    return this.http.get<DailyReading[]>(`https://cloudscripture.com/api/daily/reading/${version}?apiKey=${this.apiKey}`);
  }
}
