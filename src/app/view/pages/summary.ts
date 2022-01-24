import { Button } from "../components/Button";
import { QuestionPage } from "../components/Question-page";
import { renderFinishPage } from "./Functions";

export class SummaryPage {
  questionPage = new QuestionPage().render();

  private createTitle() {
    const questionPageQuestion = this.questionPage.getElementsByClassName('question-page__question')[0];
    questionPageQuestion.classList.remove('question-page__question');
    questionPageQuestion.classList.add('question-page__question--bolded');
    questionPageQuestion.textContent = 'Congratulations';
  }
  private createQuestions() {
    const questionPageAnswers = this.questionPage.getElementsByClassName('question-page__answers')[0];

    const questionPageSummaryWrapper = document.createElement('div');
    questionPageSummaryWrapper.classList.add('question-page__summary-wrapper');

    const questionPageSummaryText = document.createElement('div');
    questionPageSummaryText.innerHTML = `You answered <span id="summary-value">13/88</span> questions correctly!`

    questionPageSummaryWrapper.append(questionPageSummaryText);

    questionPageAnswers.append(questionPageSummaryWrapper);
  }
  private createConfirm(){
    const questionPageConfirmButtonWrapper = this.questionPage.getElementsByClassName('question-page__confirm-button-wrapper')[0];
    const questionPageConfirmButton: Button = Button.bolded('confirm-button').withText('See all answers').onClick(renderFinishPage);
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
