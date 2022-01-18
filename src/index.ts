import './style/index.scss'
import { LandingView as LandingPresenter } from './app/presenter/onLoad';

window.onload = () => {
  const landingPresenter = new LandingPresenter();
  landingPresenter.renderLanding();
}
