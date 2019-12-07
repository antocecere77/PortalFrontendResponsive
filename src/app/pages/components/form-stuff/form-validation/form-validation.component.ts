import { Component, OnInit } from '@angular/core';

import * as fileSaver from 'file-saver'; // npm i --save file-saver
import { DownloadService } from 'src/app/shared/services/download.service';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})
export class FormValidationComponent implements OnInit {

  constructor(private downloadService: DownloadService) {
  }

  ngOnInit() {
  }

  fileSystemName: string;
  classpathFileName: string;

  downloadFileSystem() {
    this.downloadService.downloadFileSystem(this.fileSystemName)
      .subscribe(response => {
        const filename = response.headers.get('filename');

        this.saveFile(response.body, filename);
      });
  }

  downloadClasspathFile() {
    this.downloadService.downloadClasspathFile(this.classpathFileName)
      .subscribe(response => {
        const filename = response.headers.get('filename');

        this.saveFile(response.body, filename);
      });
  }

  saveFile(data: any, filename?: string) {
    const blob = new Blob([data], {type: 'text/csv; charset=utf-8'});
    fileSaver.saveAs(blob, filename);
  }

}
