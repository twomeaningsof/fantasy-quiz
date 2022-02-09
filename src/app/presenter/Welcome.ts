import { WelcomePage } from "../view/pages/Welcome";
import { RulebookPresenter } from "./Rulebook";
import { SettingsPresenter } from "./Settings";
import { QuizPresenter } from "./Quiz";
import { SettingsModel } from "../model/Settings";

export class WelcomePresenter {
  constructor(private settingsModel: SettingsModel) {}

  static destroy(toRemove: string) {
    document.getElementsByClassName(toRemove)[0].remove();
  }

  handleChangePageToSettings = () => {
    const settingsPresenter = new SettingsPresenter(this.settingsModel);
    WelcomePresenter.destroy("opened-book");
    settingsPresenter.initialize();
  };

  handleChangePageToRulebook = () => {
    const rulebookPresenter = new RulebookPresenter(this.settingsModel);
    WelcomePresenter.destroy("opened-book");
    rulebookPresenter.initialize();
  };

  handleChangePageToQuiz = () => {
    new QuizPresenter(this.settingsModel);
    WelcomePresenter.destroy("wrapper");
  };

  initialize = () => {
    const welcomePage = new WelcomePage(
      this.handleChangePageToSettings,
      this.handleChangePageToRulebook,
      this.handleChangePageToQuiz
    );
    welcomePage.render();
  };
}
