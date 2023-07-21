import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VehicleService } from './vehicle.service';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { ApiBody, ApiTags } from '@nestjs/swagger';
import { EquipmentCodeType, PlaceOfProductionType } from './entities/vehicle.entity';
// import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Controller('vehicle')
@ApiTags('Vehicle')
export class VehicleController {
  constructor(private readonly vehicleService: VehicleService) {}

  @Post()
  @ApiBody({type: CreateVehicleDto})
  create(@Body() createVehicleDto: CreateVehicleDto) {
    return this.vehicleService.create(createVehicleDto);
  }

  @Get()
  findAll() {
    return this.vehicleService.findAll();
  }

  @Get('equipment-codes')
  findEquipmentCodes() {
    return EquipmentCodeType;
  }

  @Get('place-of-products')
  findPlaceOfProducts() {
    return PlaceOfProductionType;
  }


  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.vehicleService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateVehicleDto: UpdateVehicleDto) {
  //   return this.vehicleService.update(+id, updateVehicleDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.vehicleService.remove(+id);
  // }
}
