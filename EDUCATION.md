# Education — a typed fee minus full-range IL

> **Rung:** `npm test` passes. Capital is a string you type. The price ratio is two integers. No pool is read.  
> **The test is the rule.** The IL line is the same integer formula as [wax-lp-impermanent-loss-heat-map](https://github.com/pixel-journey/wax-lp-impermanent-loss-heat-map). This file is **not** concentrated-liquidity IL despite the historical repo name.

## Learning outcomes

| Level | After this file |
| --- | --- |
| Beginner | Compute fee units, IL units, and net for a typed capital + bps + ratio |
| Intermediate | Explain why 1x has zero IL and why 4x at 300 bps is still negative net |
| Masterclass | Separate this subtraction from CLMM ticks and Alcor volume |

---

## Beginner — one scene

`netOfFees("10.00000000 WAX", 300n, 4n, 1n)`

| Field | Result |
| --- | --- |
| `ilBps` | `-2000n` (4x move, full range) |
| fee | `0.30000000 WAX` (300 bps of 10) |
| IL units | `2.00000000 WAX` |
| net | `-1.70000000 WAX` |

| Call | Locked result |
| --- | --- |
| ratio `1/1` | `ilBps` `0`, net equals the fee |
| `"10 WAX"` | not ok — eight decimals required |
| fee `> 10000` or `< 0` | not ok |

```bash
npm test
```

---

## Intermediate — same IL as the heat map

Formula: `(2 * isqrt(num * den) * 10000) / (num + den) - 10000`.

| Ratio | IL bps (full range) |
| --- | --- |
| 1/1 | 0 |
| 4/1 | −2000 |

Fee is a **caller-typed** integer in bps. It is not an Alcor fee tier or volume read.

### Attack → test

| Attack | Lab behavior |
| --- | --- |
| Drop decimals in capital | refused |
| Call this concentrated IL | refused in docs + name honesty |
| Pull v3 pool fees into the matrix | out of scope |

### Exercises

1. Net for 10 WAX, 300 bps, 4/1? (`-1.70000000 WAX`.)  
2. IL at 1/1? (`0`.)  
3. Is this concentrated-range IL? (**No**.)

---

## Masterclass

| Sibling | Role |
| --- | --- |
| [IL heat map](https://github.com/pixel-journey/wax-lp-impermanent-loss-heat-map) | Same IL formula alone |
| [range optimizer](https://github.com/pixel-journey/wax-alcor-v2-range-optimizer) | Cover width fraction — not this subtraction |
| [range backtester](https://github.com/pixel-journey/wax-alcor-v2-range-efficiency-backtester) | Different fee product |

HTTP builders stay unsent. The name says concentrated; the arithmetic does not.

---

## What this course will not teach

- Concentrated-liquidity IL
- Live Alcor volume or fee tiers
- That net is a forecast of a position
