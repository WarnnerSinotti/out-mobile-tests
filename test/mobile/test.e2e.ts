import HomePage from "../pageobjects/homePage.ts";
import JavaScriptPage from "../pageobjects/javaScriptPage.ts";

const homePage = new HomePage();
const javaScriptPage = new JavaScriptPage();

describe("Learn Automation Testing - JavaScript", () => {
  it("deve acessar menu JavaScript, clicar em Introduction e validar o título", async () => {
    await homePage.AccessJavascriptMenu();
    await javaScriptPage.ValidIntroductionMenu();
  });
});
