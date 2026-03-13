import { $ } from "@wdio/globals";

export default class JavaScriptPage {
  public get btnIntroduction() {
    return $(
      '//android.widget.TextView[@resource-id="com.ubproject.learnautomationtesting:id/textView1"]',
    );
  }

  public get txtIntroduction() {
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
    const btnIntroduction = await this.btnIntroduction.getText();
    expect(btnIntroduction).toBe("1.  Introduction");

    await this.btnIntroduction.click();

    const txtIntroduction = await this.txtIntroduction.getText();
    expect(txtIntroduction).toBe("Introduction");

    await this.btnBack.click();
  }
}
