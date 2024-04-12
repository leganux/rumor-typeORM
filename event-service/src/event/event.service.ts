// event.service.ts
import {Injectable} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Event} from './event.entity';


import {
    CreateEventRequest,
    CreateEventResponse,
    DeleteEventResponse,
    FindAllEventsRequest,
    FindAllEventsResponse,
    FindEventByIdRequest,
    FindEventByIdResponse,
    UpdateEventRequest,
    UpdateEventResponse,
    Guest, DeleteEventRequest
} from "../generated/event";

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


    // GRPC communication


    async createEventGRPC(createEventDto: CreateEventRequest): Promise<CreateEventResponse> {
        const newEvent = this.eventRepository.create(createEventDto);
        const guests: any = newEvent.guests ? newEvent.guests.map(guest => ({id: guest.id})) : [];
        const inviteRequests: any = newEvent.inviteRequests ? newEvent.inviteRequests.map(request => ({id: request.id})) : [];
        const savedEvent = await this.eventRepository.save(newEvent);
        return {
            id: savedEvent.id,
            title: savedEvent.title,
            description: savedEvent.description,
            startTime: savedEvent.startTime.toISOString(),
            endTime: savedEvent.endTime.toISOString(),
            guests: guests,
            inviteRequest: inviteRequests,
        };
    }


    async findAllEventsGRPC(find: FindAllEventsRequest): Promise<FindAllEventsResponse> {
        let Events = await this.eventRepository.find(find);
        let x: any = Events.map((item: Event) => {
            const guests: any = item.guests ? item.guests.map(guest => ({id: guest.id})) : [];
            const inviteRequests: any = item.inviteRequests ? item.inviteRequests.map(request => ({id: request.id})) : [];

            return {
                id: item.id,
                title: item.title,
                description: item.description,
                startTime: item.startTime.toISOString(),
                endTime: item.endTime.toISOString(),
                guests: guests,
                inviteRequest: inviteRequests,
            }
        })
        return {events: x}
    }

    async findEventByIdGRPC(data: FindEventByIdRequest): Promise<FindEventByIdResponse> {
        let savedEvent = await this.eventRepository.findOneBy({id: data.id});
        const guests: any = savedEvent.guests ? savedEvent.guests.map(guest => ({id: guest.id})) : [];
        const inviteRequests: any = savedEvent.inviteRequests ? savedEvent.inviteRequests.map(request => ({id: request.id})) : [];

        return {
            id: savedEvent.id,
            title: savedEvent.title,
            description: savedEvent.description,
            startTime: savedEvent.startTime.toISOString(),
            endTime: savedEvent.endTime.toISOString(),
            guests: guests,
            inviteRequest: inviteRequests,
        };
    }

    async updateEventGRPC(data: UpdateEventRequest): Promise<UpdateEventResponse> {
        let updateData: any = {...data}
        delete updateData.id
        await this.eventRepository.update(data.id, updateData);
        let savedEvent = await this.eventRepository.findOneBy({id: data.id});
        const guests: any = savedEvent.guests ? savedEvent.guests.map(guest => ({id: guest.id})) : [];
        const inviteRequests: any = savedEvent.inviteRequests ? savedEvent.inviteRequests.map(request => ({id: request.id})) : [];

        return {
            id: savedEvent.id,
            title: savedEvent.title,
            description: savedEvent.description,
            startTime: savedEvent.startTime.toISOString(),
            endTime: savedEvent.endTime.toISOString(),
            guests: guests,
            inviteRequest: inviteRequests,
        };
    }

    async deleteEventGRPC(data: DeleteEventRequest): Promise<DeleteEventResponse> {
        let savedEvent = await this.eventRepository.findOneBy({id: data.id});
        const guests: any = savedEvent.guests ? savedEvent.guests.map(guest => ({id: guest.id})) : [];
        const inviteRequests: any = savedEvent.inviteRequests ? savedEvent.inviteRequests.map(request => ({id: request.id})) : [];

        await this.eventRepository.delete(data.id);
        return {
            id: savedEvent.id,
            title: savedEvent.title,
            description: savedEvent.description,
            startTime: savedEvent.startTime.toISOString(),
            endTime: savedEvent.endTime.toISOString(),
            guests: guests,
            inviteRequest: inviteRequests,
        };

    }


}
