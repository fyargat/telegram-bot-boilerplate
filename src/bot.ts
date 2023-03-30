import { Telegraf } from "telegraf";

import { IConfigService } from "@/config/config.interface";
import { config } from "@/config/config.service";

import { IBotContext } from "@/context/context.interface";

import { loggerService } from "@/logger/logger.service";

import { commands } from "@/constants/commands";

import { authMiddleware } from "@/middleware/auth.middleware";
import { ensureErrorResponder } from "@/middleware/error.middleware";
import { ensureRedisSession } from "@/middleware/redis.session.middleware";
import { ensureScenesStage } from "@/middleware/scene.middleware";

import { Command } from "@/commands/command.class";
import { StartCommand } from "@/commands/start.command";

const logger = loggerService.getChild("Bot");

class Bot {
  bot: Telegraf<IBotContext>;
  commands: Command[] = [];

  constructor(private readonly configService: IConfigService) {
    logger.info("constructor");
    const token = this.configService.get("TELEGRAM_TOKEN");

    this.bot = new Telegraf<IBotContext>(token);
    this.bot.use(authMiddleware);
    this.bot.use(ensureRedisSession(config));
    this.bot.catch(ensureErrorResponder);
  }

  private initCommands() {
    logger.info("initCommands");

    this.bot.telegram.setMyCommands(commands);
    this.commands = [new StartCommand(this.bot)];

    for (const command of this.commands) {
      command.handle();
    }
  }

  init() {
    logger.info("init");

    this.bot.use(ensureScenesStage().middleware());

    this.initCommands();
    this.bot.launch();
  }
}

export const bot = new Bot(config);
