import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import * as path from 'path';
import * as dotenv from 'dotenv';

async function bootstrap(): Promise<void> {
    try {
        dotenv.config();
    } catch (e) {
        console.log('Error en proccess', e);
    }

    const app = await NestFactory.create(AppModule);

    // Configuración y conexión del microservicio gRPC dentro de AppModule
    const protofileUser = path.join(__dirname, '..', 'public', 'user.proto');
    let uriGrpcUser = 'localhost:';

    if (process.env.ENVIRONMENT !== 'develop') {
        uriGrpcUser = 'user_service:';
    }

    uriGrpcUser += process.env.PORT_GRCP_USER || 50057;

    const grpcOptionsUser: MicroserviceOptions = {
        transport: Transport.GRPC,
        options: {
            url: uriGrpcUser,
            package: 'user',
            protoPath: protofileUser,
        },
    };

    app.connectMicroservice(grpcOptionsUser);

    await app.startAllMicroservices();
    await app.listen(process.env.PORT_API || 3007);
}

bootstrap();
