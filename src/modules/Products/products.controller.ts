import { Controller, Get, Post, Request, Response, Param, Next, HttpStatus, Body } from '@nestjs/common';
import { ProductsService } from '../Products/Services/products.service';
import { CreateProductDTO } from './DTO/create-products.dto';

@Controller('products')
export class ProductsController {
    constructor(
        private productsSercice: ProductsService
    ) {}

    @Get()
    async getAllProducts(@Request() req, @Response() res, @Next() next) {
        await this.productsSercice.getAllProducts()
            .then(products => res.status(HttpStatus.OK).json(products))
            .catch(err => res.status(HttpStatus.INTERNAL_SERVER_ERROR));
    }

    @Get('/:id')
    async getProduct(@Response() res, @Param('id') id) {
        await this.productsSercice.getProduct(+id)
            .then(product => res.status(HttpStatus.OK).json(product))
            .catch(err => rea.status(HttpStatus.INTERNAL_SERVER_ERROR));
    }

    @Post()
    async addProduct(@Response() res, @Body() createProductDTO: CreateProductDTO) {
        await this.productsSercice.addProduct(createProductDTO)
            .subscribe(products => res.status(HttpStatus.OK).json(createProductDTO));
    }
}
