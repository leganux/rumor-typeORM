// user/user.entity.ts
import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm';
import {Guest} from './../guest/guest.entity';
import {InviteRequest} from './../invite-request/invite-request.entity';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column({nullable: true})
    dateOfBirth: Date;

    // Definir relación con la entidad Guest
    @OneToMany(() => Guest, guest => guest.user)
    guests: Guest[];

    @OneToMany(() => InviteRequest, inviteRequest => inviteRequest.requester)
    sentInvitations: InviteRequest[];

    @OneToMany(() => InviteRequest, inviteRequest => inviteRequest.requester)
    receivedInvitations: InviteRequest[];

}
