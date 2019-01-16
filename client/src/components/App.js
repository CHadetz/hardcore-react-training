import React from "react";
import Person from "./Person";
import "./App.pcss";

class App extends React.Component {
  state = {
    persons: [
      {
        id: "one",
        firstName: "Jere",
        lastName: "Hirvonen",
        gender: "m",
        age: 25,
        salary: 4000
      },
      {
        id: "two",
        firstName: "Pekkiina",
        lastName: "Lussukainen",
        gender: "f",
        age: 45,
        salary: 5500
      }
    ]
  };

  render() {
    const { persons } = this.state;

    return (
      <div>
        <h1>Fraktio Fudulotto</h1>
        <p>Tool for maximizing company profitability</p>
        {persons.map(person => (
          <Person key={person.id} person={person} />
        ))}
      </div>
    );
  }
}

export default App;
