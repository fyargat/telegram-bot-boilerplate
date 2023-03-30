import RedisSession from "telegraf-session-redis";

import { IConfigService } from "@/config/config.interface";

export const ensureRedisSession = (configService: IConfigService) => {
  const redisHost = configService.get("REDIS_HOST");
  const redisPort = configService.get("REDIS_PORT");

  const session = new RedisSession({
    store: {
      host: redisHost ?? "127.0.0.1",
      port: redisPort ?? 6379,
    },
  });

  return session;
};
