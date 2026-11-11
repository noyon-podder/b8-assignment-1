# Combining Union (`|`) and Intersection (`&`) in TypeScript

My notes with one practical example of using union and intersection types together.

## The basic idea

- Union (`|`) means **one of these types**. A value can be A or B.
- Intersection (`&`) means **all of these types together**. A value must have everything from A and B.

```typescript
type A = { a: string };
type B = { b: number };

type Either = A | B; // has a, or has b
type Both = A & B; // has a and b
```

## Practical example: API response

Every response from my API has some common fields, like `requestId` and `timestamp`. But the rest depends on whether the request worked or failed.

- The common fields are the same for every response, so I use `&`.
- Success or error is a choice, so I use `|`.

```typescript
type BaseResponse = {
  requestId: string;
  timestamp: number;
};

type SuccessData = {
  status: "success";
  data: { id: number; name: string };
};

type ErrorData = {
  status: "error";
  message: string;
};

type ApiResponse = BaseResponse & (SuccessData | ErrorData);
```

Now a response must have the base fields, and it must also be either a success or an error.

```typescript
const okResponse: ApiResponse = {
  requestId: "req-1",
  timestamp: Date.now(),
  status: "success",
  data: { id: 1, name: "Rakib" },
};

const errorResponse: ApiResponse = {
  requestId: "req-2",
  timestamp: Date.now(),
  status: "error",
  message: "User not found",
};
```

These two give an error:

```typescript
// Error: success response can't have a message
const bad1: ApiResponse = {
  requestId: "req-3",
  timestamp: Date.now(),
  status: "success",
  message: "Hello",
};

// Error: missing requestId and timestamp
const bad2: ApiResponse = {
  status: "error",
  message: "Something went wrong",
};
```

## Summary

- Use `&` to add shared fields to a type.
- Use `|` when a value can be one of a few different shapes.
- Together they work well for things like API responses, where some fields are common and some depend on the case.
- Add a field like `status` to every shape in the union, so narrowing with `if` is easy.
