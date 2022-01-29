import { WelcomePage } from "../view/pages/Welcome";
import { RulebookPresenter } from "./Rulebook";
import { SettingsPresenter } from "./Settings";
import { QuizSinglePresenter } from "./QuizSingle";

export class WelcomePresenter {
  static destroy(toRemove: string) {
    document.getElementsByClassName(toRemove)[0].remove();
  }

  handleChangePageToSettings() {
    const settingsPresenter = new SettingsPresenter();
    WelcomePresenter.destroy("opened-book");
    settingsPresenter.initialize();
  }

  handleChangePageToRulebook() {
    const rulebookPresenter = new RulebookPresenter();
    WelcomePresenter.destroy("opened-book");
    rulebookPresenter.initialize();
  }

  handleChangePageToQuiz() {
    const quizPresenter = new QuizSinglePresenter();
    WelcomePresenter.destroy("wrapper");
    quizPresenter.initialize();
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
