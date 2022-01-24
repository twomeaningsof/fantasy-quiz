import { Button } from "../components/Button";
import { OpenedBook } from "../components/Opened-book";
import { renderSettingsPage,renderRulebookPage,renderSCQuestionPage } from "./Functions";

export class WelcomePage {
  openedBook = new OpenedBook().render();

  private createLeftPage() {
    const leftPageBottom = this.openedBook.getElementsByClassName('left-page__bottom')[0];
    const leftPageButton = Button.standard('left-page-button').withText('Settings').onClick(renderSettingsPage);
    leftPageBottom.append(leftPageButton.render());
  }

  private createRightPage() {
    const rightPageTop = this.openedBook.getElementsByClassName('right-page__top')[0];
    const rightPageTitle = document.createElement('span');
    rightPageTitle.classList.add('right-page__title');
    rightPageTitle.textContent = 'Welcome to the fantasy quiz!'
    rightPageTop.append(rightPageTitle)

    const rightPageMiddle = this.openedBook.getElementsByClassName('right-page__middle')[0];
    const rightPageMiddleText = document.createElement('span');
    rightPageMiddleText.classList.add('right-page__middle-text');
    rightPageMiddleText.textContent = 'Read the rules, brace yourself and test your fantasy knowledge with the best fantasy quiz in the world!'
    rightPageMiddle.append(rightPageMiddleText);

    const rightPageBottom = this.openedBook.getElementsByClassName('right-page__bottom')[0];
    const rightPageLeftButton = Button.standard('right-page-left-button').withText('Rulebook').onClick(renderRulebookPage);
    const rightPageRightButton = Button.standard('right-page-right-button').withText('Play').onClick(renderSCQuestionPage);
    rightPageBottom.append(rightPageLeftButton.render(),rightPageRightButton.render());
  }

  render() {
    this.createLeftPage();
    this.createRightPage();
    const rootWrapper = document.getElementsByClassName('wrapper')[0];
    rootWrapper?.appendChild(this.openedBook);
  }
}
