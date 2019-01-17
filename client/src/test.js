const { List, Seq } = require("immutable");

const persons = List(["Edi", "Pekkis", "Gaylord"]);
const persons2 = persons.push("Heikki");
const persons3 = persons.concat(["Larva"]);

console.log(persons);
console.log(persons2);
console.log(persons3);

const object = {
  key: "value",
  key2: "value2",
  key3: "value3"
};

const object2 = Seq(object)
  .map((value, key) => {
    return "bluubluu";
  })
  .toJS();

console.log(object2);
