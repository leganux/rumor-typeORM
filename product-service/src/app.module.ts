import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';


import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ServeStaticModule} from '@nestjs/serve-static';
import {join} from 'path';
import {UserModule} from './user/user.module';
import {EventModule} from './event/event.module';
import {GuestModule} from './guest/guest.module';
import {InviteRequestModule} from './invite-request/invite-request.module';
import ormconfig from './ormconfig';


@Module({
    imports: [
        TypeOrmModule.forRoot(ormconfig),
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'public'),
        }),
        UserModule,
        EventModule,
        GuestModule,
        InviteRequestModule,

    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
