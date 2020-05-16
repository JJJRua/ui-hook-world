import React from "react";
import WelcomeWrapper from "./components/WelcomeWrapper";
import ImageLinker from "./components/ImageLinker";
import Pixabay from "./views/Pixabay";
import CockTailDB from "./views/CockTailDB";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const headTitle = "Welcome to Hook world - Coding in Quarantine";
  const bodyMessage = `Hi we are using some public APIS. Click the image to visit their page.`;
  const pixabayImg = "./img/pixabay-logo.svg";
  const pixabayLink = "https://pixabay.com";
  const cockTailDBImg = "./img/cocktaildb-logo.png";
  const cockTailDBLink = "https://www.thecocktaildb.com";
  return (
    <Router>
      <div className="row h-100 align-items-center">
        <Switch>
          <Route path="/pixabay-view">
            <Pixabay />
          </Route>
          <Route path="/cocktail-view">
            <CockTailDB />
          </Route>
          <Route path="/">
            {/* HOME  */}
            <WelcomeWrapper
              head={headTitle}
              body={bodyMessage}
              className="mt-3"
            >
              <ImageLinker imgUrl={pixabayImg} imgLink={pixabayLink} />
              <Link to="/pixabay-view">
                <a href="#" className="text-primary">
                  Go to Pixabay Mini Project
                </a>
              </Link>
              <ImageLinker imgUrl={cockTailDBImg} imgLink={cockTailDBLink} />
              <Link to="/cocktail-view">
                <a href="#" className="text-primary">
                  Go to CockTailDB Mini Project
                </a>
              </Link>
            </WelcomeWrapper>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
