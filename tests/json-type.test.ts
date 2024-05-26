import { parse, stringify } from "../src";
import type { JSONSerializable, JSONValue } from "../src/json-type";

const plainNumber: JSONValue = 2;
const nested: JSONValue = [
  2,
  { a: "a", n: null, b: 2 },
  [ true ]
];
const empty:JSONValue = {};

// @ts-expect-error
const undefinedIsNotAllowed: JSONValue = undefined;
// @ts-expect-error
const dateIsNotAllowed: JSONValue = { d: new Date() };

const deserializedString = parse<string>("something");


type User = JSONSerializable<{ 
  name: string;
  socialMedia: string | undefined;
}> // same as `type User = { name: string }`
const user: User = { name: "shaman-apprentice", socialMedia: undefined };
const serializedUser: string = stringify(user);
const deserializedUser = parse<User>(serializedUser);
console.log(deserializedUser.name); // "shaman-apprentice"
console.log(deserializedUser.socialMedia); // undefined

type InvalidUser = JSONSerializable<User & { 
  work: () => number;
}> // same as `type InvalidUser = never`, because property `work` is not restored by JSON.parse(Json.stringify(user));
// @ts-expect-error
const invalidUser: InvalidUser = { name: "shaman-apprentice", work: () => -1 };
const serializedInValidUser: string = stringify(invalidUser);
const deserializedInValidUser = parse<InvalidUser>(serializedInValidUser);
// @ts-expect-error
console.log(deserializedInValidUser.name); // "shaman-apprentice"
// @ts-expect-error
deserializedInValidUser.work(); // would result in a runtime error
