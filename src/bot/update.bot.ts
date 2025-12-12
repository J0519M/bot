import { Hears, On, Start, Update, Ctx, Action } from "nestjs-telegraf";
import { Context } from "telegraf";

@Update()
export class BotUpdate {
 
  @Start()
  async onStart(@Ctx() ctx: Context) {
    await ctx.reply(`Hush kelibsiz, ${ctx.from?.first_name}!`, {
      reply_markup: {
        keyboard: [[{ text: "Info" }, { text: "Profile" }], [{ text: "Help" }]],
        resize_keyboard: true,
      },
    });
  }

  
  @Hears("Info")
  async getInfo(@Ctx() ctx: Context) {
    await ctx.reply("Kerakli bo‘limni tanlang:", {
      reply_markup: {
        inline_keyboard: [
          [
            { text: "Shaxsiy", callback_data: "personal_info" },
            { text: "Texnik", callback_data: "technical_info" },
          ],
        ],
      },
    });
  }

 
  @Hears("Profile")
  async profile(@Ctx() ctx: Context) {
    await ctx.reply(
      `Sizning profilingiz:\n\nIsm: ${ctx.from?.first_name}\nID: ${ctx.from?.id}`
    );
  }

  
  @Hears("Help")
  async help(@Ctx() ctx: Context) {
    await ctx.reply("Yordam bo‘limi. Savollaringiz bo‘lsa yozing.");
  }

  
  @Action("personal_info")
  async personalInfo(@Ctx() ctx: Context) {
    await ctx.answerCbQuery();
    await ctx.reply("Bu yerda sizning shaxsiy ma'lumotlaringiz bo‘ladi.");
  }

  
  @Action("technical_info")
  async technicalInfo(@Ctx() ctx: Context) {
    await ctx.answerCbQuery();
    await ctx.reply("Texnik ma'lumotlar:");
  }

  
  @On("text")
  async onText(@Ctx() ctx: Context) {
    if ("text" in (ctx.message || {})) {
      if (ctx.message && "text" in ctx.message) {
        await ctx.reply(`Siz yozdingiz: ${ctx.message.text}`);
      } else {
        await ctx.reply("Yuborilgan xabar matn emas.");
      }
    } else {
      await ctx.reply("Yuborilgan xabar matn emas.");
    }
  }
}
