import { SingleChoiceQuestionPage } from "../view/pages/QuizSingle";
import { QuizMultiplePresenter } from "./QuizMultiple";

export class QuizSinglePresenter {
  static destroy() {
    document.getElementsByClassName("question-page")[0].remove();
  }

  handleChangePageToMultipleChoice() {
    const quizMultiplePresenter = new QuizMultiplePresenter();
    QuizSinglePresenter.destroy();
    quizMultiplePresenter.initialize();
  }

  initialize() {
    const singlePage = new SingleChoiceQuestionPage(this.handleChangePageToMultipleChoice);
    singlePage.render();
  }
}