import React from "react";
import Person from "./Person";
import PropTypes from "prop-types";

const PersonList = props => {
  const { persons, showMetadata, firePerson } = props;

  const averageAge =
    persons.reduce((r, person) => r + person.age, 0) / persons.length;

  return (
    <div>
      {showMetadata && (
        <>
          <p>Number of people: {persons.length}</p>
          <p>Average age: {averageAge.toFixed(2)}</p>
        </>
      )}

      {persons.map(person => (
        <Person firePerson={firePerson} key={person.id} person={person} />
      ))}
    </div>
  );
};

PersonList.propTypes = {
  firePerson: PropTypes.func.isRequired,
  persons: PropTypes.array.isRequired,
  showMetadata: PropTypes.bool.isRequired
};

PersonList.defaultProps = {
  showMetadata: false
};

export default PersonList;
