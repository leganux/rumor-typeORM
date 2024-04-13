// guest.controller.ts
import {Controller, Get, Post, Body, Param, Put, Delete} from '@nestjs/common';
import {GuestService} from './guest.service';
import {Guest} from './guest.entity';
import {GrpcMethod} from "@nestjs/microservices";
import {
    CreateEventRequest,
    CreateEventResponse, DeleteEventResponse,
    FindAllEventsRequest,
    FindAllEventsResponse,
    FindEventByIdRequest, FindEventByIdResponse, UpdateEventRequest, UpdateEventResponse
} from "../generated/event";
import {
    CreateGuestRequest,
    CreateGuestResponse, DeleteGuestRequest, DeleteGuestResponse,
    FindAllGuestsRequest,
    FindAllGuestsResponse,
    FindGuestByIdRequest, FindGuestByIdResponse, UpdateGuestRequest, UpdateGuestResponse
} from "../generated/guest";

@Controller('api/guests')
export class GuestController {
    constructor(private readonly guestService: GuestService) {
    }

    @Post()
    async create(@Body() guestData: Partial<Guest>): Promise<Guest> {
        return this.guestService.create(guestData);
    }

    @Get()
    async findAll(): Promise<Guest[]> {
        return this.guestService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Guest> {
        return this.guestService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() guestData: Partial<Guest>): Promise<Guest> {
        return this.guestService.update(id, guestData);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        return this.guestService.remove(+id);
    }

    // GRPC communication

    @GrpcMethod('GuestService', 'CreateGuest')
    async createGuest(data: CreateGuestRequest): Promise<CreateGuestResponse> {
        return await this.guestService.createGuestGRPC(data);
    }

    @GrpcMethod('GuestService', 'FindAllGuests')
    async findAllGuests(data: FindAllGuestsRequest): Promise<FindAllGuestsResponse> {
        return await this.guestService.findAllGuestsGRPC(data);
    }

    @GrpcMethod('GuestService', 'FindGuestById')
    async findGuestById(data: FindGuestByIdRequest): Promise<FindGuestByIdResponse> {
        return await this.guestService.findGuestByIdGRPC(data);
    }

    @GrpcMethod('GuestService', 'UpdateGuest')
    async updateGuest(data: UpdateGuestRequest): Promise<UpdateGuestResponse> {
        return await this.guestService.updateGuestGRPC(data);
    }

    @GrpcMethod('GuestService', 'DeleteGuest')
    async deleteGuest(data: DeleteGuestRequest): Promise<DeleteGuestResponse> {
        return await this.guestService.deleteGuestGRPC(data);
    }

}
