import { $ } from "@wdio/globals";

export default class HomePage {
  public get btnJavascript() {
    return $('//android.widget.TextView[@text="JavaScript"][1]');
  }

  public async AccessJavascriptMenu() {
    await this.btnJavascript.waitForDisplayed({ timeout: 5000 });
    await this.btnJavascript.click();
  }
}
