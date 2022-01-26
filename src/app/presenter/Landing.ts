import { LandingPage } from "../view/pages/Landing";
import { WelcomePresenter } from "./Welcome";

export class LandingPresenter {

  handleChangePageToWelcome() {
    const welcomePresenter  = new WelcomePresenter();
    welcomePresenter.initialize('closed-book');
  }

  initialize() {
    const landingPage = new LandingPage(this.handleChangePageToWelcome);
    landingPage.render();
  }
}
