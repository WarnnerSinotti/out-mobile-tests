import HomePage from "../pageobjects/homePage.ts";
import JavaScriptPage from "../pageobjects/javaScriptPage.ts";

const homePage = new HomePage();
const javaScriptPage = new JavaScriptPage();

describe("My Login application", () => {
  it("should login with valid credentials", async () => {
    await homePage.AccessJavascriptMenu();
    await javaScriptPage.ValidIntroductionMenu();
  });
});
