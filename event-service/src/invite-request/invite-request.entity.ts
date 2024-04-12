// invite-request.entity.ts
import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn} from 'typeorm';
import {User} from './../user/user.entity';
import {Event} from './../event/event.entity';

@Entity()
export class InviteRequest {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => User, user => user.sentInvitations)
    requester: User;

    @ManyToOne(() => User, user => user.receivedInvitations)
    invitedUser: User;

    @ManyToOne(() => Event, event => event.inviteRequests)
    event: Event;

    @Column()
    status: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}
