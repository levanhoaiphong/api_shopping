import { Injectable, Body } from '@nestjs/common';

@Injectable()
export class ProductsService {
    async createProduct(path, body){
        console.log("🚀 ~ ProductsService ~ createProduct ~ body:", body);
        console.log("🚀 ~ ProductsService ~ createProduct ~ path:", path);
    }
}
