import React from "react";

const NeedsPerson = props => {
  const { person, check, children, ...rest } = props;
  if (!person) {
    return null;
  }
  if (!check(person)) {
    return "ALLE 30!!!!!!!!!!!!!!!!";
  }

  return children({
    person
  });
};

const PersonPage = props => {
  return (
    <NeedsPerson person={props.person} check={p => p.age >= 30}>
      {({ person }) => {
        return (
          <div>
            <h2>
              <strong>{person.lastName}</strong>, {person.firstName}
            </h2>
            <p>A sad life story.</p>
          </div>
        );
      }}
    </NeedsPerson>
  );
};

export default PersonPage;
