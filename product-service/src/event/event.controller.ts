// event.controller.ts
import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { EventService } from './event.service';
import { Event } from './event.entity';

@Controller('events')
export class EventController {
    constructor(private readonly eventService: EventService) {}

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
}
