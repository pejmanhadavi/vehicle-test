import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VehicleModule } from './vehicle/vehicle.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    // Connect app to sqlite
    TypeOrmModule.forRoot({
      type :"sqlite",
      database: "data.db",
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      synchronize: true
    }),
    VehicleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
