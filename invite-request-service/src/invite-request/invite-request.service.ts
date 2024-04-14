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
        let elem = await this.inviteRequestRepository.save(inviteRequest);
        const guestWithRelations = await this.inviteRequestRepository.findOne({
            where: {id: elem.id},
            relations: ['requester', 'invitedUser', 'event'],
        });
        return guestWithRelations
    }

    async findAll(): Promise<InviteRequest[]> {
        return this.inviteRequestRepository.find({
            relations: ['requester', 'invitedUser', 'event']
        });
    }

    async findOne(id: string): Promise<InviteRequest> {
        return await this.inviteRequestRepository.findOne({
            where: {id: id},
            relations: ['requester', 'invitedUser', 'event'],
        });
    }

    async update(id: string, inviteRequestData: Partial<InviteRequest>): Promise<InviteRequest> {
        const inviteRequest = await this.inviteRequestRepository.findOneBy({id});
        if (!inviteRequest) {
            throw new Error('Solicitud de invitación no encontrada');
        }
        Object.assign(inviteRequest, inviteRequestData);
        let elem = await this.inviteRequestRepository.save(inviteRequest);
        return await this.inviteRequestRepository.findOne({
            where: {id: elem.id},
            relations: ['requester', 'invitedUser', 'event'],
        });
    }

    async remove(id: string): Promise<void> {
        await this.inviteRequestRepository.delete(id);
    }


    // GRPC communication

    async createInviteRequestGRPC(createInviteRequestDto: CreateInviteRequestRequest): Promise<CreateInviteRequestResponse> {
        const newInviteRequest = this.inviteRequestRepository.create(createInviteRequestDto);
        const savedInviteRequest = await this.inviteRequestRepository.save(newInviteRequest);

        let elem = await this.inviteRequestRepository.findOne({
            where: {id: savedInviteRequest.id},
            relations: ['requester', 'invitedUser', 'event'],
        });

        const requester: any = elem.requester ? elem.requester : null;
        const invitedUser: any = elem.invitedUser ? elem.invitedUser : null;
        const event: any = elem.event ? elem.event : null;
        return {
            id: elem.id,
            status: elem.status,
            invitedUser,
            requester,
            event,
            createdAt: elem.createdAt.toISOString(),
            updatedAt: elem.updatedAt.toISOString()
        };
    }

    async findAllInviteRequestsGRPC(find: FindAllInviteRequestsRequest): Promise<FindAllInviteRequestsResponse> {
        let InviteRequests = await this.inviteRequestRepository.find({
            ...find,
            relations: ['requester', 'invitedUser', 'event'],
        });
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
        let savedInviteRequest = await this.inviteRequestRepository.findOne({
            where: {id: data.id},
            relations: ['requester', 'invitedUser', 'event'],
        });
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
        let savedInviteRequest = await this.inviteRequestRepository.findOne({
            where: {id: data.id},
            relations: ['requester', 'invitedUser', 'event'],
        });

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
        let savedInviteRequest = await this.inviteRequestRepository.findOne({
            where: {id: data.id},
            relations: ['requester', 'invitedUser', 'event'],
        });

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
