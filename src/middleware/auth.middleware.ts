import { IBotContext } from "@/context/context.interface";

import { ApiError } from "@/exceptions";

import { loggerService } from "@/logger/logger.service";

import { getUserId } from "@/utils";

const logger = loggerService.getChild("authMiddleware");

export const authMiddleware = async (
  ctx: IBotContext,
  next: () => Promise<void>,
): Promise<void> => {
  const userId = getUserId(ctx);
  logger.info(`userId ${userId}`);

  if (!userId) {
    throw ApiError.Forbidden();
  }

  await next();
};
