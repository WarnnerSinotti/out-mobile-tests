import { $ } from "@wdio/globals";

export default class HomePage {
  public get btnJavascript() {
    return $(
      '(//*[@resource-id="com.ubproject.learnautomationtesting:id/javascript"])[1]',
    );
  }

  public async ApproveNotificationsIfPresent() {
    try {
      const allowBtn = $(
        '//android.widget.Button[contains(@text, "Allow") or contains(@text, "Permitir")]',
      );
      await allowBtn.waitForDisplayed({ timeout: 3000 });
      await allowBtn.click();
    } catch {
      // Ignora se o botão não estiver presente
    }
  }

  public async AccessJavascriptMenu() {
    await this.ApproveNotificationsIfPresent();
    await this.btnJavascript.waitForDisplayed({ timeout: 5000 });
    await this.btnJavascript.click();
  }
}
