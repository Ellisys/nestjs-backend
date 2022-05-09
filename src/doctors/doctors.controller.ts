import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { DoctorsService } from './doctors.service';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Controller('doctors')
export class DoctorsController {
  constructor(private readonly doctorsService: DoctorsService) {}

  @Post()
  create(@Body() createDoctorDto: CreateDoctorDto) {
    return this.doctorsService.create(createDoctorDto);
  }
  
  @Get()
  findAll() {
    return this.doctorsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.doctorsService.findOneById(id);
  }

  @Get('name/:name')
  findOneByName(@Param('name') name: string) {
    return this.doctorsService.findOneByName(name);
  }

  @Get('crm/:crm')
  findOneByCrm(@Param('crm') crm: string) {
    return this.doctorsService.findOneByCrm(crm);
  }

  @Get('landline/:landline')
  findOneByLandline(@Param('landline') landline: string) {
    return this.doctorsService.findOneByLandline(landline);
  }
  
  @Get('cellphone/:cellphone')
  findOneByCellphone(@Param('cellphone') cellphone: string) {
    return this.doctorsService.findOneByCellphone(cellphone);
  }
  
  @Get('cep/:cep')
  findOnyByCep(@Param('cep') cep: string) {
    return this.doctorsService.findOneByCep(cep);
  }

  @Get('specialties/:specialties')
  findOneBySpecialties(@Param('specialties') specialties: string) {
    return this.doctorsService.findOneBySpecialties(specialties);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDoctorDto: UpdateDoctorDto) {
    return this.doctorsService.update(id, updateDoctorDto);
  }
  
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.doctorsService.remove(id);
  }
}
