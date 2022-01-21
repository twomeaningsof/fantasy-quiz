import { Button } from "../components/button";
import { OpenedBook } from "../components/opened-book";
import { renderSettingsPage, renderQuizPage,renderRulebookPage } from "./renderFunctions";

export class WelcomePage {
  private createOpenedBook(): HTMLDivElement {
    const openedBook: HTMLDivElement = OpenedBook.render();

    const leftPageBottom = openedBook.getElementsByClassName('left-page__bottom')[0];
    const leftPageButton: Button = Button.standard('left-page-button').withText('Settings').onClick(renderSettingsPage);
    leftPageBottom.append(leftPageButton.render());

    const rightPageTop = openedBook.getElementsByClassName('right-page__top')[0];
    const rightPageTitle = document.createElement('span');
    rightPageTitle.classList.add('right-page__title');
    rightPageTitle.textContent = 'Welcome to the fantasy quiz!'
    rightPageTop.append(rightPageTitle)

    const rightPageMiddle = openedBook.getElementsByClassName('right-page__middle')[0];
    const rightPageMiddleText = document.createElement('span');
    rightPageMiddleText.classList.add('right-page__middle-text');
    rightPageMiddleText.textContent = 'Read the rules, brace yourself and test your fantasy knowledge with the best fantasy quiz in the world!'
    rightPageMiddle.append(rightPageMiddleText);

    const rightPageBottom = openedBook.getElementsByClassName('right-page__bottom')[0];
    const rightPageLeftButton: Button = Button.standard('right-page-left-button').withText('Rulebook').onClick(renderRulebookPage);
    const rightPageRightButton: Button = Button.standard('right-page-right-button').withText('Play').onClick(renderQuizPage);
    rightPageBottom.append(rightPageLeftButton.render(),rightPageRightButton.render());

    return openedBook;
  }

  render() {
    const openedBook = this.createOpenedBook();
    const rootWrapper = document.getElementsByClassName('wrapper')[0];
    rootWrapper?.appendChild(openedBook);
  }
}
