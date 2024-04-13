import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

import {MicroserviceOptions, Transport} from '@nestjs/microservices';
import * as path from 'path';
import * as dotenv from 'dotenv';


async function bootstrap(): Promise<void> {
    try {
        dotenv.config();
    } catch (e) {
        console.log('error en proccess')
    }
    const app = await NestFactory.create(AppModule);
    const protofile_guest = path.join(__dirname, '..', 'public', 'guest.proto')
    let uri_grpc_guest = 'localhost:'
    if (process.env.ENVIRONMENT !== 'develop') {
        uri_grpc_guest = 'guest_service:'
    }
    uri_grpc_guest = uri_grpc_guest + (process.env.PORT_GRCP_GUEST || 50059)

    const grpcOptions_guest: MicroserviceOptions = {
        transport: Transport.GRPC,
        options: {
            url: uri_grpc_guest,
            package: 'guest',
            protoPath: protofile_guest,
        },
    };

    app.connectMicroservice(grpcOptions_guest);
    await app.listen(process.env.PORT_API || 3009);
    await app.startAllMicroservices();
}

bootstrap();
