import { NarrowedContext } from "telegraf";
import { CallbackQuery, Update } from "telegraf/typings/core/types/typegram";

import { IBotContext } from "@/context/context.interface";

export type ActionCtxType = NarrowedContext<
  IBotContext & {
    match: RegExpExecArray;
  },
  Update.CallbackQueryUpdate<CallbackQuery>
>;
