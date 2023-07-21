import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


export enum PlaceOfProductionType {
	Slovenia = '00',
    Turkey = '01',
}

export enum EquipmentCodeType {
	BasePlatform = '000',
	Bumper = '014',
	DrumMulcher = '037',
	SideTrimmer = '036',
	Sprayer = '038',
	LawnMower = '027',
}

@Entity()
export class VehicleEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
    })
    version: string;

    @Column({
        // Not supported by sqlite
        // type: 'enum',
        // enum: EquipmentCodeType,
        nullable: false,
    })
    equipmentCode: string;

    @Column({
        nullable: false
    })
    yearOfIssue: string;

    @Column({
        nullable: false,
    })
    serialNumber: string;

    @Column({
        // Not supported by sqlite
        // type: 'enum',
        // enum: PlaceOfProductionType,
        nullable: false,
    })
    placeOfProduction: string;
}