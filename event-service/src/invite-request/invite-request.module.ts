import {Module} from '@nestjs/common';

import {TypeOrmModule} from '@nestjs/typeorm';
import {InviteRequest} from './invite-request.entity';
import {InviteRequestController} from "./invite-request.controller";
import {InviteRequestService} from "./invite-request.service";


@Module({
    imports: [TypeOrmModule.forFeature([InviteRequest])],
    controllers: [InviteRequestController],
    providers: [InviteRequestService],
})
export class InviteRequestModule {
}
