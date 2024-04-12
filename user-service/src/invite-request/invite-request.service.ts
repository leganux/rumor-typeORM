// invite-request.service.ts
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {InviteRequest} from './invite-request.entity';
import {
    CreateInviteRequestRequest,
    CreateInviteRequestResponse,
    DeleteInviteRequestRequest,
    DeleteInviteRequestResponse,
    FindAllInviteRequestsRequest,
    FindAllInviteRequestsResponse,
    FindInviteRequestByIdRequest,
    FindInviteRequestByIdResponse,
    UpdateInviteRequestRequest,
    UpdateInviteRequestResponse
} from "../generated/invite_request";


@Injectable()
export class InviteRequestService {
    constructor(
        @InjectRepository(InviteRequest)
        private readonly inviteRequestRepository: Repository<InviteRequest>,
    ) {
    }

    async create(inviteRequestData: Partial<InviteRequest>): Promise<InviteRequest> {
        const inviteRequest = this.inviteRequestRepository.create(inviteRequestData);
        return this.inviteRequestRepository.save(inviteRequest);
    }

    async findAll(): Promise<InviteRequest[]> {
        return this.inviteRequestRepository.find();
    }

    async findOne(id: string): Promise<InviteRequest> {
        return this.inviteRequestRepository.findOneBy({id});
    }

    async update(id: string, inviteRequestData: Partial<InviteRequest>): Promise<InviteRequest> {
        const inviteRequest = await this.inviteRequestRepository.findOneBy({id});
        if (!inviteRequest) {
            throw new Error('Solicitud de invitación no encontrada');
        }
        Object.assign(inviteRequest, inviteRequestData);
        return this.inviteRequestRepository.save(inviteRequest);
    }

    async remove(id: string): Promise<void> {
        await this.inviteRequestRepository.delete(id);
    }


    // GRPC communication

    async createInviteRequestGRPC(createInviteRequestDto: CreateInviteRequestRequest): Promise<CreateInviteRequestResponse> {
        const newInviteRequest = this.inviteRequestRepository.create(createInviteRequestDto);
        const savedInviteRequest = await this.inviteRequestRepository.save(newInviteRequest);

        const requester: any = savedInviteRequest.requester ? savedInviteRequest.requester : null;
        const invitedUser: any = savedInviteRequest.invitedUser ? savedInviteRequest.invitedUser : null;
        const event: any = savedInviteRequest.event ? savedInviteRequest.event : null;
        return {
            id: savedInviteRequest.id,
            status: savedInviteRequest.status,
            invitedUser,
            requester,
            event,
            createdAt: savedInviteRequest.createdAt.toISOString(),
            updatedAt: savedInviteRequest.updatedAt.toISOString()
        };
    }

    async findAllInviteRequestsGRPC(find: FindAllInviteRequestsRequest): Promise<FindAllInviteRequestsResponse> {
        let InviteRequests = await this.inviteRequestRepository.find(find);
        let x: any = InviteRequests.map((item: InviteRequest) => {
            const requester: any = item.requester ? item.requester : null;
            const invitedUser: any = item.invitedUser ? item.invitedUser : null;
            const event: any = item.event ? item.event : null;
            return {
                id: item.id,
                status: item.status,
                invitedUser,
                requester,
                event,
                createdAt: item.createdAt.toISOString(),
                updatedAt: item.updatedAt.toISOString()
            };


        })
        return {inviteRequests: x}
    }

    async findInviteRequestByIdGRPC(data: FindInviteRequestByIdRequest): Promise<FindInviteRequestByIdResponse> {
        let savedInviteRequest = await this.inviteRequestRepository.findOneBy({id: data.id});
        const requester: any = savedInviteRequest.requester ? savedInviteRequest.requester : null;
        const invitedUser: any = savedInviteRequest.invitedUser ? savedInviteRequest.invitedUser : null;
        const event: any = savedInviteRequest.event ? savedInviteRequest.event : null;
        return {
            id: savedInviteRequest.id,
            status: savedInviteRequest.status,
            invitedUser,
            requester,
            event,
            createdAt: savedInviteRequest.createdAt.toISOString(),
            updatedAt: savedInviteRequest.updatedAt.toISOString()
        };
    }

    async updateInviteRequestGRPC(data: UpdateInviteRequestRequest): Promise<UpdateInviteRequestResponse> {
        let updateData: any = {...data}
        delete updateData.id
        await this.inviteRequestRepository.update(data.id, updateData);
        let savedInviteRequest = await this.inviteRequestRepository.findOneBy({id: data.id});

        const requester: any = savedInviteRequest.requester ? savedInviteRequest.requester : null;
        const invitedUser: any = savedInviteRequest.invitedUser ? savedInviteRequest.invitedUser : null;
        const event: any = savedInviteRequest.event ? savedInviteRequest.event : null;
        return {
            id: savedInviteRequest.id,
            status: savedInviteRequest.status,
            invitedUser,
            requester,
            event,
            createdAt: savedInviteRequest.createdAt.toISOString(),
            updatedAt: savedInviteRequest.updatedAt.toISOString()
        };
    }

    async deleteInviteRequestGRPC(data: DeleteInviteRequestRequest): Promise<DeleteInviteRequestResponse> {
        let savedInviteRequest = await this.inviteRequestRepository.findOneBy({id: data.id});

        const requester: any = savedInviteRequest.requester ? savedInviteRequest.requester : null;
        const invitedUser: any = savedInviteRequest.invitedUser ? savedInviteRequest.invitedUser : null;
        const event: any = savedInviteRequest.event ? savedInviteRequest.event : null;

        await this.inviteRequestRepository.delete(data.id);
        return {
            id: savedInviteRequest.id,
            status: savedInviteRequest.status,
            invitedUser,
            requester,
            event,
            createdAt: savedInviteRequest.createdAt.toISOString(),
            updatedAt: savedInviteRequest.updatedAt.toISOString()
        };
    }


}
