import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
    }),
  );

  app.enableCors({
    origin: ['http://localhost:5173'], // Разрешаем запросы только с фронтенда
    methods: ['GET','POST','PUT','DELETE'], // Разрешённые HTTP-методы
    allowedHeaders: ['Content-Type','Authorization'], // Разрешённые заголовки
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
