import { Button } from "../components/button";
import { OpenedBook } from "../components/opened-book";
import { renderSettingsPage, renderWelcomePage, renderQuizPage } from "./renderFunctions";

export class RulebookPage {
  private createOpenedBook(): HTMLDivElement {
    const openedBook: HTMLDivElement = OpenedBook.render();

    const leftPageBottom = openedBook.getElementsByClassName('left-page__bottom')[0];
    const leftPageButton: Button = Button.standard('left-page-button').withText('Settings').onClick(renderSettingsPage);
    leftPageBottom.append(leftPageButton.render());

    const rightPageTop = openedBook.getElementsByClassName('right-page__top')[0];
    const rightPageTitle = document.createElement('span');
    rightPageTitle.classList.add('right-page__title');
    rightPageTitle.textContent = 'Rulebook';
    rightPageTop.append(rightPageTitle)

    const rightPageMiddle = openedBook.getElementsByClassName('right-page__middle')[0];
    const rightPageMiddleText = document.createElement('span');
    rightPageMiddleText.classList.add('right-page__middle-text');
    rightPageMiddleText.innerHTML = 'You have 3 minutes to answer as many questions as possible.<br><br> There is finite number of questions, if you answer all of them before times is up, the quiz will end.<br><br> You can see correct answers for all questions at the end.<br><br> There are 3 types of questions: single answer, multiple answer, true or false.<br><br> You can toggle in the settings which questions you want to see in the quiz, and extend your time limit up to 15 minutes.';

    const rightPageMiddleScroll = document.createElement('div');
    rightPageMiddleScroll.classList.add('right-page__scrollbar');

    rightPageMiddle.append(rightPageMiddleText,rightPageMiddleScroll);

    const rightPageBottom = openedBook.getElementsByClassName('right-page__bottom')[0];
    const rightPageLeftButton: Button = Button.standard('right-page-left-button').withText('Back').onClick(renderWelcomePage);
    const rightPageRightButton: Button = Button.standard('right-page-right-button').withText('Play').onClick(renderQuizPage);
    rightPageBottom.append(rightPageLeftButton.render(),rightPageRightButton.render());

    return openedBook;
  }

  render () {
    const openedBook = this.createOpenedBook();
    const rootWrapper = document.getElementsByClassName('wrapper')[0];
    rootWrapper?.appendChild(openedBook);
  }
}
