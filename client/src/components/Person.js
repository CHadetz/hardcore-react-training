import React from "react";
import styles from "./Person.pcss";
import cx from "classnames";
import Button from "./Button";
import { Link } from "react-router-dom";

const Person = props => {
  const { person, firePerson } = props;

  const classes = cx(styles.person, {
    // Prop key can be variable inside []
    [styles.male]: person.gender === "m",
    [styles.female]: person.gender === "f",
    [styles.isBeingFired]: person.isBeingFired
  });

  return (
    <div className={classes}>
      <div>
        <Link to={`/person/${person.id}`}>
          <strong>{person.lastName}</strong>, {person.firstName} (
          {person.age.toFixed(2)})
        </Link>
      </div>
      <div>
        <Button
          disabled={person.isBeingFired}
          onClick={() => firePerson(person.id)}
        >
          LIBERATE <span>💩</span>
        </Button>
      </div>
    </div>
  );
};

export default Person;
