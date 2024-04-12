// invite-request.controller.ts
import {Controller, Get, Post, Body, Param, Put, Delete} from '@nestjs/common';
import {InviteRequestService} from './invite-request.service';
import {InviteRequest} from './invite-request.entity';
import {GrpcMethod} from "@nestjs/microservices";
import {
    CreateInviteRequestRequest,
    CreateInviteRequestResponse, DeleteInviteRequestRequest, DeleteInviteRequestResponse,
    FindAllInviteRequestsRequest,
    FindAllInviteRequestsResponse,
    FindInviteRequestByIdRequest,
    FindInviteRequestByIdResponse, UpdateInviteRequestRequest, UpdateInviteRequestResponse
} from "../generated/invite_request";

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


    // GRPC communication

    @GrpcMethod('InviteRequestService', 'CreateInviteRequest')
    async createInviteRequest(data: CreateInviteRequestRequest): Promise<CreateInviteRequestResponse> {
        return await this.inviteRequestService.createInviteRequestGRPC(data);
    }

    @GrpcMethod('InviteRequestService', 'FindAllInviteRequests')
    async findAllInviteRequests(data: FindAllInviteRequestsRequest): Promise<FindAllInviteRequestsResponse> {
        return await this.inviteRequestService.findAllInviteRequestsGRPC(data);
    }

    @GrpcMethod('InviteRequestService', 'FindInviteRequestById')
    async findInviteRequestById(data: FindInviteRequestByIdRequest): Promise<FindInviteRequestByIdResponse> {
        return await this.inviteRequestService.findInviteRequestByIdGRPC(data);
    }

    @GrpcMethod('InviteRequestService', 'UpdateInviteRequest')
    async updateInviteRequest(data: UpdateInviteRequestRequest): Promise<UpdateInviteRequestResponse> {
        return await this.inviteRequestService.updateInviteRequestGRPC(data);
    }

    @GrpcMethod('InviteRequestService', 'DeleteInviteRequest')
    async deleteInviteRequest(data: DeleteInviteRequestRequest): Promise<DeleteInviteRequestResponse> {
        return await this.inviteRequestService.deleteInviteRequestGRPC(data);
    }

}
