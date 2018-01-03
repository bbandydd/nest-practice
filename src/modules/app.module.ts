import { Module } from '@nestjs/common';
import { UsersModule } from './Users/users.module';

@Module({
  modules: [UsersModule],
})
export class ApplicationModule {}
