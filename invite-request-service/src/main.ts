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

    const protofile_invite_request = path.join(__dirname, '..', 'public', 'invite_request.proto')


    let uri_grpc_invite_request = 'localhost:'
    if (process.env.ENVIRONMENT !== 'develop') {

        uri_grpc_invite_request = 'invite_request_service:'
    }

    uri_grpc_invite_request = uri_grpc_invite_request + (process.env.PORT_GRCP_INVITE_REQUEST || 50060)


    const grpcOptions_invite_request: MicroserviceOptions = {
        transport: Transport.GRPC,
        options: {
            url: uri_grpc_invite_request,
            package: 'invite_request',
            protoPath: protofile_invite_request,
        },
    };


    app.connectMicroservice(grpcOptions_invite_request);


    await app.startAllMicroservices();
    await app.listen(process.env.PORT_API || 3008);

}

bootstrap();
