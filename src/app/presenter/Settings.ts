import { SettingsPage } from "../view/pages/Settings";
import { WelcomePresenter } from "./Welcome";
import { RulebookPresenter } from "./Rulebook";
import { QuizPresenter } from "./Quiz";

export class SettingsPresenter {
  static destroy(toRemove: string) {
    document.getElementsByClassName(toRemove)[0].remove();
  }

  handleChangePageToWelcome() {
    const welcomePresenter = new WelcomePresenter();
    SettingsPresenter.destroy("opened-book");
    welcomePresenter.initialize();
  }

  handleChangePageToRulebook() {
    const rulebookPresenter = new RulebookPresenter();
    SettingsPresenter.destroy("opened-book");
    rulebookPresenter.initialize();
  }

  handleChangePageToQuiz() {
    new QuizPresenter();
    SettingsPresenter.destroy("wrapper");
  }

  initialize() {
    const settingsPage = new SettingsPage(
      this.handleChangePageToWelcome,
      this.handleChangePageToRulebook,
      this.handleChangePageToQuiz
    );
    settingsPage.render();
  }
}
