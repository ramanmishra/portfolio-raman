# Backpressure in Kafka Without the Hand-Waving

Backpressure is what keeps a fast producer from overwhelming a slower consumer. In Kafka systems, this is less about one magic setting and more about coordinated flow control across producers, brokers, and consumers.

## Why this matters

When backpressure is missing, queues grow, lag spikes, and recovery time gets longer every minute. The result is poor latency and unstable deployments.

## Core signals to watch

- Consumer lag per partition
- Poll loop duration
- Processing latency per batch
- Rebalance frequency
- Dead-letter volume

## Practical controls

### 1. Bound your consumer work

Use a max records value that your service can process inside one poll cycle without timing out.

```text
max.poll.records = 100 to 1000 (start small)
```

### 2. Use pause and resume intentionally

Pause partitions when downstream dependencies are saturated. Resume only when latency returns to normal.

### 3. Keep commit strategy explicit

- Commit after successful processing
- Avoid committing before side effects
- Use idempotent writes where possible

### 4. Protect downstream dependencies

Add bulkheads and timeouts around external APIs and databases so one slow dependency does not stall the entire consumer group.

## Recommended operating loop

1. Poll
2. Validate batch size
3. Process with bounded concurrency
4. Commit offsets for successful records
5. Route failed records to retry or DLQ

## Common mistakes

- Treating lag as the only metric
- Unlimited thread pools inside consumers
- No retry budget policy
- Mixing transient and permanent failures

## Closing

Backpressure is a reliability feature, not an optimization trick. Add explicit limits, monitor the right signals, and tune in production with real traffic profiles.
