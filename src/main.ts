import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ProductsModule } from './products/products.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const product = await NestFactory.create(ProductsModule)
  await app.listen(3000);
  await product.listen(4000)
}
bootstrap();
