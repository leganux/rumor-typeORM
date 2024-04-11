import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

import {UserModule} from './user/user.module';
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

    let uri_grpc = 'product_service:'
    if (process.env.ENVIRONMENT == 'develop') {
        uri_grpc = 'localhost:'
    }
    uri_grpc = uri_grpc + (process.env.PORT_GRCP || 50057)


    const grpcOptions_user: MicroserviceOptions = {
        transport: Transport.GRPC,
        options: {
            url: uri_grpc,
            package: 'user',
            protoPath: protofile_user,
        },
    };

    app_user.connectMicroservice(grpcOptions_user);
    await app_user.startAllMicroservices();


}

bootstrap();
