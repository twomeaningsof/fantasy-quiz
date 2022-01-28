import { MultipleChoiceQuestionPage } from "../view/pages/QuizMultiple";
import { QuizTrueFalsePresenter } from "./QuizTrueFalse";

export class QuizMultiplePresenter {
  static destroy() {
    document.getElementsByClassName("question-page")[0].remove();
  }

  handleChangePageToTrueFalseChoice() {
    const quizTrueFalsePresenter = new QuizTrueFalsePresenter();
    QuizMultiplePresenter.destroy();
    quizTrueFalsePresenter.initialize();
  }

  initialize() {
    const multiplePage = new MultipleChoiceQuestionPage(this.handleChangePageToTrueFalseChoice);
    multiplePage.render();
  }
}
