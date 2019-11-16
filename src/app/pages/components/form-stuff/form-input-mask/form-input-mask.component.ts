import { Component, OnInit } from '@angular/core';
import { WebSocketService } from 'src/app/shared/services/websocket.service';

@Component({
  selector: 'app-form-input-mask',
  templateUrl: './form-input-mask.component.html',
  styleUrls: ['./form-input-mask.component.scss']
})
export class FormInputMaskComponent {

  public notifications = 0;

  constructor(private webSocketService: WebSocketService) {

      const stompClient = this.webSocketService.connect();

      stompClient.connect({}, frame => {

          stompClient.subscribe('/topic/notification', notifications => {

              this.notifications = JSON.parse(notifications.body).count;

          });

      });
  }

}
