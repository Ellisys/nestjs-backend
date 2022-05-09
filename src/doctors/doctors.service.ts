import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';
import { Doctor } from './entities/doctor.entity';

@Injectable()
export class DoctorsService {
  constructor(
    @InjectRepository(Doctor)
    private doctorsRepository: Repository<Doctor>,
  ) { }

  create(createDoctorDto: CreateDoctorDto) {
    return this.doctorsRepository.save(createDoctorDto);
  }

  findAll(): Promise<Doctor[]> {
    return this.doctorsRepository.find({ where: { isActive: 1 } });
  }

  findOneById(id: string): Promise<Doctor> {
    return this.doctorsRepository.findOne(id, { where: { isActive: 1 } });
  }

  findOneByName(name: string): Promise<Doctor> {
    return this.doctorsRepository.findOne({ where: { name: name, isActive: 1 } });
  }

  findOneByCrm(crm: string): Promise<Doctor> {
    return this.doctorsRepository.findOne({ where: { crm: crm, isActive: 1 } });
  }

  findOneByLandline(landline: string): Promise<Doctor> {
    return this.doctorsRepository.findOne({ where: { landline: landline, isActive: 1 } });
  }

  findOneByCellphone(cellphone: string): Promise<Doctor> {
    return this.doctorsRepository.findOne({ where: { cellphone: cellphone, isActive: 1 } });
  }

  findOneByCep(cep: string): Promise<Doctor> {
    return this.doctorsRepository.findOne({ where: { cep: cep, isActive: 1 } });
  }

  findOneBySpecialties(specialties: string): Promise<Doctor[]> {
    return this.doctorsRepository.find({ where: { specialties: Like("%"+specialties+"%"), isActive: 1 } });
  }

  update(id: string, updateDoctorDto: UpdateDoctorDto) {
    return this.doctorsRepository.save({ id: +id, ...updateDoctorDto })
  }

  remove(id: string): Promise<Doctor> {
    return this.doctorsRepository.save({ id: +id, isActive: false })
  }
}
