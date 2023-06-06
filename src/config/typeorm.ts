import { DataSource } from 'typeorm'
import { Product } from '../entity/Product'

const appDataSource = new DataSource({
    type: "postgres",
    host: 'db',
    port: 5432,
    username: 'user',
    password: 'fb4edf5e391cdf7c',
    database: 'motivy',
    entities: [Product],
    synchronize: true
})

export async function connect() {
    try {
        await appDataSource.initialize()
    } catch(err) {
        console.error(err)
    }
} 