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

    return (
      <div>
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
