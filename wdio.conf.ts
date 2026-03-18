import Allure from "@wdio/allure-reporter";
import dotenv from "dotenv";
import minimist from "minimist";
import { homedir } from "os";
import { resolve } from "path";
dotenv.config();

// Appium precisa de ANDROID_HOME - usa caminho padrão se não estiver definido
const defaultAndroidSdk = resolve(homedir(), "Android", "Sdk");
if (!process.env.ANDROID_HOME && !process.env.ANDROID_SDK_ROOT) {
  process.env.ANDROID_HOME = defaultAndroidSdk;
}

const argv = minimist(process.argv.slice(2));
const isMobile = argv.mobile || false;

export const config: WebdriverIO.Config = {
  runner: "local",
  tsConfigPath: "./test/tsconfig.json",
  specs: [
    isMobile ? "./test/mobile/**/*.ts" : "./test/web/**/*.ts", // Use a especificação correspondente
  ],
  // Patterns to exclude.
  exclude: [
    // Adicione aqui padrões de arquivos que você deseja excluir dos testes
  ],
  maxInstances: 10,
  hostname: isMobile ? "127.0.0.1" : "localhost", // IPv4 explícito evita ECONNREFUSED com Node 17+
  port: isMobile ? 4723 : undefined,
  capabilities: [
    // Se for um teste mobile, use a capability mobile, caso contrário use a capability web
    ...(isMobile
      ? [
          {
            platformName: "Android", // ou 'iOS' se estiver testando no iOS
            "appium:deviceName": "emulator-5554", // Nome do dispositivo ou do emulador
            "appium:platformVersion":
              process.env.ANDROID_PLATFORM_VERSION || "14", // CI usa API 34 (Android 14); local: defina no .env se diferente
            "appium:app": "android/app.apk",
            "appium:automationName": "UiAutomator2",
            "appium:noReset": true,
            "appium:autoGrantPermissions": true, // Concede permissões (ex: notificações) automaticamente
          },
        ]
      : [
          {
            browserName: "chrome", // Capability para o navegador Chrome
          },
        ]),
  ],
  logLevel: "info",
  logLevels: {
    webdriver: "info",
    "@wdio/appium-service": "info",
  },
  bail: 0,
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: [
    "visual",
    [
      "appium",
      {
        command: "appium",
        args: { address: "127.0.0.1" }, // Appium escuta em IPv4
      },
    ],
  ],
  framework: "mocha",
  reporters: [
    "spec", // Reporter padrão que exibe os resultados no terminal
    [
      "allure",
      {
        // Reporter Allure para gerar os resultados em um formato específico
        outputDir: "allure-results",
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false, // Habilita screenshots no relatório
      },
    ],
  ],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  afterTest: async (_test, _context, result) => {
    if (result.error && isMobile) {
      try {
        const screenshot = await browser.takeScreenshot();
        Allure.addAttachment(
          "Screenshot on failure",
          Buffer.from(screenshot, "base64"),
          "image/png",
        );
      } catch {
        // Ignora se a sessão já foi encerrada
      }
    }
  },
};
