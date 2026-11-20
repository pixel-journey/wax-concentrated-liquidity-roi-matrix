# Education — a typed fee minus full-range IL

> **Rung:** `npm test` passes. Capital is a string you type. The price ratio is two integers. No pool is read.  
> **The test is the rule.** The IL line is the same integer formula as [wax-lp-impermanent-loss-heat-map](https://github.com/pixel-journey/wax-lp-impermanent-loss-heat-map): `2 * isqrt(num * den) * 10000 / (num + den) - 10000`. This file is not concentrated-liquidity IL.

## Predict, then run

`netOfFees("10.00000000 WAX", 300n, 4n, 1n)`

| Field | Result |
| --- | --- |
| `ilBps` | `-2000n` (a 4x move, full range) |
| fee | `0.30000000 WAX` (300 bps of 10) |
| IL units | `2.00000000 WAX` (2000 bps of 10) |
| net | `-1.70000000 WAX` |

`netOfFees("10 WAX", ...)` is not ok. The capital string needs eight decimal places. Eight decimals is the WAX token precision in this parser, not a chain read.

The HTTP examples include an Atomic Packs `unboxassets` row. That request is unsent, and it is not this subtraction.
