import { $ } from "@wdio/globals";

export default class JavaScriptPage {
  public get btnFunctionsInJS() {
    return $(
      '//android.widget.RelativeLayout[.//android.widget.TextView[@text="6.  Functions in JS"]]',
    );
  }

  public async ValidIntroductionMenu() {
    await this.btnFunctionsInJS.waitForDisplayed({ timeout: 5000 });
    await this.btnFunctionsInJS.click();
  }
}
