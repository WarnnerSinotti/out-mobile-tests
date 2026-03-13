import { $ } from "@wdio/globals";

import Page from "./page.js";

class LoginPage extends Page {
  public get inputUsername() {
    return $("#username");
  }

  public get inputPassword() {
    return $("#password");
  }

  public get btnSubmit() {
    return $('button[type="submit"]');
  }

  public async Login(username: string, password: string) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.btnSubmit.click();
  }

  public Open() {
    return super.Open("login");
  }
}

export default new LoginPage();
