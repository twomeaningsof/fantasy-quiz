import { WelcomePage } from "../view/pages/Welcome";
import { RulebookPresenter } from "./Rulebook";
import { SettingsPresenter } from "./Settings";
import { QuizSinglePresenter } from "./QuizSingle";

export class WelcomePresenter {
  handleChangePageToSettings() {
    const settingsPresenter = new SettingsPresenter();
    settingsPresenter.initialize();
  }

  handleChangePageToRulebook() {
    const rulebookPresenter = new RulebookPresenter();
    rulebookPresenter.initialize();
  }

  handleChangePageToQuiz() {
    const quizPresenter = new QuizSinglePresenter();
    quizPresenter.initialize();
  }

  static destroy(toRemove: string) {
    document.getElementsByClassName(toRemove)[0].remove();
  }

  initialize() {
    const welcomePage = new WelcomePage(
      this.handleChangePageToSettings,
      this.handleChangePageToRulebook,
      this.handleChangePageToQuiz
    );
    welcomePage.render();
  }
}
