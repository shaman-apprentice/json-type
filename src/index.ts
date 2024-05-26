import { JSONSerializableValue } from "./json-type";

export * from "./json-type";

/**
 * Simply calls `JSON.stringify(data)`, but ensures given data extends `JSONSerializableValue`.
 */
export function stringify<T extends JSONSerializableValue>(data: T): string {
  return JSON.stringify(data);
}

/**
 * Simply calls `JSON.parse(serializedData)` but ensures returned type extends JSONSerializableValue.
 */
export function parse<T extends JSONSerializableValue>(serializedData: string): T {
  return JSON.parse(serializedData);
}
