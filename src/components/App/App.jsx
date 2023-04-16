import React from "react";
import Navigation from "../Navigation/Navigation";
import Main from "../../pages/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Main />
      <Footer />
      <div className="puple-ball"></div>
      <div className="red-ball"></div>
      <div className="red-ball_small"></div>
      <div className="puple-light"></div>
      <div className="red-light"></div>
    </div>
  );
}

export default App;
