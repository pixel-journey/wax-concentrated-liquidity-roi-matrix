# Security — typed fee minus full-range IL

## Closed in tests

| Issue | Behavior |
| --- | --- |
| Capital needs eight decimals | `"10 WAX"` refused; `"10.00000000 WAX"` ok |
| `netOfFees(..., 300n, 4n, 1n)` | ilBps **-2000**, fee 0.3, IL 2.0, net **-1.7** |
| ratio `1/1` | ilBps **0**, net equals fee |
| fee bps outside 0..10000 | refused |
| IL formula | same as IL heat map |

## Not closed (production)

| Concern | Guidance |
| --- | --- |
| Concentrated-range IL | **Not** modeled |
| Live pool | Arguments only |
| Fee tier truth | Typed bps, not Alcor fee tier |

## Attack angles

1. Calling this concentrated-liquidity ROI.  
2. Using 4-decimal capital strings against WAX@8 precision.  
3. Claiming a live Alcor position was valued.  
4. Mixing with range-efficiency labs without noting different products.

## Honesty limits

No network. No wasm. Not concentrated liquidity.

| Sibling | Distinction |
| --- | --- |
| [IL heat map](https://github.com/pixel-journey/wax-lp-impermanent-loss-heat-map) | Same IL integer formula |
| [range optimizer](https://github.com/pixel-journey/wax-alcor-v2-range-optimizer) | Cover width fraction |
| [range efficiency](https://github.com/pixel-journey/wax-alcor-v2-range-efficiency-backtester) | Truncating fee product |

[docs.wax.io](https://docs.wax.io/).
