import { Button } from "../components/Button";
import { QuestionPage } from "../components/Question-page";

type handleChange = () => void;

export class SummaryPage {
  constructor(
    private handleChangeToFinish: handleChange,
    private score: string
  ) {}

  summaryPage = new QuestionPage().render();

  private createTitle() {
    const summaryPageTitle = this.summaryPage.getElementsByClassName(
      "question-page__question"
    )[0];
    summaryPageTitle.classList.remove("question-page__question");
    summaryPageTitle.classList.add("question-page__question--bolded");
    summaryPageTitle.textContent = "Congratulations";
  }

  private createSummary() {
    const summaryPageMiddle = this.summaryPage.getElementsByClassName(
      "question-page__answers"
    )[0];

    const summaryPageMiddleWrapper = document.createElement("div");
    summaryPageMiddleWrapper.classList.add("question-page__summary-wrapper");

    const summaryPageMiddleText = document.createElement("div");
    summaryPageMiddleText.innerHTML = `You answered ${this.score} questions correctly!`;

    summaryPageMiddleWrapper.append(summaryPageMiddleText);

    summaryPageMiddle.append(summaryPageMiddleWrapper);
  }

  private createConfirm() {
    const summaryPageConfirmButtonWrapper =
      this.summaryPage.getElementsByClassName(
        "question-page__confirm-button-wrapper"
      )[0];
    const summaryPageConfirmButton: Button = Button.bolded("confirm-button")
      .withText("See all answers")
      .onClick(this.handleChangeToFinish);
    summaryPageConfirmButtonWrapper.append(summaryPageConfirmButton.render());
  }

  render() {
    this.createTitle();
    this.createSummary();
    this.createConfirm();
    const rootWrapper = document.body;
    rootWrapper?.appendChild(this.summaryPage);
  }
}
