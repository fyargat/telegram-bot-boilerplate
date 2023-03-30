import { Logger } from "pino";

export interface ILoggerService {
  getChild(name: string): Logger;

  get logger(): Logger;
}
