import { Module } from '@nestjs/common';
import { DoctorsModule } from './doctors/doctors.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Doctor } from './doctors/entities/doctor.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      //host: 'host.docker.internal',
      host:'localhost',
      port: 3306,
      username: 'root',
      password: null,
      database: 'teste',
      entities: [Doctor],
      migrations:['../migrations/**/*.{ts,js}'],
      synchronize: true,
    }),
    DoctorsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
