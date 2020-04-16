import { InjectionToken } from '@angular/core';

export class CloudScriptureConfig {
    apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }
}

export const CLOUD_SCRIPTURE_CONFIG = new InjectionToken<CloudScriptureConfig>('CLOUD_SCRIPTURE_CONFIG');

export class DailyVerse {
    public book?: string;
    public chapter?: number;
    public copyright?: string;
    public formatted?: string;
    public text?: string;
    public verse?: number;
    public version?: string;

    constructor(dailyVerse?: any) {
        this.book = (dailyVerse && dailyVerse.book) ? dailyVerse.book : undefined;
        this.chapter = (dailyVerse && dailyVerse.chapter) ? dailyVerse.chapter : null;
        this.copyright = (dailyVerse && dailyVerse.copyright) ? dailyVerse.copyright : undefined;
        this.formatted = (dailyVerse && dailyVerse.formatted) ? dailyVerse.formatted : undefined;
        this.text = (dailyVerse && dailyVerse.text) ? dailyVerse.text : undefined;
        this.verse = (dailyVerse && dailyVerse.verse) ? dailyVerse.verse : null;
        this.version = (dailyVerse && dailyVerse.version) ? dailyVerse.version : undefined;
    }
}

export class DailyReading {
    public copyright?: string;
    public passage?: string;
    public verses?: Verse[];
    public version?: string;

    constructor(dailyVerse?: any) {
        this.copyright = (dailyVerse && dailyVerse.copyright) ? dailyVerse.copyright : undefined;
        this.passage = (dailyVerse && dailyVerse.passage) ? dailyVerse.passage : undefined;
        this.verses = (dailyVerse && dailyVerse.verses) ? dailyVerse.verses.map((v: any) => new Verse(v)) : undefined;
        this.version = (dailyVerse && dailyVerse.version) ? dailyVerse.version : undefined;
    }
}

export class Verse {
    public book?: string;
    public chapter?: number;
    public formatted?: string;
    public text?: string;
    public verse?: number;

    constructor(dailyVerse?: any) {
        this.book = (dailyVerse && dailyVerse.book) ? dailyVerse.book : undefined;
        this.chapter = (dailyVerse && dailyVerse.chapter) ? dailyVerse.chapter : null;
        this.formatted = (dailyVerse && dailyVerse.formatted) ? dailyVerse.formatted : undefined;
        this.text = (dailyVerse && dailyVerse.text) ? dailyVerse.text : undefined;
        this.verse = (dailyVerse && dailyVerse.verse) ? dailyVerse.verse : null;
    }
}

