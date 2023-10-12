import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';
import { ProductService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Post()
  create(product) {
    return this.productService.create(product);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    const idN = Number(id)
    return this.productService.findOne(idN);
  }

  @Put(':id')
  update(id: number, updatedProduct) {
    return this.productService.update(id, updatedProduct);
  }

  @Delete(':id')
  remove(id: number) {
    return this.productService.remove(id);
  }
}
