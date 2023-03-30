import { Telegraf } from "telegraf";

import { IBotContext } from "@/context/context.interface";

import { loggerService } from "@/logger/logger.service";

import { SceneKeys } from "@/constants/sceneKeys";

import { Command } from "@/commands/command.class";

const logger = loggerService.getChild("StartCommand");

export class StartCommand extends Command {
  constructor(bot: Telegraf<IBotContext>) {
    super(bot);
  }

  handle(): void {
    logger.info(`handle`);

    this.bot.start(async (ctx) => {
      await ctx.reply("Start");
      await ctx.scene.enter(SceneKeys.MainMenu);
    });
  }
}
