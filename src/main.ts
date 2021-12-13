import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: ['localhost:9092'],
          clientId: 'my-app-nest',
        },
        consumer: {
          groupId: 'my-group-nest',
        },
        subscribe: {
          fromBeginning: true,
        },
      },
    },
  );

  app.listen();
}
bootstrap();
