# Functional Error Handling in Scala with Either

`Either` lets you model success and failure as values. This gives predictable control flow and avoids exception-driven business logic.

## Basic shape

- `Left(error)` for failure
- `Right(value)` for success

## Why teams prefer this

- Failures are explicit in method signatures
- Easy composition using `map` and `flatMap`
- Cleaner service-layer contracts

## Example

```scala
case class ValidationError(message: String)

def parsePort(raw: String): Either[ValidationError, Int] =
  raw.toIntOption.toRight(ValidationError("Invalid port"))

def validatePort(port: Int): Either[ValidationError, Int] =
  if (port >= 1 && port <= 65535) Right(port)
  else Left(ValidationError("Port out of range"))

def loadPort(raw: String): Either[ValidationError, Int] =
  for {
    parsed <- parsePort(raw)
    valid <- validatePort(parsed)
  } yield valid
```

## Patterns that scale

- Define domain error ADTs
- Convert external exceptions at boundaries
- Keep `Either` inside application/service layers

## Common anti-patterns

- Throwing exceptions after using `Either`
- Returning vague string errors everywhere
- Converting to `Option` too early and losing detail

## Closing

Use `Either` when you want explicit and composable failure handling. It improves readability and testability in backend-heavy Scala services.
