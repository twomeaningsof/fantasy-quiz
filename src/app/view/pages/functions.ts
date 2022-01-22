import { WelcomePage } from "./welcome";
import { SettingsPage } from "./settings";
import { RulebookPage } from "./rulebook";
import { SingleChoiceQuestionPage } from "./single-question";
import { MultipleChoiceQuestionPage } from "./multiple-question";
import { TrueFalseQuestionPage } from "./true-false-question";

export const renderSettingsPage = () => {
  document.getElementsByClassName('opened-book')[0].remove();
    const settingsPage = new SettingsPage();
    settingsPage.render();
}

export const renderWelcomePage = () => {
  document.getElementsByClassName('opened-book')[0].remove();
    const welcomePage = new WelcomePage();
    welcomePage.render();
}
export const renderRulebookPage = () => {
  document.getElementsByClassName('opened-book')[0].remove();
    const rulebookPage = new RulebookPage();
    rulebookPage.render();
}

export const renderSCQuestionPage = () => {
  document.getElementsByClassName('wrapper')[0].remove();
    const singleChoiceQuestionPage = new SingleChoiceQuestionPage();
    singleChoiceQuestionPage.render();
}

export const renderMCQuestionPage = () => {
  document.getElementsByClassName('question-page')[0].remove();
  const multipleChoiceQuestionPage = new MultipleChoiceQuestionPage();
  multipleChoiceQuestionPage.render();
}

export const renderTrueFalseQuestionPage = () => {
  document.getElementsByClassName('question-page')[0].remove();
  const trueFalseQuestionPage = new TrueFalseQuestionPage();
  trueFalseQuestionPage.render();
}

export const trueFalseChoice = () => {
  // this.style.filter = "drop-shadow(0px 0px 50px #37360c)";
  // console.log(element);
  // }
}
