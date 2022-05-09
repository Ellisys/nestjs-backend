import { ArrayMinSize, IsArray, IsNotEmpty, IsNumberString, MaxLength, MinLength } from "class-validator";

export class CreateDoctorDto {

    @MaxLength(120)
    @IsNotEmpty({ message: "O campo name não pode estar vazio." })
    name: string;

    @IsNumberString({ message: "Digite apenas números no campo crm." }, { message: "Digite apenas números no campo crm." })
    @MinLength(7, { message: "O campo crm precisa ter no mínimo 7 números." })
    @MaxLength(7, { message: "O campo crm precisa ter no máximo 7 números." })
    @IsNotEmpty({ message: "O campo crm não pode estar vazio." })
    crm: string;

    @IsNumberString({ message: "Digite apenas números no campo landline." }, { message: "Digite apenas números no campo landline." })
    @IsNotEmpty({ message: "O campo landline não pode estar vazio." })
    landline: string;

    @IsNumberString({ message: "Digite apenas números no campo cellphone." }, { message: "Digite apenas números no campo cellphone." })
    @IsNotEmpty({ message: "O campo cellphone não pode estar vazio." })
    cellphone: string;

    @IsNumberString({ message: "Digite apenas números no campo cep." }, { message: "Digite apenas números no campo cep." })
    @IsNotEmpty({ message: "O campo cep não pode estar vazio." })
    cep: string;

    @IsNotEmpty({ message: "O campo specialties não pode estar vazio." })
    @IsArray()
    @ArrayMinSize(2, { message: "O campo specialties precisa ter no mínimo 2 valores." })
    specialties: string[];
}