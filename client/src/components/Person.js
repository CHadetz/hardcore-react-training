import React from "react";
import styles from "./Person.pcss";
import cx from "classnames";
import Button from "./Button";

const Person = props => {
  const { person, firePerson } = props;

  const classes = cx(styles.person, {
    // Prop key can be variable inside []
    [styles.male]: person.gender === "m",
    [styles.female]: person.gender === "f"
  });

  return (
    <div className={classes}>
      <div>
        <strong>{person.lastName}</strong>,{person.firstName} (
        {person.age.toFixed(2)})
      </div>
      <div>
        <Button onClick={() => firePerson(person.id)}>
          LIBERATE <span>💩</span>
        </Button>
      </div>
    </div>
  );
};

export default Person;
