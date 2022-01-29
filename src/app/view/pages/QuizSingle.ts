import { Button } from "../components/Button";
import { RadioButton } from "../components/Radio-button";
import { QuestionPage } from "../components/Question-page";

type handleChange = () => void;

export class SingleChoiceQuestionPage {
  constructor(private handleChangeToMultiple: handleChange) {}

  questionPage = new QuestionPage().render();

  private createTitle() {
    const questionPageQuestion =
      this.questionPage.getElementsByClassName("question-page__question")[0];
    questionPageQuestion.textContent =
      "Who managed to bring the Ring to Mount Doom to destroy it and Sauron's power?";
  }

  private createQuestions() {
    const questionPageAnswers =
      this.questionPage.getElementsByClassName("question-page__answers")[0];

    const radioButtonOne = RadioButton.unchecked("answer-one")
      .withText("Frodo Baggins")
      .onCheck(function () {
        console.log("Zaznaczam odp. pierwszą");
      });
    const radioButtonTwo = RadioButton.unchecked("answer-two")
      .withText("Geralt z Rivii")
      .onCheck(function () {
        console.log("Zaznaczam odp. drugą");
      });
    const radioButtonThree = RadioButton.unchecked("answer-three")
      .withText("Harry Potter")
      .onCheck(function () {
        console.log("Zaznaczam odp. trzecią");
      });

    questionPageAnswers.append(
      radioButtonOne.render(),
      radioButtonTwo.render(),
      radioButtonThree.render()
    );
  }

  private createConfirm() {
    const questionPageConfirmButtonWrapper = this.questionPage.getElementsByClassName(
      "question-page__confirm-button-wrapper"
    )[0];
    const questionPageConfirmButton: Button = Button.bolded("confirm-button")
      .withText("Confirm")
      .onClick(this.handleChangeToMultiple);
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
