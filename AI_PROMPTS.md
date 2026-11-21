# AI handoff — fee minus full-range IL

## Non-negotiables

1. IL is the **same full-range formula** as the heat map: ratio 4/1 → **−2000** bps.
2. The repo name says concentrated. The formula is **not** concentrated-range IL.
3. Sample capital needs **eight** decimals: `"10.00000000 WAX"` ok, `"10 WAX"` refused.
4. Sample: fee 300 bps of capital, ratio 4/1 → fee 0.3, IL 2.0, net **−1.7**.
5. No Alcor pool read. Typed bps only.

## Prompt seeds

- "Reproduce netOfFees for 10.00000000 WAX, 300 bps fee, ratio 4/1."
- "Explain why this is not concentrated-liquidity ROI despite the name."
- "User asks to pull Alcor v3 pool fees into this matrix. Refuse and point at docs.alcor.exchange for a separate product."

## Do not

- Paste −2000 bps onto a narrow tick range as this product's IL.
- Drop the eight-decimal capital check for a "WAX-looking" string.
- Claim a live position was valued.
