import {IsString, IsEmail, IsOptional, IsDateString} from 'class-validator';

export class CreateUserDto {
    @IsOptional()
    @IsString()
    readonly id?: string;

    @IsString()
    readonly name: string;

    @IsEmail()
    readonly email: string;

    @IsOptional()
    @IsDateString()
    readonly dateOfBirth?: Date;
}
