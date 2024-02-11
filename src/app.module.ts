import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarritoModule } from './components/carrito/carrito.module';
import { ClienteModule } from './components/cliente/cliente.module';
import { OrdenModule } from './components/orden/orden.module';
import { MetodosEnvioModule } from './components/metodos-envio/metodos-envio.module';
import { MetodosPagoModule } from './components/metodos-pago/metodos-pago.module';
import { ItemsModule } from './components/items/items.module';
import { ProductoModule } from './components/producto/producto.module';
import { UsuarioModule } from './components/usuario/usuario.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './components/auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      useFactory : () => ({
        type: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT) || 3306,
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        charset: "utf8_general_ci",
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false
      })
    }),
    CarritoModule, ClienteModule, OrdenModule, MetodosEnvioModule, MetodosPagoModule, ItemsModule, ProductoModule, UsuarioModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
