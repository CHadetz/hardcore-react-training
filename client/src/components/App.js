import React from "react";
import "./App.pcss";
import personService from "../services/person";
import PersonList from "./PersonList";
import AddPersonForm from "./AddPersonForm";
import { List } from "immutable";

class App extends React.Component {
  state = {
    persons: List()
  };

  async componentDidMount() {
    const persons = await personService.getPersons();

    this.setState(() => ({
      persons: List(persons)
    }));
  }

  firePerson = id => {
    return this.setState(state => {
      return {
        persons: state.persons.filter(p => p.id !== id)
      };
    });
  };

  hirePerson = person => {
    return this.setState(state => {
      return {
        persons: state.persons.push(person)
      };
    });
  };

  render() {
    const { persons } = this.state;

    const isGood = person => {
      return person.gender === "m" && person.age < 30;
    };

    const goodPersons = persons.filter(isGood);
    const badPersons = persons.filter(p => !isGood(p));

    return (
      <div>
        <h1>Fraktio Fudulotto</h1>

        <AddPersonForm hirePerson={this.hirePerson} />

        <h2>Bad people</h2>
        <PersonList
          firePerson={this.firePerson}
          showMetadata
          persons={badPersons}
        />

        <h2>Good people</h2>
        <PersonList firePerson={this.firePerson} persons={goodPersons} />
      </div>
    );
  }
}

export default App;
