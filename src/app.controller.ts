import { Controller, Get } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';

@Controller()
export class AppController {
  @EventPattern('topic-a')
  getHello(@Payload() message) {
    console.log(`Consumed message ${message.value}`);
    throw new Error('Something went wrong');
  }
}
