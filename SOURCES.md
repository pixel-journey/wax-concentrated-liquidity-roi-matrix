# Sources

| Source | Use |
| --- | --- |
| [IL heat map](https://github.com/pixel-journey/wax-lp-impermanent-loss-heat-map) | Same IL integer formula |
| [docs.alcor.exchange/api](https://docs.alcor.exchange/api) | v3 for new pool reads elsewhere. This lab does not read a pool. |
| [SECURITY.md](SECURITY.md) | Locked sample and refusals |

## Product facts locked by tests

```text
ilBps = 2 * isqrt(num * den) * 10000 / (num + den) - 10000   # full-range
```

Sample: `netOfFees("10.00000000 WAX", 300n, 4n, 1n)` → IL **−2000** bps, fee 0.3, IL amount 2.0, net **−1.7**.

- Capital strings need **eight** decimals for the WAX-shaped sample (`"10 WAX"` refused).
- This is **full-range** IL with a typed fee. It is **not** concentrated-range IL (narrow ranges lose more).
- No Alcor fee tier is read. Typed bps only.

## Portability

The IL ratio formula ports. The sample string precision is WAX-shaped (8). Another chain's system token may be precision 4. PXJ in this org is always 8.

## What this is not

- Not concentrated-liquidity ROI despite the repo name.
- Not a live Alcor valuation.
- Not a withdrawal authorization.
