import { IBotContext } from "@/context/context.interface";

import { ApiError } from "@/exceptions";
import { Exception } from "@/exceptions/constants";

import { loggerService } from "@/logger/logger.service";

const logger = loggerService.getChild("Error Middleware");

export const ensureErrorResponder = async (
  error: unknown,
  ctx: IBotContext,
): Promise<void> => {
  if (error instanceof ApiError) {
    await ctx.reply(error.message);
    return;
  }

  logger.error(error);

  await ctx.reply(Exception.ServerError);
  return;
};
