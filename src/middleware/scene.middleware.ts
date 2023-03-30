import { Scenes } from "telegraf";

import { IBotContext } from "@/context/context.interface";

import { MainMenuScene } from "@/scenes/main-menu";

const mainMenuScene = new MainMenuScene();

export const ensureScenesStage = () => {
  const stage = new Scenes.Stage<IBotContext>([mainMenuScene.scene]);

  return stage;
};
