import { $ } from "@wdio/globals";

export default class AssertionJavaScriptPage {
  public get txtPageTitle() {
    return $(
      '//*[@resource-id="com.ubproject.learnautomationtesting:id/title"]',
    );
  }

  public get btnBack() {
    return $('//*[@resource-id="com.ubproject.learnautomationtesting:id/backBtn"]');
  }

  public async ValidTitle(expectedTitle: string) {
    await this.txtPageTitle.waitForDisplayed({ timeout: 5000 });
    const titleText = await this.txtPageTitle.getText();
    expect(titleText).toBe(expectedTitle);
    await this.btnBack.click();
  }
}
