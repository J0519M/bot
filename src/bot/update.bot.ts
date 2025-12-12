import { Hears, On, Start, Update, Ctx, Action } from "nestjs-telegraf";
import { Context } from "telegraf";


@Update()
export class BotUpdate {
  @Start()
  onStart(ctx: any) {
    ctx.reply(`Hush kelibsiz ${ctx.message!.from.first_name}!`, {
      reply_markup: {
        keyboard: [
          [{ text: "Info" }, { text: "Profile" }],
          [{ text: "Help" }]
        ],
        resize_keyboard: true,
      }
    });
    return;
  }

  // @On("text")
  // onText(ctx: any) {
  //   ctx.telegraf.sendMessage(ctx.message!.from.id);
  //   return;
  // }

  @Hears("Info")
  getInfo(@Ctx() ctx: Context) {
    return ctx.reply("This is some information about the bot.", {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: "Shaxsiy",
              callback_data: "personal_info",
            },
          ],
          [
            {
              text: "Texnik",
              callback_data: "technical_info",
            },
          ],

        ]
      }
    })
    return
  }

  @Action("shaxsiy")
  getprivate(@Ctx() ctx: Context) {
   ctx.reply("This is your personal information.");
    return
  }
}