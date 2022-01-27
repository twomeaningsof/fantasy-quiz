import { MultipleChoiceQuestionPage } from "../view/pages/Multiple-choice";
import { QuizTrueFalsePresenter } from "./QuizTrueFalse";

export class QuizMultiplePresenter {
  handleChangePageToTrueFalseChoice() {
    const quizTrueFalsePresenter = new QuizTrueFalsePresenter();
    QuizTrueFalsePresenter.destroy();
    quizTrueFalsePresenter.initialize();
  }

  static destroy() {
    document.getElementsByClassName("question-page")[0].remove();
  }

  initialize() {
    const multiplePage = new MultipleChoiceQuestionPage(this.handleChangePageToTrueFalseChoice);
    multiplePage.render();
  }
}
