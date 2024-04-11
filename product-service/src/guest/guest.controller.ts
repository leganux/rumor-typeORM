// guest.controller.ts
import {Controller, Get, Post, Body, Param, Put, Delete} from '@nestjs/common';
import {GuestService} from './guest.service';
import {Guest} from './guest.entity';

@Controller('guests')
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
}
