import { WizardContext, WizardSession } from "telegraf/typings/scenes";

interface ISession extends WizardSession {}

export interface IBotContext extends WizardContext {
  session: ISession;
}
