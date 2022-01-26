import { SingleChoiceQuestionPage } from "../view/pages/Single-choice";
import { QuizMultiplePresenter } from "./QuizMultiple";

export class QuizSinglePresenter {
    handleChangePageToMultipleChoice() {
      const quizMultiplePresenter  = new QuizMultiplePresenter();
      quizMultiplePresenter.initialize()
    }

    initialize() {
      document.getElementsByClassName('wrapper')[0].remove();
      const multiplePage = new SingleChoiceQuestionPage(this.handleChangePageToMultipleChoice);
      multiplePage.render();
    }
  }
