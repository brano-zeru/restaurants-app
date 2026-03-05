import {Pool, QueryResult, QueryResultRow} from 'pg'
import {config} from 'dotenv'

config()

const db = {
    pool: new Pool({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        host: process.env.DB_HOST,
        database: process.env.DB_NAME,
        port: Number(process.env.DB_PORT),
    })
}

export const query = async <T extends QueryResultRow>(
  text: string,
  params?: any[]
): Promise<QueryResult<T>> => {
  return db.pool.query(text, params);
};