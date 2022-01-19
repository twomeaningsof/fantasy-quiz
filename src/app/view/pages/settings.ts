import { Button } from "../components/button";
import { Checkbox } from "../components/checkbox";
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

    const singleChoiceSettingWrapper = document.createElement('div');
    singleChoiceSettingWrapper.classList.add('right-page__settings-element');
    const singleChoiceCheckbox: Checkbox = Checkbox.checked('settings-single-choice-checkbox').onCheck(() => { console.log('settings-single-choice-checkbox') });
    const singleChoiceText = document.createElement('div');
    singleChoiceText.classList.add('right-page__settings-text');
    singleChoiceText.textContent = 'Enable single choice questions'
    singleChoiceSettingWrapper.append(singleChoiceCheckbox.render(),singleChoiceText);


    const multipleChoiceSettingWrapper = document.createElement('div');
    multipleChoiceSettingWrapper.classList.add('right-page__settings-element');
    const multipleChoiceCheckbox: Checkbox = Checkbox.checked('settings-multiple-choice-checkbox').onCheck(() => { console.log('settings-multiple-choice-checkbox') });
    const multipleChoiceText = document.createElement('div');
    multipleChoiceText.classList.add('right-page__settings-text');
    multipleChoiceText.textContent = 'Enable multiple choice questions'
    multipleChoiceSettingWrapper.append(multipleChoiceCheckbox.render(),multipleChoiceText);

    const trueFalseSettingWrapper = document.createElement('div');
    trueFalseSettingWrapper.classList.add('right-page__settings-element');
    const trueFalseCheckbox: Checkbox = Checkbox.checked('settings-true-false-checkbox').onCheck(() => { console.log('settings-true-false-checkbox') });
    const trueFalseText = document.createElement('div');
    trueFalseText.classList.add('right-page__settings-text');
    trueFalseText.textContent = 'Enable true or false questions'
    trueFalseSettingWrapper.append(trueFalseCheckbox.render(),trueFalseText);

    const timeLimitSettingWrapper = document.createElement('div');
    timeLimitSettingWrapper.classList.add('right-page__settings-element-reversed');
    const timeLimitText = document.createElement('div');
    timeLimitText.classList.add('right-page__time-limit-text');
    timeLimitText.textContent = 'Time limit for answers';
    const timeLimitTextInput = document.createElement('input');
    timeLimitTextInput.type = 'text';
    timeLimitTextInput.id = 'time-limit-input';
    timeLimitTextInput.classList.add('input');
    timeLimitTextInput.size = 2;
    timeLimitTextInput.value = '3';
    timeLimitTextInput.onclick = function () {
      const position = timeLimitTextInput.value.length;
      timeLimitTextInput.setSelectionRange(position, position);
    }
    timeLimitSettingWrapper.append(timeLimitText,timeLimitTextInput);

    const rightPageMiddleScroll = document.createElement('div');
    rightPageMiddleScroll.classList.add('right-page__scrollbar');

    rightPageMiddleElementsWrapper.append(singleChoiceSettingWrapper,multipleChoiceSettingWrapper, trueFalseSettingWrapper, timeLimitSettingWrapper);

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
