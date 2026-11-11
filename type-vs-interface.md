# type vs interface in TypeScript

My notes on the difference between `type` and `interface`, and when I should use each one.

## The short version

Both can describe the shape of an object, and most of the time either one works. The difference shows up in a few places.

## 1. Describing an object

Both look almost the same here.

```typescript
interface User {
  id: number;
  name: string;
}

type UserType = {
  id: number;
  name: string;
};
```

## 2. Extending

`interface` uses `extends`. `type` uses `&`.

```typescript
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}
```

```typescript
type Animal = {
  name: string;
};

type Dog = Animal & {
  breed: string;
};
```

## 3. Union types (only `type`)

An `interface` can't make a union. Only `type` can.

```typescript
type Status = "pending" | "done" | "failed";
type Id = string | number;
```

## 4. Primitives and tuples (only `type`)

`type` can give a name to anything, not just objects.

```typescript
type Age = number;
type Point = [number, number];
type Callback = (value: string) => void;
```

## 5. Declaration merging (only `interface`)

If I write the same `interface` twice, TypeScript merges them into one. If I write the same `type` twice, I get an error.

```typescript
interface Car {
  brand: string;
}

interface Car {
  year: number;
}

const car: Car = { brand: "Toyota", year: 2020 }; // both fields are needed
```

```typescript
type Bike = { brand: string };
type Bike = { year: number }; // Error: Duplicate identifier 'Bike'
```

This is useful when I want to add something to a type from a library, for example adding a field to Express's `Request`.

## 6. Classes

A class can `implement` an `interface`.

```typescript
interface Printable {
  print(): void;
}

class Report implements Printable {
  print() {
    console.log("Printing...");
  }
}
```

A class can also implement a `type` if it is an object shape, but not if it is a union.

## Quick table

|                               | `interface` | `type` |
| ----------------------------- | ----------- | ------ |
| Object shape                  | Yes         | Yes    |
| Extend                        | `extends`   | `&`    |
| Union types                   | No          | Yes    |
| Primitives, tuples, functions | No          | Yes    |
| Declaration merging           | Yes         | No     |
| Mapped and conditional types  | No          | Yes    |

## When I use which

Use `interface` when:

- I am describing the shape of an object or a class
- I want to extend it later
- I am building a library and other people may need to add to it

Use `type` when:

- I need a union, tuple or primitive alias
- I need mapped or conditional types
- I want to combine types with `&`

## My rule

If it is an object shape, I start with `interface`. If it needs anything more than that, I use `type`. The most important thing is to stay consistent in the same project.
