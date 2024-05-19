# Changelog

This changelog is roughly based on [Keep a Changelog](http://keepachangelog.com/).

## [unreleased] (Feat 🚀 | Fixed 🐞 | Breaking 🐱)

## [1.1.0] 2024-05-19

### Feat 🚀

- Add type safe `parse` and `stringify` helpers, which simply pass through to `JSON.parse` and `JSON.stringify`.
- Add type `JSONSerializable<T>`, which acts as identity for `T`, when `T extends JSONValue` and resolves to `never` otherwise. Hence, type `JSONSerializable<T>` ensures safe serialization with `JSON.parse` and `JSON.stringify`.

## [1.0.0] 2024-03-15

- Release initial version.
