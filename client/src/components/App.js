import React from "react";
import "./App.pcss";
import PersonList from "./PersonList";
import AddPersonForm from "./AddPersonForm";

class App extends React.Component {
  async componentDidMount() {
    const { getPersons } = this.props;
    getPersons();
  }

  render() {
    const { persons, hirePerson, firePerson } = this.props;

    const isGood = person => {
      return person.gender === "m" && person.age < 30;
    };

    const goodPersons = persons.filter(isGood);
    const badPersons = persons.filter(p => !isGood(p));

    const imgSrc =
      "https://vignette.wikia.nocookie.net/pyruslords/images/5/51/Derp_Face.png/revision/latest?cb=20130515193137";

    return (
      <div>
        <img src={imgSrc} />
        <h1>DERP ERP 4000</h1>

        <AddPersonForm hirePerson={hirePerson} />

        <h2>Bad people</h2>
        <PersonList firePerson={firePerson} showMetadata persons={badPersons} />

        <h2>Good people</h2>
        <PersonList firePerson={firePerson} persons={goodPersons} />
      </div>
    );
  }
}

export default App;
