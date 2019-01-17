import { connect } from "react-redux";
import App from "../App";
import { getPersons } from "../../ducks/person";
import { withRouter } from "react-router";

/*
State structure:
{
  person: Map({
    persons: List()
  }),
  ui: Map({
    loading: int // 0-n
  })
}
*/

export default withRouter(
  connect(
    state => ({
      loading: state.ui.get("loading") > 0
    }),
    {
      getPersons
    }
  )(App)
);
