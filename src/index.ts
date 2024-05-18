import process from 'node:process';
import dotenv from 'dotenv';
import avvio from 'avvio';
import {discordBootstrap} from './Boostraps/discord-boot.js';

// Initializing .env
dotenv.config({
  encoding: 'utf8',
  debug: process.env.NODE_ENV === 'development',
});

const app = avvio();

app.use(discordBootstrap);

app.on('start', () => {
  console.log('Avvio started');
});

app.ready((error) => {
  if (error) {
    throw error;
  }

  console.log('Avvio ready');
});
