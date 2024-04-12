// guest.service.ts
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Guest} from './guest.entity';
import {
    CreateEventRequest,
    CreateEventResponse, DeleteEventRequest, DeleteEventResponse,
    FindAllEventsRequest,
    FindAllEventsResponse,
    FindEventByIdRequest, FindEventByIdResponse, UpdateEventRequest, UpdateEventResponse
} from "../generated/event";
import {Event} from "../event/event.entity";
import {
    CreateGuestRequest,
    CreateGuestResponse, DeleteGuestRequest, DeleteGuestResponse,
    FindAllGuestsRequest,
    FindAllGuestsResponse,
    FindGuestByIdRequest, FindGuestByIdResponse, UpdateGuestRequest, UpdateGuestResponse
} from "../generated/guest";

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

    // GRPC communication

    async createGuestGRPC(createGuestDto: CreateGuestRequest): Promise<CreateGuestResponse> {
        const newGuest = this.guestRepository.create(createGuestDto);
        const savedGuest = await this.guestRepository.save(newGuest);
        const event: any = savedGuest.event ? savedGuest.event : null;
        const user: any = savedGuest.user ? savedGuest.user : null;
        return {
            id: savedGuest.id,
            event: event,
            user: user,
        };
    }

    async findAllGuestsGRPC(find: FindAllGuestsRequest): Promise<FindAllGuestsResponse> {
        let Guests = await this.guestRepository.find(find);
        let x: any = Guests.map((item: Guest) => {
            const event: any = item.event ? item.event : null;
            const user: any = item.user ? item.user : null;

            return {
                id: item.id,
                event: event,
                user: user
            }
        })
        return {guests: x}
    }

    async findGuestByIdGRPC(data: FindGuestByIdRequest): Promise<FindGuestByIdResponse> {
        let savedGuest = await this.guestRepository.findOneBy({id: data.id});
        const event: any = savedGuest.event ? savedGuest.event : null;
        const user: any = savedGuest.user ? savedGuest.user : null;

        return {
            id: savedGuest.id,
            user, event
        };
    }

    async updateGuestGRPC(data: UpdateGuestRequest): Promise<UpdateGuestResponse> {
        let updateData: any = {...data}
        delete updateData.id
        await this.guestRepository.update(data.id, updateData);
        let savedGuest = await this.guestRepository.findOneBy({id: data.id});
        const event: any = savedGuest.event ? savedGuest.event : null;
        const user: any = savedGuest.user ? savedGuest.user : null;

        return {
            id: savedGuest.id,
            user, event
        };
    }

    async deleteGuestGRPC(data: DeleteGuestRequest): Promise<DeleteGuestResponse> {
        let savedGuest = await this.guestRepository.findOneBy({id: data.id});
        const event: any = savedGuest.event ? savedGuest.event : null;
        const user: any = savedGuest.user ? savedGuest.user : null;

        await this.guestRepository.delete(data.id);
        return {
            id: savedGuest.id,
            user, event
        };

    }

}
