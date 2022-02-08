import { Button } from "../components/Button";
import { OpenedBook } from "../components/Opened-book";
import { QuestionData } from "../../model/Question";

type handleChange = () => void;

export class FinishPage {
  constructor(
    private handleChangeToWelcome: handleChange,
    private allQuestionsData: QuestionData[],
    private correctlyAnsweredQuestions: QuestionData[]
  ) {}

  openedBook = new OpenedBook().render();

  private renderQuestion(question: QuestionData, index: number) {
    const questionWrapper = document.createElement("div");
    questionWrapper.classList.add("question-wrapper");

    const questionCounter = document.createElement("div");
    questionCounter.classList.add("question-wrapper__counter");
    questionCounter.textContent = `${index + 1}.`;

    const questionText = document.createElement("div");
    questionText.classList.add("question-wrapper__question");
    questionText.textContent = question.content;

    const questionAnswer = document.createElement("div");
    questionAnswer.classList.add("question-wrapper__answer");

    const isCorrect = this.correctlyAnsweredQuestions.includes(question);

    questionAnswer.innerHTML = `- <span class="question-wrapper__answered-${isCorrect}">${question.correctAnswers.join(
      ", "
    )}</span>`;

    questionText.append(questionAnswer);
    questionWrapper.append(questionCounter, questionText);
    return questionWrapper;
  }

  private createLeftPage() {
    const leftPageBottom =
      this.openedBook.getElementsByClassName("left-page__bottom")[0];
    const leftPageButton = Button.standard("left-page-button")
      .withText("Finish")
      .onClick(this.handleChangeToWelcome);
    leftPageBottom.append(leftPageButton.render());
  }

  private createRightPage(allQuestionsData: QuestionData[]) {
    const rightPageTop =
      this.openedBook.getElementsByClassName("right-page__top")[0];
    const rightPageTitle = document.createElement("span");
    rightPageTitle.classList.add("right-page__title");
    rightPageTitle.textContent = "Thank you for taking the quiz!";
    rightPageTop.append(rightPageTitle);

    const rightPageMiddle =
      this.openedBook.getElementsByClassName("right-page__middle")[0];
    rightPageMiddle.classList.remove("right-page__middle");
    rightPageMiddle.classList.add("right-page__middle-summary");

    const rightPageMiddleTop = document.createElement("div");
    rightPageMiddleTop.classList.add("right-page__middle-top");
    rightPageMiddleTop.textContent = "Correct Answers:";

    const rightPageMiddleBottom = document.createElement("div");
    rightPageMiddleBottom.classList.add("right-page__middle-bottom");

    const rightPageMiddleText = document.createElement("div");
    rightPageMiddleText.classList.add("right-page__middle-text");

    allQuestionsData.forEach((question, index) => {
      rightPageMiddleText.appendChild(this.renderQuestion(question, index));
    });

    const rightPageMiddleScroll = document.createElement("div");
    rightPageMiddleScroll.classList.add("right-page__scrollbar");

    rightPageMiddleBottom.append(rightPageMiddleText, rightPageMiddleScroll);

    rightPageMiddle.append(rightPageMiddleTop, rightPageMiddleBottom);

    this.openedBook.getElementsByClassName("right-page__bottom")[0].remove();
  }

  render() {
    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    this.createLeftPage();
    this.createRightPage(this.allQuestionsData);

    wrapper.appendChild(this.openedBook);

    document.body.append(wrapper);
  }
}
