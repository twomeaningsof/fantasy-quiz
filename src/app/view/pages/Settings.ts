import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { OpenedBook } from "../components/Opened-book";

type handleChange = () => void;

export class SettingsPage {
  constructor(private handleChangeToWelcome: handleChange, private handleChangeRulebook: handleChange, private handleChangeToQuiz: handleChange) {}

  openedBook = new OpenedBook().render();

  private createLeftPage() {
    const leftPageBottom = this.openedBook.getElementsByClassName('left-page__bottom')[0];
    const leftPageButton = Button.standard('left-page-button').withText('Back').onClick(this.handleChangeToWelcome);
    leftPageBottom.append(leftPageButton.render());
  }

  private createRightPage() {
    const rightPageTop = this.openedBook.getElementsByClassName('right-page__top')[0];
    const rightPageTitle = document.createElement('span');
    rightPageTitle.classList.add('right-page__title');
    rightPageTitle.textContent = 'Settings'
    rightPageTop.append(rightPageTitle);

    const rightPageMiddle = this.openedBook.getElementsByClassName('right-page__middle')[0];
    const rightPageMiddleElementsWrapper = document.createElement('div');
    rightPageMiddleElementsWrapper.classList.add('right-page__middle-wrapper');

    const singleChoiceSettingWrapper = document.createElement('div');
    singleChoiceSettingWrapper.classList.add('right-page__settings-element');
    const singleChoiceCheckbox = Checkbox.checked('settings-single-choice-checkbox').small().withText('Enable single choice questions').onCheck(() => { console.log('settings-single-choice-checkbox') });
    singleChoiceSettingWrapper.append(singleChoiceCheckbox.render());

    const multipleChoiceSettingWrapper = document.createElement('div');
    multipleChoiceSettingWrapper.classList.add('right-page__settings-element');
    const multipleChoiceCheckbox = Checkbox.checked('settings-multiple-choice-checkbox').small().withText('Enable multiple choice questions').onCheck(() => { console.log('settings-multiple-choice-checkbox') });
    multipleChoiceSettingWrapper.append(multipleChoiceCheckbox.render());

    const trueFalseSettingWrapper = document.createElement('div');
    trueFalseSettingWrapper.classList.add('right-page__settings-element');
    const trueFalseCheckbox = Checkbox.checked('settings-true-false-checkbox').small().withText('Enable true or false questions').onCheck(() => { console.log('settings-true-false-checkbox') });
    trueFalseSettingWrapper.append(trueFalseCheckbox.render());

    const timeLimitSettingWrapper = document.createElement('div');
    timeLimitSettingWrapper.classList.add('right-page__settings-element-reversed');
    const timeLimitText = document.createElement('label');
    timeLimitText.classList.add('right-page__time-limit-text');
    timeLimitText.htmlFor = 'time-limit-input';
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

    const rightPageBottom = this.openedBook.getElementsByClassName('right-page__bottom')[0];
    const rightPageLeftButton = Button.standard('right-page-left-button').withText('Rulebook').onClick(this.handleChangeRulebook);
    const rightPageRightButton = Button.standard('right-page-right-button').withText('Play').onClick(this.handleChangeToQuiz);
    rightPageBottom.append(rightPageLeftButton.render(),rightPageRightButton.render());
  }

  render () {
    this.createLeftPage();
    this.createRightPage();
    const rootWrapper = document.getElementsByClassName('wrapper')[0];
    rootWrapper?.appendChild(this.openedBook);
  }
}
