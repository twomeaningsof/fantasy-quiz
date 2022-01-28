import { RulebookPage } from "../view/pages/Rulebook";
import { SettingsPresenter } from "./Settings";
import { WelcomePresenter } from "./Welcome";
import { QuizSinglePresenter } from "./QuizSingle";

export class RulebookPresenter {
  static destroy() {
    document.getElementsByClassName("opened-book")[0].remove();
  }

  handleChangePageToSettings() {
    const settingsPresenter = new SettingsPresenter();
    RulebookPresenter.destroy();
    settingsPresenter.initialize();
  }

  handleChangePageToWelcome() {
    const welcomePresenter = new WelcomePresenter();
    RulebookPresenter.destroy();
    welcomePresenter.initialize();
  }

  handleChangePageToQuiz() {
    const quizPresenter = new QuizSinglePresenter();
    RulebookPresenter.destroy();
    quizPresenter.initialize();
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
