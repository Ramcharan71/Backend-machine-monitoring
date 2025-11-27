import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      "https://frontend-machine-monitoring-dashboa.vercel.app"
    ],
    credentials: true,
  });
  await app.listen(3001);
  console.log('Backend running on http://localhost:3001');
}
bootstrap();
