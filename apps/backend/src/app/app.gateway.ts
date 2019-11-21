import {
  MessageBody, //
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
  WsResponse,
  OnGatewayConnection,
  OnGatewayDisconnect,

} from '@nestjs/websockets';
import { Logger } from '@nestjs/common';

import { Server, Client } from 'socket.io';
import { AppDataService } from './app-data.service';
import { Observable } from 'rxjs';
// import { PythonService } from './python.service';

@WebSocketGateway({ transports: ['websocket']})
export class AppGateway  {

  private readonly logger = new Logger(AppGateway.name, true);

  @WebSocketServer()
  server: Server;

  constructor(
    private readonly appDataService: AppDataService,
    // private readonly pythonService: PythonService,
    ) {
      this.appDataService.Output.subscribe(
        output => {
          this.server.emit('output', output)
        }
      )
      // this.pythonService.Response.subscribe(
      //   data => this.logger.log(JSON.stringify(data)) // Incoming data from Python: see, [ AppGateway] logger
      // );
    }

  @SubscribeMessage('input')
  Input(@MessageBody() data: {a: number, b: number}): void {
    // this.logger.log(`DATA RECEIVED: ${JSON.stringify(data)}`);
    // this.server.emit('output', {ans: data.a * data.b});
    this.appDataService.input(data);
  }
  handleConnection( client: Client, ..._arg: any[]): void {
    this.logger.log(`CLIENT: ${client.id} CONNECTED`);
  }
  handleDisconnect( client: Client): void {
    this.logger.log(`CLIENT: ${client.id} DISCONNECTED`);
  }
}
