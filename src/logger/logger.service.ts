import pino, { Logger } from "pino";
import pretty from "pino-pretty";

import { ILoggerService } from "@/logger/logger.interface";

const stream = pretty({
  colorize: true,
  translateTime: "SYS:yyyy-mm-dd hh:MM:ss",
  ignore: "pid,hostname,filename",
  customPrettifiers: {
    name: (name) => `\x1b[33m ${name} \x1b[0m`,
  },
});

class LoggerService implements ILoggerService {
  private _logger: Logger;

  constructor(stream: pretty.PrettyStream) {
    this._logger = pino(
      {
        level: "info",
      },
      stream,
    );
  }

  getChild(name: string): Logger {
    return this._logger.child({ name });
  }

  get logger() {
    return this._logger;
  }
}

export const loggerService = new LoggerService(stream);
