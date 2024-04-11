// event.service.ts
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Event} from './event.entity';

@Injectable()
export class EventService {
    constructor(
        @InjectRepository(Event)
        private readonly eventRepository: Repository<Event>,
    ) {
    }

    async create(eventData: Partial<Event>): Promise<Event> {
        const event = this.eventRepository.create(eventData);
        return this.eventRepository.save(event);
    }

    async findAll(): Promise<Event[]> {
        return this.eventRepository.find();
    }

    async findOne(id: string): Promise<Event> {
        return this.eventRepository.findOneBy({id});
    }

    async update(id: string, eventData: Partial<Event>): Promise<Event> {
        const event = await this.eventRepository.findOneBy({id});
        if (!event) {
            throw new Error('Evento no encontrado');
        }
        Object.assign(event, eventData);
        return this.eventRepository.save(event);
    }

    async remove(id: number): Promise<void> {
        await this.eventRepository.delete(id);
    }
}
