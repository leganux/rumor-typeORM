// event.entity.ts
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import {Guest} from './../guest/guest.entity';
import {InviteRequest} from "../invite-request/invite-request.entity";

@Entity()
export class Event {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    startTime: Date;

    @Column()
    endTime: Date;

    @OneToMany(() => Guest, guest => guest.event)
    guests: Guest[];

    @OneToMany(() => InviteRequest, inviteRequest => inviteRequest.event)
    inviteRequests: InviteRequest[];
}
