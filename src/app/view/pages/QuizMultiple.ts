import { Question } from "../../model/Question";
import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { QuestionPage } from "../components/Question-page";

export class MultipleChoiceQuestionPage {
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
      const checkboxWrapper = document.createElement("div");
      checkboxWrapper.classList.add("question-page__answer--checkbox");

      const checkbox = Checkbox.unchecked(answer).large().withText(answer);

      checkboxWrapper.appendChild(checkbox.render());
      questionPageAnswers.appendChild(checkboxWrapper);
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
