import { Button } from "../components/button";
import { QuestionPage } from "../components/question-page";
import { trueFalseChoice } from "./functions";

export class TrueFalseQuestionPage {
  questionPage = new QuestionPage().render();

  private createTitle() {
    const questionPageQuestion = this.questionPage.getElementsByClassName('question-page__question')[0];
    questionPageQuestion.textContent = 'Harry, are you a wizard?';
  }
  private createQuestions() {
    const questionPageAnswers = this.questionPage.getElementsByClassName('question-page__answers')[0];

    const trueFalseButtonOne = Button.trueFalse('answer-true').withText('True').onClick(() => trueFalseChoice("true"));
    const trueFalseButtonTwo = Button.trueFalse('answer-false').withText('False').onClick(() => trueFalseChoice("false"));

    questionPageAnswers.append(trueFalseButtonOne.render(),trueFalseButtonTwo.render());
  }
  private createConfirm(){
    const questionPageConfirmButtonWrapper = this.questionPage.getElementsByClassName('question-page__confirm-button-wrapper')[0];
    const questionPageConfirmButton: Button = Button.bolded('confirm-button').withText('Confirm').onClick(()=>{});
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