import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty, IsString, Length } from "class-validator";
import { EquipmentCodeType, PlaceOfProductionType } from "../entities/vehicle.entity";
import { Transform } from "class-transformer";

export class CreateVehicleDto {

    @IsString()
    @IsNotEmpty()
    @Length(3)
    @ApiProperty()
    version: string;

    @ApiProperty({ enum: EquipmentCodeType })
	@IsEnum(EquipmentCodeType)
    @IsString()
    equipmentCode: string;

    @IsNotEmpty()
    @Length(2)
    @IsString()
    @ApiProperty()
    yearOfIssue: string;

    @IsString()
    @Length(6)
    @IsNotEmpty()
    @ApiProperty()
    @Transform((field) => (`1${field.value.toString()}`))
    serialNumber: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ enum: PlaceOfProductionType })
	@IsEnum(PlaceOfProductionType)
    placeOfProduction: string;
}
