import { SettingsPage } from "../view/pages/Settings";
import { WelcomePresenter } from "./Welcome";
import { RulebookPresenter } from "./Rulebook";
import { QuizSinglePresenter } from "./QuizSingle";

export class SettingsPresenter {
  handleChangePageToWelcome() {
    const welcomePresenter = new WelcomePresenter();
    WelcomePresenter.destroy("opened-book");
    welcomePresenter.initialize();
  }

  handleChangePageToRulebook() {
    const rulebookPresenter = new RulebookPresenter();
    rulebookPresenter.initialize();
  }

  handleChangePageToQuiz() {
    const quizPresenter = new QuizSinglePresenter();
    quizPresenter.initialize();
  }

  static destroy() {
    document.getElementsByClassName("opened-book")[0].remove();
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
