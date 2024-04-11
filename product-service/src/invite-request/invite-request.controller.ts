// invite-request.controller.ts
import {Controller, Get, Post, Body, Param, Put, Delete} from '@nestjs/common';
import {InviteRequestService} from './invite-request.service';
import {InviteRequest} from './invite-request.entity';

@Controller('invite-requests')
export class InviteRequestController {
    constructor(private readonly inviteRequestService: InviteRequestService) {
    }

    @Post()
    async create(@Body() inviteRequestData: Partial<InviteRequest>): Promise<InviteRequest> {
        return this.inviteRequestService.create(inviteRequestData);
    }

    @Get()
    async findAll(): Promise<InviteRequest[]> {
        return this.inviteRequestService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<InviteRequest> {
        return this.inviteRequestService.findOne(id);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() inviteRequestData: Partial<InviteRequest>): Promise<InviteRequest> {
        return this.inviteRequestService.update(id, inviteRequestData);
    }

    @Delete(':id')
    async remove(@Param('id') id: string): Promise<void> {
        return this.inviteRequestService.remove(id);
    }
}
