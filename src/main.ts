import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Config swagger
  const config = new DocumentBuilder()
    .setTitle('Test App')
    .setDescription('API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // Add validation pipe to validating incoming data
  app.useGlobalPipes(new ValidationPipe());
  

  await app.listen(3000);
}
bootstrap();
