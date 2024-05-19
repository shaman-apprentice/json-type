export type JSONValue = JSONPrimitive | JSONObject | JSONArray;

export type JSONPrimitive = string | number | boolean | null

export type JSONObject = { [key: string]: JSONValue };

export type JSONArray = JSONValue[];

export type JSONSerializable<T> = T extends JSONValue ? T : never;
 