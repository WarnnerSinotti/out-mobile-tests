# out-e2e-webDriverIO

Projeto desenvolvido para testes web e mobile com uso do framework [**WebdriverIO**](https://webdriver.io/), trazendo práticas de automação de testes E2E (WEB e MOBILE) e API para validar a qualidade e a performance das aplicações.

---

## 📦 Configuração do Projeto

### Pré-Requisitos

-   **Node.js**: Para rodar o projeto, é necessário ter o [Node.js](https://nodejs.org/en/) (preferencialmente a versão LTS).
-   **Git**: Usamos o [Git](https://git-scm.com/) para controle de versão. Recomendamos o [GitHub Desktop](https://desktop.github.com/) para quem prefere uma interface gráfica.
-   **Editor de Código**: Recomendamos o uso do [Visual Studio Code](https://code.visualstudio.com/) (VS Code) para edição de código, com as extensões sugeridas abaixo.
-   **[Allure Reporter](https://docs.qameta.io/allure/)**: Ferramenta opcional para visualização de relatórios de testes interativos.

### 1. Instalação do WebdriverIO

Siga as instruções de instalação do WebdriverIO com base no seu sistema operacional no link: [WebdriverIO](https://webdriver.io/docs/gettingstarted).

---

### 2. Extensões Recomendadas para o VS Code 🔌

-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode): Para formatação de código.
-   [Pretty TypeScript Errors](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors): Melhor visualização de erros em TypeScript.
-   [Git Extension Pack](https://marketplace.visualstudio.com/items?itemName=donjayamanne.git-extension-pack): Pacote de extensões para uso do Git.
-   [JavaScript and TypeScript Nightly](https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next): Última versão para suporte a TypeScript.
-   [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint): Para linting do código.

---

### 3. Instalação das Dependências 📥

Na **branch `develop`**, execute:

```bash
# Escolha o comando adequado ao seu ambiente
yarn install
# ou
npm install
# ou
pnpm install
```

---

### 4. Executando o Projeto ▶️

Crie um arquivo `wdio.conf.js` com base no `wdio.conf.exemplo.js`.

Para iniciar o projeto, execute:

```bash
npx wdio run wdio.conf.js
```

Se tudo estiver correto, o projeto executará o WebdriverIO em modo CLI 🚀.

---

### 📱 Requisitos e Instalação para Testes Android

Para executar os testes mobile (`npm run test:mobile`), é necessário configurar o ambiente Android. Siga os passos abaixo:

#### 1. Java JDK (versão 8 ou superior)

-   **Windows**: Baixe em [Adoptium](https://adoptium.net/) ou [Oracle JDK](https://www.oracle.com/java/technologies/downloads/).
-   **Linux (Debian/Ubuntu)**:
    ```bash
    sudo apt update
    sudo apt install openjdk-17-jdk
    ```
-   **macOS**:
    ```bash
    brew install openjdk@17
    ```

#### 2. Android Studio e Android SDK

-   Instale o [Android Studio](https://developer.android.com/studio).
-   Durante a instalação, ou em **Settings → Appearance & Behavior → System Settings → Android SDK**, instale:
    - **Android SDK Platform-Tools**
    - **Android SDK Platform** (API 34 ou superior recomendado para o emulador)

#### 3. Variáveis de Ambiente

Configure as variáveis no sistema:

| Variável     | Descrição                                        | Exemplo (Linux/macOS)                    |
| ------------ | ------------------------------------------------- | ---------------------------------------- |
| `JAVA_HOME`  | Caminho da instalação do JDK                      | `/usr/lib/jvm/java-17-openjdk`           |
| `ANDROID_HOME` | Caminho do Android SDK (geralmente dentro do Android Studio) | `$HOME/Android/Sdk` |

**Linux/macOS** — adicione ao `~/.bashrc` ou `~/.zshrc`:

```bash
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk
export ANDROID_HOME=$HOME/Android/Sdk
export PATH=$PATH:$JAVA_HOME/bin:$ANDROID_HOME/platform-tools:$ANDROID_HOME/emulator
```

**Windows** — em *Propriedades do Sistema → Variáveis de Ambiente*, crie `JAVA_HOME` e `ANDROID_HOME` e adicione ao `PATH`:
- `%JAVA_HOME%\bin`
- `%ANDROID_HOME%\platform-tools`
- `%ANDROID_HOME%\emulator`

#### 4. Driver UiAutomator2 (Appium)

O projeto usa o driver UiAutomator2. Instale-o globalmente:

```bash
npx appium driver install uiautomator2
```

#### 5. Emulador Android (AVD)

1. Abra o **Android Studio**.
2. Vá em **Tools → Device Manager** (ou **AVD Manager**).
3. Clique em **Create Virtual Device**.
4. Escolha um dispositivo (ex.: Pixel 6) e uma imagem do sistema com API 34 ou superior.
5. Inicie o emulador antes de rodar os testes.

Verifique se o dispositivo está conectado:

```bash
adb devices
```

O emulador padrão costuma aparecer como `emulator-5554` (conforme `wdio.conf.ts`).

#### 6. APK do aplicativo

Coloque o arquivo `.apk` do aplicativo em `android/app.apk` (ou ajuste o caminho em `wdio.conf.ts`).

#### 7. Executar os testes mobile

```bash
npm run test:mobile
```

#### Requisitos recomendados

-   **Espaço em disco**: mínimo 20 GB livres
-   **RAM**: 8 GB (16 GB recomendado para emuladores)

---

## 🗂 Estrutura do Projeto

Organizamos o projeto para proporcionar máxima clareza e organização:

-   **Testes WEB, MOBILE e API**: scripts organizados para facilitar a manutenção e compreensão dos testes.
-   **Fixtures e Comandos WebdriverIO**: separados por contexto, com modularização e reutilização de código.
-   **Ambientes (.env)**: variáveis sensíveis e específicas por ambiente, garantindo segurança e flexibilidade na execução dos testes.

## ✨ Funcionalidades Extra

Este projeto adota práticas avançadas e automações para simplificar o dia a dia dos QAs:

-   **ESLint e Prettier**: garantem código limpo e organizado.
-   **Relatórios de Testes (Allure Report)**: relatórios detalhados e prontos para análise.
-   **Modularidade**: testes, fixtures e comandos WebdriverIO são estruturados para fácil acesso e reutilização.

## 📜 Licença

-   Este projeto é público, com o objetivo de compartilhar conhecimento e promover estudos.
-   O uso do projeto é de responsabilidade do usuário.
-   Todos os recursos utilizados são gratuitos e adequados para uso livre.

### 💻 QA Engineer

-   Desenvolvido por **Warnner**
