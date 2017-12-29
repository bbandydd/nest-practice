import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './Services/users.service';

@Module({
    controllers: [UsersController],
    components: [UsersService],
})
export class UsersModule { }