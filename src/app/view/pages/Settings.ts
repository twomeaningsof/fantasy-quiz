import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { OpenedBook } from "../components/Opened-book";
import { SettingsModel } from "../../model/Settings";

type handleChange = () => void;

export class SettingsPage {
  constructor(
    private handleChangeToWelcome: handleChange,
    private handleChangeRulebook: handleChange,
    private handleChangeToQuiz: handleChange,
    private settingsModel: SettingsModel
  ) {}

  openedBook = new OpenedBook().render();

  private handleSettingsAssignment = () => {
    const [
      singleChoiceQuestionCheckboxElement,
      multipleChoiceQuestionCheckboxElement,
      trueFalseChoiceQuestionCheckboxElement,
    ] = this.openedBook.getElementsByClassName(
      "checkbox-wrapper__checkmark"
    ) as HTMLCollectionOf<HTMLInputElement>;

    const timeLimitElement = this.openedBook.getElementsByClassName(
      "input"
    )[0] as HTMLInputElement;

    singleChoiceQuestionCheckboxElement.checked =
      this.settingsModel.getSettingsData().singleChoiceEnabled;
    multipleChoiceQuestionCheckboxElement.checked =
      this.settingsModel.getSettingsData().multipleChoiceEnabled;
    trueFalseChoiceQuestionCheckboxElement.checked =
      this.settingsModel.getSettingsData().trueFalseChoiceEnabled;
    timeLimitElement.value = this.settingsModel.getSettingsData().timeLimit;
  };

  private createLeftPage() {
    const leftPageBottom =
      this.openedBook.getElementsByClassName("left-page__bottom")[0];
    const leftPageButton = Button.standard("left-page-button")
      .withText("Back")
      .onClick(this.handleChangeToWelcome);
    leftPageBottom.append(leftPageButton.render());
  }

  private createRightPage() {
    const rightPageTop =
      this.openedBook.getElementsByClassName("right-page__top")[0];
    const rightPageTitle = document.createElement("span");
    rightPageTitle.classList.add("right-page__title");
    rightPageTitle.textContent = "Settings";
    rightPageTop.append(rightPageTitle);

    const rightPageMiddle =
      this.openedBook.getElementsByClassName("right-page__middle")[0];
    const rightPageMiddleElementsWrapper = document.createElement("div");
    rightPageMiddleElementsWrapper.classList.add("right-page__middle-wrapper");

    const singleChoiceSettingWrapper = document.createElement("div");
    singleChoiceSettingWrapper.classList.add("right-page__settings-element");
    const singleChoiceCheckbox = Checkbox.small(
      "settings-single-choice-checkbox"
    )
      .withText("Enable single choice questions")
      .onClick(() => {
        const singleChoiceQuestionCheckboxElement =
          document.getElementsByClassName(
            "checkbox-wrapper__checkmark"
          )[0] as HTMLInputElement;

        this.settingsModel.handleSettingsChange(
          singleChoiceQuestionCheckboxElement.checked,
          "single-choice"
        );
      });

    singleChoiceSettingWrapper.append(singleChoiceCheckbox.render());

    const multipleChoiceSettingWrapper = document.createElement("div");
    multipleChoiceSettingWrapper.classList.add("right-page__settings-element");
    const multipleChoiceCheckbox = Checkbox.small(
      "settings-multiple-choice-checkbox"
    )
      .withText("Enable multiple choice questions")
      .onClick(() => {
        const multipleChoiceQuestionCheckboxElement =
          document.getElementsByClassName(
            "checkbox-wrapper__checkmark"
          )[1] as HTMLInputElement;

        this.settingsModel.handleSettingsChange(
          multipleChoiceQuestionCheckboxElement.checked,
          "multiple-choice"
        );
      });

    multipleChoiceSettingWrapper.append(multipleChoiceCheckbox.render());

    const trueFalseSettingWrapper = document.createElement("div");
    trueFalseSettingWrapper.classList.add("right-page__settings-element");
    const trueFalseCheckbox = Checkbox.small("settings-true-false-checkbox")
      .withText("Enable true or false questions")
      .onClick(() => {
        const trueFalseChoiceQuestionCheckboxElement =
          document.getElementsByClassName(
            "checkbox-wrapper__checkmark"
          )[2] as HTMLInputElement;

        this.settingsModel.handleSettingsChange(
          trueFalseChoiceQuestionCheckboxElement.checked,
          "true-false"
        );
      });

    trueFalseSettingWrapper.append(trueFalseCheckbox.render());

    const timeLimitSettingWrapper = document.createElement("div");
    timeLimitSettingWrapper.classList.add(
      "right-page__settings-element-reversed"
    );
    const timeLimitText = document.createElement("label");
    timeLimitText.classList.add("right-page__time-limit-text");
    timeLimitText.htmlFor = "time-limit-input";
    timeLimitText.textContent = "Time limit for answers";
    const timeLimitTextInput = document.createElement("input");
    timeLimitTextInput.type = "text";
    timeLimitTextInput.id = "time-limit-input";
    timeLimitTextInput.classList.add("input");
    timeLimitTextInput.value = "3";

    timeLimitTextInput.onclick = () => {
      const position = timeLimitTextInput.value.length;
      timeLimitTextInput.setSelectionRange(position, position);
    };

    timeLimitTextInput.oninput = () => {
      timeLimitTextInput.value = timeLimitTextInput.value
        .replace(/[^0-9]/gi, "")
        .replace(/\b0+/g, "");

      if (parseInt(timeLimitTextInput.value) > 15)
        timeLimitTextInput.value = "15";

      this.settingsModel.handleSettingsChange(timeLimitTextInput.value);
    };

    timeLimitTextInput.onblur = () => {
      if (timeLimitTextInput.value === "") {
        timeLimitTextInput.value = "4";
        this.settingsModel.handleSettingsChange("4");
      }
    };

    timeLimitSettingWrapper.append(timeLimitText, timeLimitTextInput);

    const rightPageMiddleScroll = document.createElement("div");
    rightPageMiddleScroll.classList.add("right-page__scrollbar");

    rightPageMiddleElementsWrapper.append(
      singleChoiceSettingWrapper,
      multipleChoiceSettingWrapper,
      trueFalseSettingWrapper,
      timeLimitSettingWrapper
    );

    rightPageMiddle.append(
      rightPageMiddleElementsWrapper,
      rightPageMiddleScroll
    );

    const rightPageBottom =
      this.openedBook.getElementsByClassName("right-page__bottom")[0];
    const rightPageLeftButton = Button.standard("right-page-left-button")
      .withText("Rulebook")
      .onClick(this.handleChangeRulebook);
    const rightPageRightButton = Button.standard("right-page-right-button")
      .withText("Play")
      .onClick(this.handleChangeToQuiz);
    rightPageBottom.append(
      rightPageLeftButton.render(),
      rightPageRightButton.render()
    );
  }

  render() {
    this.createLeftPage();
    this.createRightPage();
    this.handleSettingsAssignment();
    const rootWrapper = document.getElementsByClassName("wrapper")[0];
    rootWrapper?.appendChild(this.openedBook);
  }
}
