import { createConnection } from 'typeorm';
import path from 'path';

import { environment } from './environment';

export async function connect() {
    console.log('Parámetros de conexión a base de datos:')
    console.log('DB_USERNAME:', environment.DB_USERNAME)
    console.log('DB_PASSWORD:', environment.DB_PASSWORD)
    console.log('DB_DATABASE:', environment.DB_DATABASE)
    await createConnection({
        type: 'postgres',
        port: Number(environment.DB_PORT),
        username: environment.DB_USERNAME,
        password: environment.DB_PASSWORD,
        database: environment.DB_DATABASE,
        entities: [
            path.join(__dirname, '../entity/**/**.ts'),
        ],
        synchronize: true,
    })
    console.log("Database running");
}