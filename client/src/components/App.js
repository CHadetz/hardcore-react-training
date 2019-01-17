import React from "react";
import "./App.pcss";
import Loading from "./Loading";
import { Switch, Route } from "react-router";

import IndexPage from "./containers/IndexPageContainer";
import PersonPage from "./containers/PersonPageContainer";

class App extends React.Component {
  async componentDidMount() {
    const { getPersons } = this.props;
    getPersons();
  }

  render() {
    const { loading } = this.props;
    const imgSrc =
      "https://vignette.wikia.nocookie.net/pyruslords/images/5/51/Derp_Face.png/revision/latest?cb=20130515193137";

    return (
      <div>
        {loading && <Loading />}
        <header>
          <img src={imgSrc} />
          <h1>DERP ERP 4000</h1>
        </header>

        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/person/:id" component={PersonPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
