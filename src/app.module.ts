import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ProductsModule } from './modules/products/products.module';
import { CartsModule } from './modules/carts/carts.module';
import { AuthModule } from './modules/auth/auth.module';
import { CollectionsModule } from './modules/collections/collections.module';
import { DashboardModule } from './modules/dashboard/dashboard.module';
import { HomeModule } from './modules/home/home.module';
import { UsersModule } from './modules/users/users.module';
import { OrdersModule } from './modules/orders/orders.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { UploadMiddleware } from 'src/common/middleware/upload.middleware';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), ProductsModule, CartsModule, AuthModule, CollectionsModule, DashboardModule, HomeModule, UsersModule, OrdersModule, ServeStaticModule.forRoot({rootPath: join(__dirname, '..')})],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply((req, res, next) => {
      const uploadMiddleware = new UploadMiddleware({ destination: 'products' });
      uploadMiddleware.use(req, res, next)
    }).forRoutes({ path: 'products/create-product', method: RequestMethod.POST })
  }
}
