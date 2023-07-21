import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { EquipmentCodeType, PlaceOfProductionType } from "../entities/vehicle.entity";

export class CreateVehicleDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    version: string;

    @ApiProperty({ enum: EquipmentCodeType })
	@IsEnum(EquipmentCodeType)
    equipmentCode: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    yearOfIssue: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    serialNumber: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ enum: PlaceOfProductionType })
	@IsEnum(PlaceOfProductionType)
    placeOfProduction: string;
}
