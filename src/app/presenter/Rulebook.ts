import { RulebookPage } from "../view/pages/Rulebook";
import { SettingsPresenter } from "./Settings";
import { WelcomePresenter } from "./Welcome";
import { QuizPresenter } from "./Quiz";
import { SettingsModel } from "../model/Settings";

export class RulebookPresenter {
  constructor(private settingsModel: SettingsModel) {}

  static destroy(toRemove: string) {
    document.getElementsByClassName(toRemove)[0].remove();
  }

  handleChangePageToSettings = () => {
    const settingsPresenter = new SettingsPresenter(this.settingsModel);
    RulebookPresenter.destroy("opened-book");
    settingsPresenter.initialize();
  };

  handleChangePageToWelcome = () => {
    const welcomePresenter = new WelcomePresenter(this.settingsModel);
    RulebookPresenter.destroy("opened-book");
    welcomePresenter.initialize();
  };

  handleChangePageToQuiz = () => {
    new QuizPresenter(this.settingsModel);
    RulebookPresenter.destroy("wrapper");
  };

  initialize = () => {
    const rulebookPage = new RulebookPage(
      this.handleChangePageToSettings,
      this.handleChangePageToWelcome,
      this.handleChangePageToQuiz
    );
    rulebookPage.render();
  };
}
