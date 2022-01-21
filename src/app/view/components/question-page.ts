import { Button } from "./button";
import { renderMCQuestionPage } from "../pages/renderFunctions";

export class QuestionPage {
  static render(): HTMLDivElement {
    const questionPage = document.createElement('div');
    questionPage.classList.add('question-page');

    const questionPageQuestion = document.createElement('div');
    questionPageQuestion.classList.add('question-page__question');

    const questionPageAnswers = document.createElement('div');
    questionPageAnswers.classList.add('question-page__answers');

    const questionPageConfirmButtonWrapper = document.createElement('div');
    questionPageConfirmButtonWrapper.classList.add('question-page__confirm-button-wrapper');

    const questionPageConfirmButton: Button = Button.bolded('confirm-button').withText('Confirm').onClick(renderMCQuestionPage);
    questionPageConfirmButtonWrapper.append(questionPageConfirmButton.render());

    questionPage.append(questionPageQuestion,questionPageAnswers,questionPageConfirmButtonWrapper);

    return questionPage;
  }
}