import { IBotContext } from "@/context/context.interface";

export abstract class Scene {
  constructor() {}

  abstract enter(ctx: IBotContext): void;
  abstract leave(ctx: IBotContext): void;
}
