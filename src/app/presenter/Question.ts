import { Question } from "../model/Question";
import { QuizMultiplePresenter } from "./QuizMultiple";
import { QuizSinglePresenter } from "./QuizSingle";
import { QuizTrueFalsePresenter } from "./QuizTrueFalse";

export class QuestionPresenter {
  constructor(private currentQuestion: Question) {}

  initializePage() {
    if (this.currentQuestion.getData().type === "single-choice") {
      new QuizSinglePresenter(this.currentQuestion).initialize();
    }
    if (this.currentQuestion.getData().type === "multiple-choice") {
      new QuizMultiplePresenter(this.currentQuestion).initialize();
    }
    if (this.currentQuestion.getData().type === "true-false") {
      new QuizTrueFalsePresenter(this.currentQuestion).initialize();
    }
  }
}
