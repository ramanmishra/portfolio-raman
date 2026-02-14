# Idempotency Keys in Spring Boot APIs

Idempotency keys allow clients to safely retry requests without creating duplicate side effects. This is critical for payment-like flows, booking operations, and any write endpoint that can be retried by clients or gateways.

## Goal

For the same idempotency key and request payload, your API should return the same logical result.

## How to model it

- Client sends `Idempotency-Key` header
- Server stores key + request hash + response snapshot
- Repeated requests with same key:
  - Same hash -> return stored response
  - Different hash -> return `409 Conflict`

## Suggested table fields

- key
- request_hash
- status_code
- response_body
- created_at
- expires_at

## Spring Boot flow

1. Read key from header
2. Reject missing key for protected endpoints
3. Hash normalized request body
4. Lookup existing key
5. Insert key with lock if absent
6. Execute business logic once
7. Persist response snapshot

## Pitfalls

- Not hashing request payload
- Infinite key retention
- Non-atomic key insert
- Returning different status codes for retries

## Operational advice

- Add TTL cleanup job
- Emit metrics for reuse, conflict, and expired keys
- Scope key uniqueness per endpoint or tenant

## Closing

Idempotency keys are one of the easiest ways to increase API correctness under retries. Make the behavior explicit, deterministic, and observable.
