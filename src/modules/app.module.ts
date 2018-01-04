import { Module, RequestMethod, UseFilters } from '@nestjs/common';
import { UsersController } from './Users/users.controller';
import { ProductsController } from './Products/products.controller';
import { UsersModule } from './Users/users.module';
import { LoggerMiddleware } from './Shared/middlewares/logger.middleware';
import { SimpleMiddleware } from './Shared/middlewares/simple.middleware';
import { HttpExceptionFilter } from './Shared/ExceptionFilters/http-exception.filter';
import { NestModule, MiddlewaresConsumer } from '@nestjs/common/interfaces';

@Module({
  modules: [UsersModule],
})
// @UseFilters(new HttpExceptionFilter())
export class ApplicationModule implements NestModule {
  configure(consumer: MiddlewaresConsumer): void {
    consumer.apply([LoggerMiddleware, SimpleMiddleware])
      .with('來自根模組的參數')
      .forRoutes(
        UsersController,
        ProductsController,
      )
  }
}
