import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

import {UserModule} from './user/user.module';
import {EventModule} from './event/event.module';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';
import * as path from 'path';
import * as dotenv from 'dotenv';
import * as process from "process";


async function bootstrap() {

    try {
        dotenv.config();
    } catch (e) {
        console.log('error en proccess')
    }
    const app = await NestFactory.create(AppModule);
    await app.listen(process.env.PORT_API || 3007);


    const app_user = await NestFactory.create(UserModule);
    const protofile_user = path.join(__dirname, '..', 'public', 'user.proto')

    const app_event = await NestFactory.create(EventModule);
    const protofile_event = path.join(__dirname, '..', 'public', 'event.proto')

    let uri_grpc_user = 'localhost:'
    let uri_grpc_event = 'localhost:'
    if (process.env.ENVIRONMENT !== 'develop') {
        uri_grpc_user = 'user_service:'
        uri_grpc_event = 'event_service:'
    }
    uri_grpc_user = uri_grpc_user + (process.env.PORT_GRCP_USER || 50057)
    uri_grpc_event = uri_grpc_event + (process.env.PORT_GRCP_EVENT || 50058)


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

    app_user.connectMicroservice(grpcOptions_user);
    app_event.connectMicroservice(grpcOptions_event);
    await app_user.startAllMicroservices();
    await app_event.startAllMicroservices();


}

bootstrap();
