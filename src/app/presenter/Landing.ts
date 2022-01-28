import { LandingPage } from "../view/pages/Landing";
import { WelcomePresenter } from "./Welcome";

export class LandingPresenter {
  static destroy() {
    document.getElementsByClassName("closed-book")[0].remove();
  }

  handleChangePageToWelcome() {
    const welcomePresenter = new WelcomePresenter();
    LandingPresenter.destroy();
    welcomePresenter.initialize();
  }

  initialize() {
    const landingPage = new LandingPage(this.handleChangePageToWelcome);
    landingPage.render();
  }
}
