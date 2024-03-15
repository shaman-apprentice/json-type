# json-type

Simple TypeScript type for valid JSON values.

## Example Usage

```ts
import type { JSONValue } from "@shaman-apprentice/json-type";

const valid: JSONValue = {
  a: "a",
  b: null,
};

const invalid: JSONValue = {
  a: undefined,
  b: new SomeClass(),
};
```