import {Injectable} from '@angular/core';
import * as SockJs from 'sockjs-client';
import * as Stomp from 'stompjs';


@Injectable()
export class WebSocketService {

    constructor() { }

    connect() {
        const socket = new SockJs(`http://localhost:9090/notification/socket`);

        const stompClient = Stomp.over(socket);

        return stompClient;
    }
}
