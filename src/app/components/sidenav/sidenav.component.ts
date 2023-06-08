import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import { InputClearableExample } from '../input/input.component';
import { FileLoaderService } from 'src/app/services/file-loader/file-loader.service';

/**
 * @title Autosize sidenav
 */
@Component({
  selector: 'sidenav-autosize-example',
  templateUrl: 'sidenav.component.html',
  styleUrls: ['sidenav.component.scss'],
  standalone: true,
  imports: [
    MatSidenavModule,
    NgIf,
    MatButtonModule,
    InputClearableExample
  ],
})
export class SidenavAutosizeExample {
  public showFiller = false;

  constructor (
    private fileLoader: FileLoaderService
  ) { }

  handleDrop() {
    event?.preventDefault();
    this.fileLoader.loadFile();
  }
}


/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */
