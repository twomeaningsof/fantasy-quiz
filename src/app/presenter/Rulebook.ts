import { RulebookPage } from "../view/pages/Rulebook";
import { SettingsPresenter } from "./Settings";
import { WelcomePresenter } from "./Welcome";
import { QuizSinglePresenter } from "./QuizSingle";

export class RulebookPresenter {
  handleChangePageToSettings() {
    const settingsPresenter = new SettingsPresenter();
    SettingsPresenter.destroy();
    settingsPresenter.initialize();
  }

  handleChangePageToRulebook() {
    const welcomePresenter = new WelcomePresenter();
    WelcomePresenter.destroy("opened-book");
    welcomePresenter.initialize();
  }

  handleChangePageToQuiz() {
    const quizPresenter = new QuizSinglePresenter();
    QuizSinglePresenter.destroy();
    quizPresenter.initialize();
  }

  static destroy() {
    document.getElementsByClassName("question-page")[0].remove();
  }

  initialize() {
    document.getElementsByClassName("opened-book")[0].remove();
    const rulebookPage = new RulebookPage(
      this.handleChangePageToSettings,
      this.handleChangePageToRulebook,
      this.handleChangePageToQuiz
    );
    rulebookPage.render();
  }
}
