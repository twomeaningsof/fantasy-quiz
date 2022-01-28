import { SettingsPage } from "../view/pages/Settings";
import { WelcomePresenter } from "./Welcome";
import { RulebookPresenter } from "./Rulebook";
import { QuizSinglePresenter } from "./QuizSingle";

export class SettingsPresenter {
  static destroy() {
    document.getElementsByClassName("opened-book")[0].remove();
  }

  handleChangePageToWelcome() {
    const welcomePresenter = new WelcomePresenter();
    SettingsPresenter.destroy();
    welcomePresenter.initialize();
  }

  handleChangePageToRulebook() {
    const rulebookPresenter = new RulebookPresenter();
    SettingsPresenter.destroy();
    rulebookPresenter.initialize();
  }

  handleChangePageToQuiz() {
    const quizPresenter = new QuizSinglePresenter();
    SettingsPresenter.destroy();
    quizPresenter.initialize();
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
