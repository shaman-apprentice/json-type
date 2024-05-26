export type JSONValue = JSONPrimitive | JSONObject | JSONArray;
export type JSONPrimitive = string | number | boolean | null
export type JSONObject = { [key: string]: JSONValue };
export type JSONArray = JSONValue[];

export type JSONSerializable<T> = T extends JSONSerializableValue ? T : never;
export type JSONSerializableValue = JSONPrimitive | JSONSerializableObject | JSONSerializableArray
export type JSONSerializableObject = { [key: string]: undefined | JSONSerializableValue };
export type JSONSerializableArray = JSONSerializableValue[]
 