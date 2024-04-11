// src/user/user.service.ts

import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {User} from './user.entity';
import {UpdateUserDto} from "./dto/update-user.dto";
import {CreateUserDto} from "./dto/create-user.dto";
import {
    CreateUserRequest,
    CreateUserResponse, DeleteUserResponse,
    FindAllUsersRequest,
    FindAllUsersResponse,
    FindUserByIdRequest, FindUserByIdResponse, UpdateUserRequest, UpdateUserResponse
} from "../generated/user";

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {
    }

    findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    findOne(id: string): Promise<User> {
        return this.userRepository.findOneBy({id: id});
    }

    async create(user: CreateUserDto): Promise<User> {
        return this.userRepository.save(user);
    }

    async update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
        await this.userRepository.update(id, updateUserDto);
        return this.findOne(id);
    }

    async remove(id: string): Promise<void> {
        await this.userRepository.delete(id);
    }

    // GRPC communication

    async createUserGRPC(createUserDto: CreateUserRequest): Promise<CreateUserResponse> {
        const newUser = this.userRepository.create(createUserDto);
        const savedUser = await this.userRepository.save(newUser);
        return {
            id: savedUser.id,
            name: savedUser.name,
            email: savedUser.email,
            dateOfBirth: savedUser.dateOfBirth.toISOString(),
        };
    }


    async findAllUsersGRPC(find: FindAllUsersRequest): Promise<FindAllUsersResponse> {
        let users = await this.userRepository.find(find);
        let x: any = users.map((item: User) => {
            return {
                id: item.id,
                name: item.name,
                email: item.email,
                dateOfBirth: item.dateOfBirth.toISOString(),
            }
        })
        return {users: x}
    }

    async findUserByIdGRPC(data: FindUserByIdRequest): Promise<FindUserByIdResponse> {
        let savedUser = await this.userRepository.findOneBy({id: data.id});
        return {
            id: savedUser.id,
            name: savedUser.name,
            email: savedUser.email,
            dateOfBirth: savedUser.dateOfBirth.toISOString(),
        };
    }

    async updateUserGRPC(data: UpdateUserRequest): Promise<UpdateUserResponse> {
        let updateData: any = {...data}
        delete updateData.id
        await this.userRepository.update(data.id, updateData);
        let savedUser = await this.userRepository.findOneBy({id: data.id});
        return {
            id: savedUser.id,
            name: savedUser.name,
            email: savedUser.email,
            dateOfBirth: savedUser.dateOfBirth.toISOString(),
        };
    }

    async deleteUserGRPC(data: DeleteUserResponse): Promise<DeleteUserResponse> {
        let savedUser = await this.userRepository.findOneBy({id: data.id});
        await this.userRepository.delete(data.id);
        return {
            id: savedUser.id,
            name: savedUser.name,
            email: savedUser.email,
            dateOfBirth: savedUser.dateOfBirth.toISOString(),
        };

    }


}
