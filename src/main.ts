import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
const cookieSession = require('cookie-session');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieSession({ keys: ['asdddsojhvxerdsdsdsf'] }));
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );

  await app.listen(process.env.PORT ?? 3003);
}

bootstrap()
  .then(() => {
    console.log(`Server started on port: ${process.env.PORT ?? 3003}`);
  })
  .catch((err) => {
    console.error(err);
  });
