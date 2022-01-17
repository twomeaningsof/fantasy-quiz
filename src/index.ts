import './style/index.scss'
import { LandingPage } from './app/presenter/onLoad';


window.onload = () => {
  const landingView = new LandingPage;
  landingView.render();
}
