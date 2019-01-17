import React from "react";
import Person from "./Person";
import PropTypes from "prop-types";
import ImmutablePropTypes from "react-immutable-proptypes";

const PersonList = props => {
  const { persons, showMetadata, firePerson } = props;

  const averageAge =
    persons.reduce((r, person) => r + person.age, 0) / persons.count();

  return (
    <div>
      {showMetadata && (
        <>
          <p>Number of people: {persons.count()}</p>
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
  persons: ImmutablePropTypes.list.isRequired,
  showMetadata: PropTypes.bool.isRequired
};

PersonList.defaultProps = {
  showMetadata: false
};

export default PersonList;
