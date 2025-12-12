import { On, Start, Update } from "nestjs-telegraf";


@Update()
export class BotUpdate {
  @Start()
  onStart(ctx: any) {
    ctx.reply(`Welcome to the bot! ${ctx.message!.from.first_name}`);
    return;
  }

  @On("text")
  onText(ctx: any) {
    ctx.telegraf.sendMessage(ctx.message!.from.id);
  }
}