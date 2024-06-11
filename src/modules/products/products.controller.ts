import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Request, Response } from 'express';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Post('/create-product')
  async createProduct(@Req() req: Request, @Res() res: Response, @Body() body) {
    console.log("🚀 ~ ProductsController ~ createProduct ~ req:", req.file);
    return this.productsService.createProduct(req.files, body)
  }
}
