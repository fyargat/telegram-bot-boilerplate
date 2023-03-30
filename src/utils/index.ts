import { IBotContext } from "@/context/context.interface";

export const removeLeadingWhitespace = (string: string): string =>
  string
    .split("\n")
    .map((s) => s.trim())
    .join("\n");

export const getUserId = (ctx: IBotContext): number | null => {
  if (ctx.update && "message" in ctx.update) {
    return ctx?.message?.chat?.id ?? null;
  }

  if (ctx.update && "callback_query" in ctx.update) {
    return ctx?.update?.callback_query?.from?.id ?? null;
  }

  return null;
};
