import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {UserModule} from './user/user.module';
import {EventModule} from './event/event.module';
import {GuestModule} from './guest/guest.module';
import {InviteRequestModule} from './invite-request/invite-request.module';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';
import * as path from 'path';
import * as dotenv from 'dotenv';
import * as process from "process";


async function bootstrap(): Promise<void> {

    try {
        dotenv.config();
    } catch (e) {
        console.log('error en proccess')
    }
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT_API || 3010);


    const app_user = await NestFactory.create(UserModule);
    const protofile_user = path.join(__dirname, '..', 'public', 'user.proto')

    const app_event = await NestFactory.create(EventModule);
    const protofile_event = path.join(__dirname, '..', 'public', 'event.proto')

    const app_guest = await NestFactory.create(GuestModule);
    const protofile_guest = path.join(__dirname, '..', 'public', 'guest.proto')

    const app_invite_request = await NestFactory.create(InviteRequestModule);
    const protofile_invite_request = path.join(__dirname, '..', 'public', 'invite_request.proto')

    let uri_grpc_user = 'localhost:'
    let uri_grpc_event = 'localhost:'
    let uri_grpc_guest = 'localhost:'
    let uri_grpc_invite_request = 'localhost:'
    if (process.env.ENVIRONMENT !== 'develop') {
        uri_grpc_user = 'user_service:'
        uri_grpc_event = 'event_service:'
        uri_grpc_guest = 'guest_service:'
        uri_grpc_invite_request = 'invite_request_service:'
    }
    uri_grpc_user = uri_grpc_user + (process.env.PORT_GRCP_USER || 50057)
    uri_grpc_event = uri_grpc_event + (process.env.PORT_GRCP_EVENT || 50058)
    uri_grpc_guest = uri_grpc_guest + (process.env.PORT_GRCP_GUEST || 50059)
    uri_grpc_invite_request = uri_grpc_invite_request + (process.env.PORT_GRCP_INVITE_REQUEST || 50060)


    const grpcOptions_user: MicroserviceOptions = {
        transport: Transport.GRPC,
        options: {
            url: uri_grpc_user,
            package: 'user',
            protoPath: protofile_user,
        },
    };
    const grpcOptions_event: MicroserviceOptions = {
        transport: Transport.GRPC,
        options: {
            url: uri_grpc_event,
            package: 'event',
            protoPath: protofile_event,
        },
    };
    const grpcOptions_guest: MicroserviceOptions = {
        transport: Transport.GRPC,
        options: {
            url: uri_grpc_guest,
            package: 'guest',
            protoPath: protofile_guest,
        },
    };
    const grpcOptions_invite_request: MicroserviceOptions = {
        transport: Transport.GRPC,
        options: {
            url: uri_grpc_invite_request,
            package: 'invite_request',
            protoPath: protofile_invite_request,
        },
    };

    app_user.connectMicroservice(grpcOptions_user);
    app_event.connectMicroservice(grpcOptions_event);
    app_guest.connectMicroservice(grpcOptions_guest);
    app_invite_request.connectMicroservice(grpcOptions_invite_request);
    /*await app_user.startAllMicroservices();
    await app_guest.startAllMicroservices();
    await app_invite_request.startAllMicroservices();*/

    await app_event.startAllMicroservices();

}

bootstrap();
