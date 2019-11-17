
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FileUploader, FileSelectDirective } from 'ng2-file-upload';
import { AuthService } from '../../../../auth/auth.service';

@Component({
  selector: 'app-form-layouts',
  templateUrl: './form-layouts.component.html',
  styleUrls: ['./form-layouts.component.scss']
})
export class FormLayoutsComponent implements OnInit {

  @ViewChild('fileInput', {static: false}) fileInput: ElementRef;

  uploader: FileUploader;
  isDropOver: boolean;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    const headers = [
      {name: 'Accept', value: 'application/json'},
      {name: 'Authorization', value: this.authService.getToken()}
    ];
    // tslint:disable-next-line:object-literal-shorthand
    this.uploader = new FileUploader({url: 'http://localhost:9090/upload/files', autoUpload: true, headers: headers});

    this.uploader.onCompleteAll = () => alert('File uploaded');
  }

  fileOverAnother(e: any): void {
    this.isDropOver = e;
  }

  fileClicked() {
    this.fileInput.nativeElement.click();
  }

}
