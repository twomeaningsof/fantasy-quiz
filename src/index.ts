import "./style/index.scss";
import { LandingPresenter } from "./app/presenter/Landing";

window.onload = () => {
  const landingPresenter = new LandingPresenter();
  landingPresenter.initialize();
};
