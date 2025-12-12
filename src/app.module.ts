import { Module } from "@nestjs/common";
import { TelegrafModule } from "nestjs-telegraf";
import { ConfigModule } from "@nestjs/config";
import { BotModule } from "./bot/module.bot";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TelegrafModule.forRoot({
      token: process.env.BOT_TOKEN as string,
    }),

    BotModule, // <-- Kiritish esdan chiqmasin
  ],
})
export class AppModule {}
