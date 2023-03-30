import { Markup } from "telegraf";

import { Buttons } from "@/scenes/main-menu/constants";

export const mainMenu = Markup.keyboard([[Buttons.Index]]).resize();
