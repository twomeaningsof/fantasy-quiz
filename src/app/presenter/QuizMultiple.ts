import { MultipleChoiceQuestionPage } from "../view/pages/Multiple-choice";
import { QuizTrueFalsePresenter } from "./QuizTrueFalse";


export class QuizMultiplePresenter {
    handleChangePageToTrueFalseChoice() {
      const quizTrueFalsePresenter  = new QuizTrueFalsePresenter();
      quizTrueFalsePresenter.initialize()
    }

    initialize() {
      document.getElementsByClassName('question-page')[0].remove();
      const multiplePage = new MultipleChoiceQuestionPage(this.handleChangePageToTrueFalseChoice);
      multiplePage.render();
    }
  }
