// event.controller.ts
import {Controller, Get, Post, Body, Param, Put, Delete} from '@nestjs/common';
import {EventService} from './event.service';
import {Event} from './event.entity';
import {GrpcMethod} from "@nestjs/microservices";
import {
    CreateEventRequest,
    CreateEventResponse,
    DeleteEventRequest,
    DeleteEventResponse,
    FindAllEventsRequest,
    FindAllEventsResponse,
    FindEventByIdRequest,
    FindEventByIdResponse,
    UpdateEventRequest,
    UpdateEventResponse
} from "../generated/event";

@Controller('events')
export class EventController {
    constructor(private readonly eventService: EventService) {
    }

    @Post()
    async create(@Body() eventData: Partial<Event>): Promise<Event> {
        return this.eventService.create(eventData);
    }

    @Get()
    async findAll(): Promise<Event[]> {
        return this.eventService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Event> {
        return this.eventService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() eventData: Partial<Event>): Promise<Event> {
        return this.eventService.update(id, eventData);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        return this.eventService.remove(+id);
    }

    // GRPC communication

    @GrpcMethod('EventService', 'CreateEvent')
    async createEvent(data: CreateEventRequest): Promise<CreateEventResponse> {
        return await this.eventService.createEventGRPC(data);
    }

    @GrpcMethod('EventService', 'FindAllEvents')
    async findAllEvents(data: FindAllEventsRequest): Promise<FindAllEventsResponse> {
        return await this.eventService.findAllEventsGRPC(data);
    }

    @GrpcMethod('EventService', 'FindEventById')
    async findEventById(data: FindEventByIdRequest): Promise<FindEventByIdResponse> {
        return await this.eventService.findEventByIdGRPC(data);
    }

    @GrpcMethod('EventService', 'UpdateEvent')
    async updateEvent(data: UpdateEventRequest): Promise<UpdateEventResponse> {
        return await this.eventService.updateEventGRPC(data);
    }

    @GrpcMethod('EventService', 'DeleteEvent')
    async deleteEvent(data: DeleteEventRequest): Promise<DeleteEventResponse> {
        return await this.eventService.deleteEventGRPC(data);
    }
}
