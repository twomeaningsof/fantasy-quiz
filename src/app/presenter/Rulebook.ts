import { RulebookPage } from "../view/pages/Rulebook";
import { SettingsPresenter } from "./Settings";
import { WelcomePresenter } from "./Welcome";
import { QuizPresenter } from "./Quiz";

export class RulebookPresenter {
  static destroy(toRemove: string) {
    document.getElementsByClassName(toRemove)[0].remove();
  }

  handleChangePageToSettings() {
    const settingsPresenter = new SettingsPresenter();
    RulebookPresenter.destroy("opened-book");
    settingsPresenter.initialize();
  }

  handleChangePageToWelcome() {
    const welcomePresenter = new WelcomePresenter();
    RulebookPresenter.destroy("opened-book");
    welcomePresenter.initialize();
  }

  handleChangePageToQuiz() {
    new QuizPresenter();
    RulebookPresenter.destroy("wrapper");
  }

  initialize() {
    const rulebookPage = new RulebookPage(
      this.handleChangePageToSettings,
      this.handleChangePageToWelcome,
      this.handleChangePageToQuiz
    );
    rulebookPage.render();
  }
}
