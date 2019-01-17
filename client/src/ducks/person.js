import { Map, List } from "immutable";
import personService from "../services/person";

const defaultState = Map({
  persons: List()
});

const FIRE_PERSON = "FIRE_PERSON";
const HIRE_PERSON = "HIRE_PERSON";

const GET_PERSONS_PENDING = "GET_PERSONS_PENDING";
const GET_PERSONS_REJECTED = "GET_PERSONS_REJECTED";
const GET_PERSONS_FULFILLED = "GET_PERSONS_FULFILLED";

export const firePerson = id => {
  return {
    type: FIRE_PERSON,
    payload: id
  };
};

export const hirePerson = person => {
  return {
    type: HIRE_PERSON,
    payload: person
  };
};

export const getPersons = () => {
  return async dispatch => {
    dispatch({
      type: GET_PERSONS_PENDING
    });

    try {
      const persons = await personService.getPersons();
      dispatch({
        type: GET_PERSONS_FULFILLED,
        payload: persons
      });
    } catch (e) {
      dispatch({
        type: GET_PERSONS_REJECTED,
        payload: e,
        error: true
      });
    }
  };
};

export default function personReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PERSONS_FULFILLED:
      return state.set("persons", List(payload));

    case HIRE_PERSON:
      return state.update("persons", persons => persons.push(payload));

    case FIRE_PERSON:
      return state.update("persons", persons =>
        persons.filter(p => p.id !== payload)
      );

    default:
      return state;
  }
}
