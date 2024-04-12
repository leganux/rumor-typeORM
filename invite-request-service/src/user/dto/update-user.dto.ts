import {IsString, IsEmail, IsOptional, IsDateString} from 'class-validator';

export class UpdateUserDto {
    @IsOptional()
    @IsString()
    readonly name?: string;

    @IsOptional()
    @IsEmail()
    readonly email?: string;

    @IsOptional()
    @IsDateString()
    readonly dateOfBirth?: Date;
}
