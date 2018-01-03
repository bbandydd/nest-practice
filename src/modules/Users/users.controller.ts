import { Controller, Get, Post, Request, Response, Param, Next, HttpStatus, Body, UseFilters } from '@nestjs/common';
import { HttpException } from '@nestjs/core/exceptions/http-exception';
import { CreateUserDTO } from './DTO/create-users.dto';
import { UsersService } from './Services/users.service';
import { ProductsService } from '../Products/Services/products.service';
import { CustomForbiddenException } from '../Shared/ExceptionFilters/forbidden.exception';
import { HttpExceptionFilter } from '../Shared/ExceptionFilters/http-exception.filter';

@Controller('users')
@UseFilters(new HttpExceptionFilter())
export class UsersController {
    constructor(
        private userService: UsersService,
        private productsService: ProductsService,
    ) {}

    @Get()
    async getAllUsers(@Request() req, @Response() res, @Next() next) {
        await this.userService.getAllUsers()
            .then(users => res.status(HttpStatus.OK).json(users))
            .catch(error => res.status(HttpStatus.INTERNAL_SERVER_ERROR));
    }

    @Get('/:id')
    async getUser(@Response() res, @Param('id') id) {
        await this.userService.getUser(+id)
            .then(user => res.status(HttpStatus.OK).json(user))
            .catch(error => res.status(HttpStatus.INTERNAL_SERVER_ERROR));
    }

    @Post()
    async addUser(@Response() res, @Body() createUserDTO: CreateUserDTO) {
        await this.userService.addUser(createUserDTO)
            .subscribe(users => res.status(HttpStatus.OK).json(users));
    }

    @Get('/test/Products')
    async testGetAllProducts(@Request() req, @Response() res, @Next() next) {
        await this.productsService.getAllProducts()
            .then(products => res.status(HttpStatus.OK).json(products))
            .catch(error => res.status(HttpStatus.INTERNAL_SERVER_ERROR));
    }

    @Get('/exception/get')
    @UseFilters(new HttpExceptionFilter())
    async getException(@Request() req, @Response() res, @Next() next) {
        throw new CustomForbiddenException();
    }
}