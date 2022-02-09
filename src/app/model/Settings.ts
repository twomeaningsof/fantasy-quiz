import { QuestionType } from "./questionType";

export interface SettingsData {
  singleChoiceEnabled: boolean;
  multipleChoiceEnabled: boolean;
  trueFalseChoiceEnabled: boolean;
  timeLimit: string;
}

export class SettingsModel {
  constructor(
    private settingsData: SettingsData = {
      singleChoiceEnabled: true,
      multipleChoiceEnabled: true,
      trueFalseChoiceEnabled: true,
      timeLimit: "4",
    }
  ) {}

  getSettingsData() {
    return this.settingsData;
  }

  private handleQuestionTypeSwitch(
    setting: boolean,
    questionType: QuestionType
  ) {
    if (questionType === "single-choice")
      this.settingsData.singleChoiceEnabled = setting;
    if (questionType === "multiple-choice")
      this.settingsData.multipleChoiceEnabled = setting;
    if (questionType === "true-false")
      this.settingsData.trueFalseChoiceEnabled = setting;
  }

  private handleTimeLimitChange(setting: string) {
    this.settingsData.timeLimit = setting;
  }

  handleSettingsChange = (
    setting: boolean | string,
    questionType?: QuestionType
  ) => {
    if (typeof setting == "boolean" && questionType) {
      this.handleQuestionTypeSwitch(setting, questionType);
    } else if (typeof setting == "string") {
      this.handleTimeLimitChange(setting);
    } else {
      throw "Not supported setting type";
    }
  };
}
