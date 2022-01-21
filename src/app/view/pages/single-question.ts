import { Button } from "../components/button";
import { RadioButton } from "../components/radio-button";
import { QuestionPage } from "../components/question-page";
import { renderMCQuestionPage } from "./renderFunctions";

export class SingleChoiceQuestionPage {
  private createSingleChoicePage(): HTMLDivElement {
    const questionPage: HTMLDivElement = QuestionPage.render();

    const questionPageQuestion = questionPage.getElementsByClassName('question-page__question')[0];
    questionPageQuestion.textContent = 'Who managed to bring the Ring to Mount Doom to destroy it and Sauron\'s power?';

    const questionPageAnswers = questionPage.getElementsByClassName('question-page__answers')[0];

    const radioButtonOne: RadioButton = RadioButton.unchecked('answer-one').withText('Frodo Baggins').onCheck(function () {console.log('Zaznaczam odp. pierwszą')});
    const radioButtonTwo: RadioButton = RadioButton.unchecked('answer-two').withText('Geralt z Rivii').onCheck(function () {console.log('Zaznaczam odp. drugą')});
    const radioButtonThree: RadioButton = RadioButton.unchecked('answer-three').withText('Harry Potter').onCheck(function () {console.log('Zaznaczam odp. trzecią')});

    questionPageAnswers.append(radioButtonOne.render(),radioButtonTwo.render(),radioButtonThree.render());

    return questionPage;
  }

  render() {
    const questionPage = this.createSingleChoicePage();
    console.log(`This is questionPage ${questionPage}`);
    const rootWrapper = document.body;
    console.log(`This is questionPage ${rootWrapper}`);
    rootWrapper?.appendChild(questionPage);
  }
}
