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


    const protofile_event = path.join(__dirname, '..', 'public', 'event.proto')


    let uri_grpc_event = 'localhost:'

    if (process.env.ENVIRONMENT !== 'develop') {

        uri_grpc_event = 'event_service:'

    }

    uri_grpc_event = uri_grpc_event + (process.env.PORT_GRCP_EVENT || 50058)


    const grpcOptions_event: MicroserviceOptions = {
        transport: Transport.GRPC,
        options: {
            url: uri_grpc_event,
            package: 'event',
            protoPath: protofile_event,
        },
    };


    app.connectMicroservice(grpcOptions_event);

    await app.startAllMicroservices();
    await app.listen(process.env.PORT_API || 3010);

}

bootstrap();
