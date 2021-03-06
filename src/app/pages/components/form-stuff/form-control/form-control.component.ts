import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-form-control',
  templateUrl: './form-control.component.html',
  styleUrls: ['./form-control.component.scss']
})
export class FormControlComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
  }


  testApi() {
    return this.httpClient
    .get(`http://localhost:9090/api/test`,
        {responseType: 'text'})
        .subscribe(
          res => {
            console.log('Success ' + res);
          },
          error => {
            console.log('Error ' + error);
          }
      );
  }

  testApi2() {
    return this.httpClient
    .get(`http://localhost:9090/api2/test`,
        {responseType: 'text'})
        .subscribe(
          res => {
            console.log('Success ' + res);
          },
          error => {
            console.log('Error ' + error);
          }
      );
  }

}
