import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { CollectionModule } from './collection/collection.module';
import { CartModule } from './cart/cart.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { CustomerModule } from './customer/customer.module';
import { CheckoutModule } from './checkout/checkout.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { CollectionsModule } from './collections/collections.module';
import { CollectionModule } from './collection/collection.module';

@Module({
  imports: [AuthModule, ProductModule, CollectionModule, CollectionsModule, OrderModule, CheckoutModule, CustomerModule, DashboardModule, CartModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
