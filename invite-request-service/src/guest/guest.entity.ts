// guest.entity.ts
import {Entity, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {User} from './../user/user.entity';
import {Event} from './../event/event.entity';

@Entity()
export class Guest {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(() => Event, event => event.guests)
    event: Event;

    @ManyToOne(() => User, user => user.guests)
    user: User;
}
