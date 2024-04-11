// guest.service.ts
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Guest} from './guest.entity';

@Injectable()
export class GuestService {
    constructor(
        @InjectRepository(Guest)
        private readonly guestRepository: Repository<Guest>,
    ) {
    }

    async create(guestData: Partial<Guest>): Promise<Guest> {
        const guest = this.guestRepository.create(guestData);
        return this.guestRepository.save(guest);
    }

    async findAll(): Promise<Guest[]> {
        return this.guestRepository.find();
    }

    async findOne(id: string): Promise<Guest> {
        return this.guestRepository.findOneBy({id: id});
    }

    async update(id: string, guestData: Partial<Guest>): Promise<Guest> {
        const guest = await this.guestRepository.findOneBy({id: id});
        if (!guest) {
            throw new Error('Invitado no encontrado');
        }
        Object.assign(guest, guestData);
        return this.guestRepository.save(guest);
    }

    async remove(id: number): Promise<void> {
        await this.guestRepository.delete(id);
    }
}
