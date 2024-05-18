import process from 'node:process';
import {Database} from '@/Structures/database.js';
import {UniiClient} from '@/Structures/unii-client.js';

export async function discordBootstrap() {
  const client = new UniiClient();
  client.db = new Database(process.env.POSTGRESQL_URL ?? '');

  client.on('ready', () => {
    client.log.info(`${client.user?.tag} is ready to serve`);
  });

  await client.login(process.env.DISCORD_BOT_TOKEN);
}
