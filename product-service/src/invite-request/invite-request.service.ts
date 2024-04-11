// invite-request.service.ts
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {InviteRequest} from './invite-request.entity';

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
}
