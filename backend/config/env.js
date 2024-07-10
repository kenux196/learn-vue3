import dotenv from 'dotenv';
import path from 'node:path';

dotenv.config({
  path: path.resolve(process.env.NODE_ENV === 'prod' ? '.env.prod' : '.env.dev'),
});

console.log(path.resolve(process.env.NODE_ENV == 'prod' ? '.env.prod' : '.env.dev'));
console.log(process.env.NODE_ENV);
console.log(process.env.SERVER_PORT);
