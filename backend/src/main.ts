import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.FRONTEND_URL,
    credentials: true, // optional, only if using cookies/auth
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
