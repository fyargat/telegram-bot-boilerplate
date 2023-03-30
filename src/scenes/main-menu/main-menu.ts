import { Scenes } from "telegraf";

import { IBotContext } from "@/context/context.interface";

import { loggerService } from "@/logger/logger.service";

import { SceneKeys } from "@/constants/sceneKeys";

import { mainMenu } from "@/scenes/main-menu/keyboard";
import { Scene } from "@/scenes/scene.class";

const logger = loggerService.getChild("MainMenuScene");

export class MainMenuScene extends Scene {
  public scene: Scenes.BaseScene<IBotContext>;
  public sceneKey: string = SceneKeys.MainMenu;

  constructor() {
    super();
    this.scene = new Scenes.BaseScene(this.sceneKey);
    this.scene.enter(this.enter);
    this.scene.leave(this.leave);
    this.scene.start(async (ctx) => {
      await ctx.scene.leave();
    });
    this.scene.use((ctx) => {
      ctx.reply("Выберите действие");
    });
  }

  async enter(ctx: IBotContext): Promise<void> {
    logger.info("enter");

    await ctx.reply("Выберите действие", mainMenu);
  }

  async leave(ctx: IBotContext): Promise<void> {
    logger.info("leave");
    await ctx.reply("Main leaves");
  }
}
