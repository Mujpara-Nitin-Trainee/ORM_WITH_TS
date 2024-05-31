import 'ts-node/register';
import { DB_USER, DB_PASS, DB_NAME, DB_HOST } from '../configs';

export const username = DB_USER;
export const password = DB_PASS;
export const database = DB_NAME;
export const host = DB_HOST;
export const dialect = 'mysql';
export const port = 3306;