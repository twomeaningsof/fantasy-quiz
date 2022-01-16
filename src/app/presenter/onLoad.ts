import { LandingPage } from '../view/pages/landing';
import { WelcomePage } from '../view/pages/welcome';


export class Presenter {

  constructor() {
    new LandingPage;
    document.getElementsByClassName("content-wrapper")[0].addEventListener("click", this.changePage);
  }

  changePage = () => {
    document.getElementsByClassName("closed-book")[0].remove();
    new WelcomePage;
  }
}
