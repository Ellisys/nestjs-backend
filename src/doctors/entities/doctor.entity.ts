import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Doctor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 120 })
    name: string;

    @Column()
    crm: string;

    @Column()
    landline: string;

    @Column()
    cellphone: string;

    @Column()
    cep: string;

    @Column("simple-array")
    specialties: string[];

    @Column({ default: true })
    isActive: boolean;
}
