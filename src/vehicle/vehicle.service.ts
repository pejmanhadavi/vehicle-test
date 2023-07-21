import { Injectable } from '@nestjs/common';
import { CreateVehicleDto } from './dto/create-vehicle.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { VehicleEntity } from './entities/vehicle.entity';
import { Repository } from 'typeorm';
// import { UpdateVehicleDto } from './dto/update-vehicle.dto';

@Injectable()
export class VehicleService {
  constructor(
    @InjectRepository(VehicleEntity)
    private readonly vehicleRepository: Repository<VehicleEntity>
  ) {}

  async create(createVehicleDto: CreateVehicleDto,): Promise<VehicleEntity> {
    return await this.vehicleRepository.save(createVehicleDto);
  }

  async findAll(): Promise<VehicleEntity[]> {
    return await this.vehicleRepository.find();
  }

  async findOne(id: number): Promise<VehicleEntity> {
    return await this.vehicleRepository.findOne({where: {id}});
  }

  // update(id: number, updateVehicleDto: UpdateVehicleDto) {
  //   return `This action updates a #${id} vehicle`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} vehicle`;
  // }
}
