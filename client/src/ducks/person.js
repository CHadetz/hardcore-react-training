import { Map } from "immutable";
import personService from "../services/person";

const defaultState = Map({
  persons: Map()
});

const FIRE_PERSON = "FIRE_PERSON";
const FIRE_PERSON_PENDING = "FIRE_PERSON_PENDING";
const FIRE_PERSON_FULFILLED = "FIRE_PERSON_FULFILLED";

const HIRE_PERSON = "HIRE_PERSON";
const HIRE_PERSON_FULFILLED = "HIRE_PERSON_FULFILLED";

const GET_PERSONS = "GET_PERSONS";
const GET_PERSONS_FULFILLED = "GET_PERSONS_FULFILLED";

export const firePerson = id => {
  return {
    type: FIRE_PERSON,
    payload: {
      data: id,
      promise: personService.firePerson(id)
    }
  };
};

export const hirePerson = person => {
  return {
    type: HIRE_PERSON,
    payload: personService.hirePerson(person)
  };
};

export const getPersons = () => {
  return {
    type: GET_PERSONS,
    payload: personService.getPersons()
  };
};

// Because middleware magic, above works same as:
// export const getPersons = () => {
//   return async dispatch => {
//     dispatch({
//       type: GET_PERSONS_PENDING
//     });

//     try {
//       const persons = await personService.getPersons();
//       dispatch({
//         type: GET_PERSONS_FULFILLED,
//         payload: persons
//       });
//     } catch (e) {
//       dispatch({
//         type: GET_PERSONS_REJECTED,
//         payload: e,
//         error: true
//       });
//     }
//   };
// };

export default function personReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PERSONS_FULFILLED:
      return state.set("persons", Map(payload.map(p => [p.id, p])));

    case HIRE_PERSON_FULFILLED:
      return state.setIn(["persons", payload.id], payload);

    case FIRE_PERSON_PENDING:
      return state.updateIn(["persons", payload], person => {
        return {
          ...person,
          isBeingFired: true
        };
      });

    case FIRE_PERSON_FULFILLED:
      return state.removeIn(["persons", payload]);

    default:
      return state;
  }
}
