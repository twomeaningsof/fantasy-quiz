import { WelcomePage } from "./welcome";
import { SettingsPage } from "./settings";
import { RulebookPage } from "./rulebook";
import { QuizPage } from "./quiz";

export const renderSettingsPage = () => {
  document.getElementsByClassName("opened-book")[0].remove();
    const settingsPage = new SettingsPage();
    settingsPage.render();
}

export const renderWelcomePage = () => {
  document.getElementsByClassName("opened-book")[0].remove();
    const welcomePage = new WelcomePage();
    welcomePage.render();
}

export const renderQuizPage = () => {
  document.getElementsByClassName("opened-book")[0].remove();
    const quizPage = new QuizPage();
    quizPage.render();
}

export const renderRulebookPage = () => {
  document.getElementsByClassName("opened-book")[0].remove();
    const rulebookPage = new RulebookPage();
    rulebookPage.render();
}
