import { $ } from "@wdio/globals";

export default class JavaScriptPage {
  public get btnIntroduction() {
    return $(
      '//android.widget.RelativeLayout[.//android.widget.TextView[@text="1.  Introduction"]]',
    );
  }

  public get txtIntroductionTitle() {
    return $(
      '//*[@resource-id="com.ubproject.learnautomationtesting:id/title"]',
    );
  }

  public get btnBack() {
    return $(
      '//*[@resource-id="com.ubproject.learnautomationtesting:id/backBtn"]',
    );
  }

  public async ValidIntroductionMenu() {
    await this.btnIntroduction.waitForDisplayed({ timeout: 5000 });
    await this.btnIntroduction.click();

    await this.txtIntroductionTitle.waitForDisplayed({ timeout: 5000 });
    const titleText = await this.txtIntroductionTitle.getText();
    expect(titleText).toBe("Function in JS");

    await this.btnBack.click();
  }
}
