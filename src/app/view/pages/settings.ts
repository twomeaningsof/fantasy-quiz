import { Button } from "../components/button";
import { renderWelcomePage, renderRulebookPage, renderQuizPage } from "./renderFunctions";

export class SettingsPage {
  private createOpenedBook() {
    const openedBook = document.createElement('div');
    openedBook.classList.add('opened-book');
    return openedBook;
  }

  private createBookContent() {
    const bookContent = document.createElement('div');
    bookContent.classList.add('book-content');
    return bookContent;
  }

  private createLeftPage() {
    const leftPage = document.createElement('div');
    leftPage.classList.add('left-page');

    const leftPageTop = document.createElement('div');
    leftPageTop.classList.add('left-page__top');

    const leftPageImage = document.createElement('div');
    leftPageImage.classList.add('left-page__img');
    leftPageTop.append(leftPageImage);

    const leftPageBottom = document.createElement('div');
    leftPageBottom.classList.add('left-page__bottom');

    const leftPageButton: Button = Button.standard('left-page-button').withText('Back').onClick(renderWelcomePage);
    leftPageBottom.append(leftPageButton.render());
    leftPage.append(leftPageTop,leftPageBottom);

    return leftPage;
  }

  private createRightPage() {
    const rightPage = document.createElement('div');
    rightPage.classList.add('right-page');

    const rightPageTop = document.createElement('div');
    rightPageTop.classList.add('right-page__top');

    const rightPageTitle = document.createElement('span');
    rightPageTitle.classList.add('right-page__title');
    rightPageTitle.textContent = 'Settings'
    rightPageTop.append(rightPageTitle);

    const rightPageMiddle = document.createElement('div');
    rightPageMiddle.classList.add('right-page__middle');

    const rightPageMiddleElementsWrapper = document.createElement('div');
    rightPageMiddleElementsWrapper.classList.add('right-page__middle-wrapper');

    const rightPageMiddleElementOne = document.createElement('div');
    rightPageMiddleElementOne.classList.add('right-page__middle-settings-element');
    rightPageMiddleElementOne.textContent = 'Raz dwa trzy, robisz settings\'y Ty!';

    const rightPageMiddleElementTwo = document.createElement('div');
    rightPageMiddleElementTwo.classList.add('right-page__middle-settings-element');
    rightPageMiddleElementTwo.textContent = 'Raz dwa trzy, robisz settings\'y Ty!';

    const rightPageMiddleElementThree = document.createElement('div');
    rightPageMiddleElementThree.classList.add('right-page__middle-settings-element');
    rightPageMiddleElementThree.textContent = 'Raz dwa trzy, robisz settings\'y Ty!';

    const rightPageMiddleElementFour = document.createElement('div');
    rightPageMiddleElementFour.classList.add('right-page__middle-settings-element');
    rightPageMiddleElementFour.textContent = 'Raz dwa trzy, robisz settings\'y Ty!';

    const rightPageMiddleScroll = document.createElement('div');
    rightPageMiddleScroll.classList.add('right-page__scrollbar');

    rightPageMiddleElementsWrapper.append(rightPageMiddleElementOne,rightPageMiddleElementTwo, rightPageMiddleElementThree, rightPageMiddleElementFour)

    rightPageMiddle.append(rightPageMiddleElementsWrapper, rightPageMiddleScroll);

    const rightPageBottom = document.createElement('div');
    rightPageBottom.classList.add('right-page__bottom');

    const rightPageLeftButton: Button = Button.standard('right-page-left-button').withText('Rulebook').onClick(renderRulebookPage);
    const rightPageRightButton: Button = Button.standard('right-page-right-button').withText('Play').onClick(renderQuizPage);
    rightPageBottom.append(rightPageLeftButton.render(),rightPageRightButton.render());

    rightPage.append(rightPageTop,rightPageMiddle,rightPageBottom);

    return rightPage;
  }

  render () {
    const openedBook = this.createOpenedBook();
    const bookContent = this.createBookContent();
    const leftPage = this.createLeftPage();
    const rightPage = this.createRightPage();

    bookContent.append(leftPage,rightPage);
    openedBook.append(bookContent);
    const rootWrapper = document.getElementsByClassName('wrapper')[0];
    rootWrapper?.appendChild(openedBook);

  }
}
