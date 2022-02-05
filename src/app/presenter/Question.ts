import { Question } from "../model/Question";
import { QuizMultiplePresenter } from "./QuizMultiple";
import { QuizSinglePresenter } from "./QuizSingle";
import { QuizTrueFalsePresenter } from "./QuizTrueFalse";

export class QuestionPresenter {
  constructor(private currentQuestion: Question, private onConfirm: () => {}) {}

  initializePage() {
    if (this.currentQuestion.getData().type === "single-choice") {
      new QuizSinglePresenter(
        this.currentQuestion,
        this.onConfirm
      ).initialize();
    }
    if (this.currentQuestion.getData().type === "multiple-choice") {
      new QuizMultiplePresenter(
        this.currentQuestion,
        this.onConfirm
      ).initialize();
    }
    if (this.currentQuestion.getData().type === "true-false") {
      new QuizTrueFalsePresenter(
        this.currentQuestion,
        this.onConfirm
      ).initialize();
    }
  }
}
