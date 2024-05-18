import {
  ActivityType,
  Client,
  IntentsBitField,
  PresenceUpdateStatus,
} from 'discord.js';
import {type Database} from './database.js';
import {makeLogger} from '@/Utils/make-logger.js';

/**
 * @class UniiClient
 */
export class UniiClient extends Client {
  public log = makeLogger('UniiClient');
  public db!: Database;

  /**
   * @constructor
   */
  constructor() {
    super({
      allowedMentions: {
        repliedUser: true,
      },
      intents: [
        IntentsBitField.Flags.MessageContent,
        IntentsBitField.Flags.Guilds,
        // Tracking member voice states
        IntentsBitField.Flags.GuildVoiceStates,
        // Get guild members
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        // Tracking member messages typing rate
        IntentsBitField.Flags.GuildMessageTyping,
        // Track guild events
        IntentsBitField.Flags.GuildScheduledEvents,
      ],
      presence: {
        status: PresenceUpdateStatus.DoNotDisturb,
        activities: [
          {
            name: 'UNIICODE',
            state: 'UNIICODE',
            type: ActivityType.Competing,
          },
        ],
      },
    });
  }
}
