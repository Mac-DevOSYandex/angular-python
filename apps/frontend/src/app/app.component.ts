import { Component } from '@angular/core';
import { AppSocketService } from './app-socket.service';

@Component({
  selector: 'ig-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a: number;
  b: number;
  ans: number;

  private handle: any;

  constructor(private readonly socket: AppSocketService) {
    this.socket.on('output', (data: { ans: number; }) => {
      this.ans = data.ans;
    })
  }

  // A simple test: two random numbers generated at set interval in frontend; then
  // sent to the backend for processing, the result send back to the client (c. above)
  start(): void {
    this.handle = setInterval(
      () => {
        this.a = Math.random() * 100;
        this.b = Math.random() * 100;
        this.socket.emit('input', { a: this.a, b: this.b });
      }, 1000
    )
  }
  stop(): void {
    clearInterval(this.handle);
  }
}
