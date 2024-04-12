// src/user/user.controller.ts

import {Controller, Get, Post, Body, Put, Param, Delete} from '@nestjs/common';
import {UserService} from './user.service';
import {User} from './user.entity';
import {CreateUserDto} from "./dto/create-user.dto";
import {UpdateUserDto} from "./dto/update-user.dto";
import {GrpcMethod} from "@nestjs/microservices";
import {
    CreateUserRequest,
    CreateUserResponse,
    UpdateUserRequest,
    UpdateUserResponse,
    DeleteUserRequest,
    DeleteUserResponse,
    FindUserByIdResponse,
    FindAllUsersResponse,
    FindAllUsersRequest,
    FindUserByIdRequest
} from "./../generated/user"

@Controller()
export class UserController {
    constructor(private readonly userService: UserService) {
    }

    /*
        @Get()
        findAll(): Promise<User[]> {
            return this.userService.findAll();
        }

        @Get(':id')
        findOne(@Param('id') id: string): Promise<User> {
            return this.userService.findOne(id);
        }

        @Post()
        create(@Body() createUserDto: CreateUserDto): Promise<User> {
            return this.userService.create(createUserDto);
        }

        @Put(':id')
        update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto): Promise<User> {
            return this.userService.update(id, updateUserDto);
        }

        @Delete(':id')
        remove(@Param('id') id: string): Promise<void> {
            return this.userService.remove(id);
        }
    */

    // GRPC communication

    @GrpcMethod('UserService', 'CreateUser')
    async createUser(data: CreateUserRequest): Promise<CreateUserResponse> {
        return await this.userService.createUserGRPC(data);
    }

    @GrpcMethod('UserService', 'FindAllUsers')
    async findAllUsers(data: FindAllUsersRequest): Promise<FindAllUsersResponse> {
        return await this.userService.findAllUsersGRPC(data);
    }

    @GrpcMethod('UserService', 'FindUserById')
    async findUserById(data: FindUserByIdRequest): Promise<FindUserByIdResponse> {
        return await this.userService.findUserByIdGRPC(data);
    }

    @GrpcMethod('UserService', 'UpdateUser')
    async updateUser(data: UpdateUserRequest): Promise<UpdateUserResponse> {
        return await this.userService.updateUserGRPC(data);
    }

    @GrpcMethod('UserService', 'DeleteUser')
    async deleteUser(data: DeleteUserRequest): Promise<DeleteUserResponse> {
        return await this.userService.deleteUserGRPC(data);
    }

}
