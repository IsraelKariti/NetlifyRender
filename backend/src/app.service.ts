import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): { msg: string } {
    return { msg: 'This is a message from nest backend!' };
  }
}
