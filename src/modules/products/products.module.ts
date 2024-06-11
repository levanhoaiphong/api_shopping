import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { UploadMiddleware } from 'src/common/middleware/upload.middleware';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply((req, res, next) =>{
      const uploadMiddleware = new UploadMiddleware({destination:'products'});
      uploadMiddleware.use(req, res, next)
    }).forRoutes({ path:'products/create-product', method: RequestMethod.POST})
  }
}
