import { Injectable, Logger } from '@nestjs/common';
import { Subject, Observable } from 'rxjs';
import { PythonService } from './python.service';

@Injectable()
export class AppDataService {

  private readonly logger = new Logger(AppDataService.name, true);

  private queue: any[] = [];
  private ready = false;
  private output: Subject<any> = new Subject<any>()

  constructor(private pythonService: PythonService) {
    this.pythonService.Response.subscribe(
      data => {
        if (data.status === 'ready') {
          this.ready = true;
          this.process();
        } else {
          this.output.next(data);
        }
      }
    );
  }

  public input(input: any): void {
    this.queue.push(input);
    if (this.ready) {
      this.process()
    }
  }

  private process(): void {
    if (this.queue.length !== 0) {
      this.ready = false;
      this.pythonService.process(this.queue.shift())
    }
  }

  public get Output(): Observable<any> {
    return this.output;
  }
}
