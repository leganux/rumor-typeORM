import {TypeOrmModuleOptions} from '@nestjs/typeorm';

import * as dotenv from 'dotenv';


dotenv.config();


let port = Number(process.env.DB_PORT) || 5432
const ormconfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.DB_HOST ,
    port: port, // Use parseInt for number conversion
    username: process.env.DB_USERNAME || 'admin',
    password: process.env.DB_PASSWORD || '1234567890',
    database: process.env.DB_DATABASE || 'rumor',
    entities: [__dirname + '/**/*.entity{.ts,.js}'], // Path to your entity classes
    autoLoadEntities: true,
    synchronize: true, // Set to false in production for safety
};
console.log('AAAAAA * ** * * * * ** * * ', ormconfig, port, process.env)
export default ormconfig;
