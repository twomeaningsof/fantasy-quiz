import { Button } from "../components/Button";
import { RadioButton } from "../components/Radio-button";
import { QuestionPage } from "../components/Question-page";
import { Question } from "../../model/Question";

export class SingleChoiceQuestionPage {
  constructor(private currentQuestion: Question) {}

  questionPage = new QuestionPage().render();

  private createTitle() {
    const questionPageQuestion = this.questionPage.getElementsByClassName(
      "question-page__question"
    )[0];
    questionPageQuestion.textContent = this.currentQuestion.getData().content;
  }

  private createQuestions() {
    const questionPageAnswers = this.questionPage.getElementsByClassName(
      "question-page__answers"
    )[0];

    this.currentQuestion.getData().possibleAnswers.forEach((answer) => {
      const radioButton = RadioButton.unchecked(answer).withText(answer);
      questionPageAnswers.appendChild(radioButton.render());
    });
  }

  private createConfirm() {
    const questionPageConfirmButtonWrapper =
      this.questionPage.getElementsByClassName(
        "question-page__confirm-button-wrapper"
      )[0];
    const questionPageConfirmButton: Button = Button.bolded("confirm-button")
      .withText("Confirm")
      .onClick(() => {
        console.log("placeholder for handleConfirm");
      });
    questionPageConfirmButtonWrapper.append(questionPageConfirmButton.render());
  }

  render() {
    this.createTitle();
    this.createQuestions();
    this.createConfirm();
    const rootWrapper = document.body;
    rootWrapper?.appendChild(this.questionPage);
  }
}
