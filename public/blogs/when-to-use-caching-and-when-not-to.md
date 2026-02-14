# When to Use Caching and When Not To

Caching can remove latency and reduce load, but it also introduces invalidation complexity and consistency risks.

## Use caching when

- Read volume is much higher than write volume
- Data access is repeated and predictable
- Slight staleness is acceptable

## Avoid caching when

- Data changes constantly
- Correctness requires strict read-after-write consistency
- Cache hit rates are low

## Common cache patterns

- Cache-aside
- Read-through
- Write-through
- Write-behind

## Practical safeguards

- Always define TTL intentionally
- Include versioning in keys
- Protect against stampede using single-flight locks
- Track hit ratio and eviction reasons

## Cache key design

Good keys are stable, scoped, and explicit. Include tenant or region when data isolation matters.

## Closing

Cache only after understanding access patterns. Good caching is selective and measurable, not global by default.
