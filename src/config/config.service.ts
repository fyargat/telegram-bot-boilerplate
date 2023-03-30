import { DotenvParseOutput, config as cnfg } from "dotenv";
import path from "path";

import { IConfigService } from "@/config/config.interface";

import { loggerService } from "@/logger/logger.service";

const logger = loggerService.getChild("ConfigService");

export class ConfigService implements IConfigService {
  private config: DotenvParseOutput;

  constructor() {
    const configPath = path.resolve(process.cwd(), `.env`);

    const { error, parsed } = cnfg({ path: configPath });

    if (error) {
      throw new Error("Не найден файл .env");
    }

    if (!parsed) {
      throw new Error("Пустой файл .env");
    }

    this.config = parsed;
  }

  get(key: string): string {
    logger.info(`get key ${key}`);

    const res = this.config[key];

    if (!res) {
      throw new Error("Нет такого ключа");
    }

    return res;
  }
}

export const config = new ConfigService();
