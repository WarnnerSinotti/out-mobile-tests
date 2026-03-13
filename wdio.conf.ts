import minimist from "minimist";

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
  port: isMobile ? 4723 : undefined, // Define a porta apenas para testes móveis
  capabilities: [
    // Se for um teste mobile, use a capability mobile, caso contrário use a capability web
    ...(isMobile
      ? [
          {
            platformName: "Android", // ou 'iOS' se estiver testando no iOS
            "appium:deviceName": "emulator-5554", // Nome do dispositivo ou do emulador
            "appium:platformVersion": "15.0", // Versão do SO no dispositivo
            "appium:app": "android/app.apk", // Caminho para o app no Android; para iOS, use o arquivo .app ou .ipa
            "appium:automationName": "UiAutomator2", // ou 'XCUITest' para iOS
            "appium:noReset": true, // Define se o app deve ser reinstalado em cada execução
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
    ["appium", { command: "appium" }], // Configuração caso o Appium esteja instalado globalmente
  ],
  framework: "mocha",
  reporters: [
    "spec", // Reporter padrão que exibe os resultados no terminal
    [
      "allure",
      {
        // Reporter Allure para gerar os resultados em um formato específico
        outputDir: "allure-results", // Diretório para armazenar os resultados do Allure
        disableWebdriverStepsReporting: true, // Desabilita a gravação dos passos do WebDriver no Allure
        disableWebdriverScreenshotsReporting: true, // Desabilita a gravação das capturas de tela no Allure
      },
    ],
  ],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
};
