import AssertionJavaScriptPage from "../pageobjects/assertion/assertionJavaScriptPage.ts";
import HomePage from "../pageobjects/homePage.ts";
import JavaScriptPage from "../pageobjects/javaScriptPage.ts";

const assertionJavaScriptPage = new AssertionJavaScriptPage();
const homePage = new HomePage();
const javaScriptPage = new JavaScriptPage();

describe("Testes Mobile - JavaScript App", () => {
  it("deve acessar menu JavaScript, clicar em Functions in JS e validar o título", async () => {
    await homePage.AccessJavascriptMenu();
    await javaScriptPage.ValidIntroductionMenu();

    await assertionJavaScriptPage.ValidTitle("Function in JS");
  });
});
