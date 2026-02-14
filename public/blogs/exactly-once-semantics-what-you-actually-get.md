# Exactly-Once Semantics: What You Actually Get

Exactly-once semantics in Kafka reduces duplication in specific boundaries, but it does not magically make every external side effect exactly once.

## What Kafka gives you

- Idempotent producer to avoid duplicate writes from retries
- Transactions to atomically write records and commit consumed offsets

## What Kafka does not guarantee alone

- Exactly-once behavior in external databases
- Exactly-once calls to third-party APIs
- End-to-end exactly once across heterogeneous systems

## Practical architecture

1. Consume records
2. Apply business logic
3. Write output topic in transaction
4. Commit offsets in same transaction
5. Use idempotent sink pattern for external systems

## Idempotent sink essentials

- Deterministic operation keys
- Deduplication store with TTL
- Safe retry policy

## Common misunderstanding

Teams often assume enabling producer idempotence solves everything. It only solves one part of the pipeline.

## Closing

Treat exactly-once as scoped guarantees. Document those boundaries and design idempotency where boundaries end.
