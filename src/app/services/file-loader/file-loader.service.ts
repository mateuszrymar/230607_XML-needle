import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileLoaderService {

  public isFileLoaded = false;

  constructor() { }

  loadFile() {
    console.log('File was dropped.');
  }
}
