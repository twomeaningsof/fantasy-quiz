import { Button } from "../components/Button";
import { RadioButton } from "../components/Radio-button";
import { QuestionPage } from "../components/Question-page";
import { Question } from "../../model/Question";

export class SingleChoiceQuestionPage {
  constructor(
    private currentQuestion: Question,
    private onConfirm: (inputsWrapper: HTMLDivElement) => void
  ) {}

  questionPage = new QuestionPage().render();
  questionPageAnswers = this.questionPage.getElementsByClassName(
    "question-page__answers"
  )[0] as HTMLDivElement;

  private renderPossibleAnswer = (answer: string) => {
    const radioButton = RadioButton.unchecked(answer).withText(answer);
    this.questionPageAnswers.appendChild(radioButton.render());
  };

  private createTitle() {
    const questionPageQuestion = this.questionPage.getElementsByClassName(
      "question-page__question"
    )[0];
    questionPageQuestion.textContent = this.currentQuestion.getData().content;
  }

  private createQuestions() {
    this.currentQuestion
      .getData()
      .possibleAnswers.forEach(this.renderPossibleAnswer);
  }

  private createConfirm() {
    const questionPageConfirmButtonWrapper =
      this.questionPage.getElementsByClassName(
        "question-page__confirm-button-wrapper"
      )[0];
    const questionPageConfirmButton: Button = Button.bolded("confirm-button")
      .withText("Confirm")
      .onClick(() => this.onConfirm(this.questionPageAnswers));
    questionPageConfirmButtonWrapper.append(questionPageConfirmButton.render());
  }

  private createTimer() {
    const timerElement = document.createElement("div");
    timerElement.classList.add("timer");
    timerElement.id = "timer";
  }

  render() {
    this.createTitle();
    this.createQuestions();
    this.createConfirm();
    const rootWrapper = document.body;
    rootWrapper?.appendChild(this.questionPage);
  }
}
