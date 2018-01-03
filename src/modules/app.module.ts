import { Module } from '@nestjs/common';
import { UsersModule } from './Users/users.module';
import { ProductsModule } from './Products/products.module';

@Module({
  modules: [UsersModule, ProductsModule],
})
export class ApplicationModule {}
