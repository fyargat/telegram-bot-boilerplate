import { bot } from "@/bot";

import { loggerService } from "@/logger/logger.service";

const logger = loggerService.getChild("App index");

(async () => {
  logger.info("Bot init");
  bot.init();
})();
