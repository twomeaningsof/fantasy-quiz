import { Button } from "../components/button";
import { Checkbox } from "../components/checkbox";
import { QuestionPage } from "../components/question-page";
import { renderTrueFalseQuestionPage } from "./functions";

export class MultipleChoiceQuestionPage {
  questionPage = new QuestionPage().render();

  private createTitle() {
    const questionPageQuestion = this.questionPage.getElementsByClassName('question-page__question')[0];
    questionPageQuestion.textContent = 'What are the characteristics of Gandalf the Grey?';
  }

  private createQuestions() {
    const questionPageAnswers = this.questionPage.getElementsByClassName('question-page__answers')[0];

    const answerOne = document.createElement('div');
    answerOne.classList.add('question-page__answer--checkbox');
    const checkboxOne = Checkbox.unchecked('answer-one').large().withText('Old, crazy, handsome').onCheck(() => {});
    answerOne.append(checkboxOne.render());

    const answerTwo = document.createElement('div');
    answerTwo.classList.add('question-page__answer--checkbox');
    const checkboxTwo = Checkbox.unchecked('answer-two').large().withText('Sit back, relax, and enjoy the flight').onCheck(() => {});
    answerTwo.append(checkboxTwo.render());

    const answerThree = document.createElement('div');
    answerThree.classList.add('question-page__answer--checkbox');
    const checkboxThree = Checkbox.unchecked('answer-three').large().withText('You shall not paaaaas!').onCheck(() => {});
    answerThree.append(checkboxThree.render());

    const answerFour = document.createElement('div');
    answerFour.classList.add('question-page__answer--checkbox');
    const checkboxFour = Checkbox.unchecked('answer-four').large().withText('Nie wiem').onCheck(() => {});
    answerFour.append(checkboxFour.render());


    questionPageAnswers.append(answerOne,answerTwo,answerThree,answerFour);
  }

  private createConfirm() {
    const questionPageConfirmButtonWrapper = this.questionPage.getElementsByClassName('question-page__confirm-button-wrapper')[0];
    const questionPageConfirmButton: Button = Button.bolded('confirm-button').withText('Confirm').onClick(renderTrueFalseQuestionPage);
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