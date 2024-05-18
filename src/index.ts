import process from 'node:process';
import dotenv from 'dotenv';

// Initializing .env
dotenv.config({
  encoding: 'utf8',
  debug: process.env.NODE_ENV === 'development',
});

process.stdout.write('Hello UNIICODE!');
