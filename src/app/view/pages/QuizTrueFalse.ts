import { Question } from "../../model/Question";
import { Button } from "../components/Button";
import { QuestionPage } from "../components/Question-page";

export class TrueFalseQuestionPage {
  constructor(private currentQuestion: Question) {}

  questionPage = new QuestionPage().render();

  private trueFalseChoice = (type: "true" | "false") => {
    const button = document.getElementById(`answer-${type}`);
    const activeButtons = document.getElementsByClassName(
      "button--true-false-active"
    );

    if (button?.classList.contains("button--true-false-active")) {
      return button.classList.remove("button-true-false-active");
    }

    if (activeButtons.length > 0) {
      activeButtons[0].classList.remove("button--true-false-active");
    }

    button?.classList.add("button--true-false-active");
  };

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
      if (answer === "true" || answer === "false") {
        const trueFalseButton = Button.trueFalse(answer)
          .withText(answer)
          .onClick(() => this.trueFalseChoice(answer));
        questionPageAnswers.appendChild(trueFalseButton.render());
      }
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
