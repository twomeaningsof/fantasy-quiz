import "./style/index.scss";
import { LandingPresenter } from "./app/presenter/Landing";
import { SettingsModel } from "./app/model/Settings";

window.onload = () => {
  const mobileMessageWrapper = document.createElement("div");
  mobileMessageWrapper.classList.add("mobile-message-wrapper");

  const mobileMessage = document.createElement("div");
  mobileMessage.classList.add("mobile-message-wrapper__message");
  mobileMessage.textContent =
    "Fantasy quiz app supports only desktops, i.e. +1024px width windows";

  mobileMessageWrapper.appendChild(mobileMessage);

  document.body.appendChild(mobileMessageWrapper);

  const settingsModel = new SettingsModel();
  const landingPresenter = new LandingPresenter(settingsModel);
  landingPresenter.initialize();
};
