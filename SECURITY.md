# Security — typed fee minus full-range IL

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Capital needs eight decimals | `"10 WAX"` refused; `"10.00000000 WAX"` ok |
| `netOfFees("10.00000000 WAX", 300n, 4n, 1n)` | ilBps **-2000**, fee 0.3, IL 2.0, net **-1.7** |
| IL formula | same as IL heat map: `2 * isqrt(num*den) * 10000 / (num+den) - 10000` |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Concentrated-range IL | **Not** modeled — this is full-range IL |
| Live pool | Arguments only |
| Fee tier truth | Typed bps, not Alcor fee tier read |

## Attack angles

1. Calling this concentrated-liquidity ROI.  
2. Using 4-decimal capital strings against WAX@8 precision.  
3. Mixing with [range efficiency](https://github.com/pixel-journey/wax-alcor-v2-range-efficiency-backtester) without noting different products.  
4. Claiming a live Alcor position was valued.

## Honesty limits

No network. No wasm. Not concentrated liquidity.

| Sibling | Distinction |
| --- | --- |
| [IL heat map](https://github.com/pixel-journey/wax-lp-impermanent-loss-heat-map) | Same IL integer formula |
| [range efficiency](https://github.com/pixel-journey/wax-alcor-v2-range-efficiency-backtester) | Truncating fee product (7 tokens sample) |
| [LP fee lifecycle](https://github.com/pixel-journey/wax-lp-fee-lifecycle-auditor) | compound/extract/idle labels |

[docs.wax.io](https://docs.wax.io/).
