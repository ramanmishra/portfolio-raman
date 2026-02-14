# Designing a Rate Limiter: Token Bucket Explained

A token bucket rate limiter allows short bursts while enforcing a steady long-term rate. It is simple, predictable, and production friendly.

## Model

- Bucket capacity `C`
- Refill rate `R` tokens per second
- Request cost `1` token

If bucket has tokens, request is allowed and token count decreases. If empty, request is rejected or delayed.

## Why token bucket

- Supports natural traffic bursts
- Easy to reason about
- Works for user-level and API-key-level limits

## Redis-friendly implementation

1. Use key per identity (user, api key, tenant)
2. Store token count + last refill timestamp
3. Compute refill on each request
4. Use Lua script for atomic read-modify-write

## Decisions you must make

- Reject (`429`) or queue when limited
- Fixed per endpoint vs shared budget
- Soft limits for premium users

## Metrics

- Allow rate
- Reject rate
- Burst size distribution
- Top limited identities

## Failure handling

If Redis is down, decide fail-open vs fail-closed by endpoint criticality.

## Closing

Token bucket is a strong default for API protection. Keep it atomic, observable, and aligned to product tiers.
