import "./style/index.scss";
import { LandingPresenter } from "./app/presenter/Landing";
import { SettingsModel } from "./app/model/Settings";

window.onload = () => {
  const settingsModel = new SettingsModel();
  const landingPresenter = new LandingPresenter(settingsModel);
  landingPresenter.initialize();
};
