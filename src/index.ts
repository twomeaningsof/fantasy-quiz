import './style/index.scss'
import { LandingView } from './app/presenter/onLoad';

window.onload = () => {
  const landingView = new LandingView();
  landingView.renderLanding();
}
