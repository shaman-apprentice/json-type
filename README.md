# json-type

TypeScript type for valid JSON values as well as stringify and parse methods

## Example Usage

### Simple values

```ts
import type { JSONValue } from "@shaman-apprentice/json-type";

const valid: JSONValue = {
  a: "a",
  b: null,
};

// @ts-expect-error
const invalid: JSONValue = {
  a: undefined,
  b: new SomeClass(),
};
```

### Serialization with JSON

```ts
import { JSONValue, parse, stringify } from "@shaman-apprentice/json-type";

type User = JSONSerializable<{ 
  name: string;
}> // same as `type User = { name: string }`
const user: User = { name: "shaman-apprentice" };
const serializedUser: string = stringify(user);
const deserializedUser = parse<User>(serializedUser);
console.log(deserializedUser.name); // "shaman-apprentice"

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
```

