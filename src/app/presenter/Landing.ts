import { LandingPage } from "../view/pages/Landing";
import { WelcomePresenter } from "./Welcome";
import { SettingsModel } from "../model/Settings";

export class LandingPresenter {
  constructor(private settingsModel: SettingsModel) {}

  static destroy() {
    document.getElementsByClassName("closed-book")[0].remove();
  }

  handleChangePageToWelcome = () => {
    const welcomePresenter = new WelcomePresenter(this.settingsModel);
    LandingPresenter.destroy();
    welcomePresenter.initialize();
  };

  initialize() {
    const landingPage = new LandingPage(this.handleChangePageToWelcome);
    landingPage.render();
  }
}
