import { JSONValue } from "./json-type";

export * from "./json-type";

/**
 * Simply calls `JSON.stringify(data)`, but ensures given data extends `JSONValue`.
 */
export function stringify<T extends JSONValue>(data: T): string {
  return JSON.stringify(data);
}

/**
 * Simply calls `JSON.parse(serializedData)` but ensures returned type extends JSONValue.
 */
export function parse<T extends JSONValue>(serializedData: string): T {
  return JSON.parse(serializedData);
}
