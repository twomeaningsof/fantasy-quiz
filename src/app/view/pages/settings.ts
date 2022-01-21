import { Button } from "../components/button";
import { Checkbox } from "../components/checkbox";
import { OpenedBook } from "../components/opened-book";
import { renderWelcomePage, renderRulebookPage } from "./renderFunctions";

export class SettingsPage {
  private createOpenedBook(): HTMLDivElement {
    const openedBook: HTMLDivElement = OpenedBook.render();

    const leftPageBottom = openedBook.getElementsByClassName('left-page__bottom')[0];
    const leftPageButton: Button = Button.standard('left-page-button').withText('Back').onClick(renderWelcomePage);
    leftPageBottom.append(leftPageButton.render());

    const rightPageTop = openedBook.getElementsByClassName('right-page__top')[0];
    const rightPageTitle = document.createElement('span');
    rightPageTitle.classList.add('right-page__title');
    rightPageTitle.textContent = 'Settings'
    rightPageTop.append(rightPageTitle);

    const rightPageMiddle = openedBook.getElementsByClassName('right-page__middle')[0];
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
    timeLimitTextInput.value = '3';

    timeLimitTextInput.onclick = function () {
      const position = timeLimitTextInput.value.length;
      timeLimitTextInput.setSelectionRange(position, position);
    }

    timeLimitTextInput.oninput = function () {
      timeLimitTextInput.value =  timeLimitTextInput.value
      .replace(/[^0-9]/gi, '')
      .replace(/\b0+/g, '');

      if (parseInt(timeLimitTextInput.value) > 15) timeLimitTextInput.value = '15';
    }

    timeLimitSettingWrapper.append(timeLimitText,timeLimitTextInput);

    const rightPageMiddleScroll = document.createElement('div');
    rightPageMiddleScroll.classList.add('right-page__scrollbar');

    rightPageMiddleElementsWrapper.append(singleChoiceSettingWrapper,multipleChoiceSettingWrapper, trueFalseSettingWrapper, timeLimitSettingWrapper);

    rightPageMiddle.append(rightPageMiddleElementsWrapper, rightPageMiddleScroll);

    const rightPageBottom = openedBook.getElementsByClassName('right-page__bottom')[0];
    const rightPageLeftButton: Button = Button.standard('right-page-left-button').withText('Rulebook').onClick(renderRulebookPage);
    rightPageBottom.prepend(rightPageLeftButton.render());

    return openedBook;
  }

  render () {
    const openedBook = this.createOpenedBook();
    const rootWrapper = document.getElementsByClassName('wrapper')[0];
    rootWrapper?.appendChild(openedBook);
  }
}
