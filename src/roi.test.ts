import { describe, expect, it } from "vitest";
import { formatWax, netOfFees, waxUnits } from "./roi";

describe("fee minus IL", () => {
  it("subtracts a 4x full-range loss from a 3% fee", () => {
    const net = netOfFees("10.00000000 WAX", 300n, 4n, 1n);
    expect(net.ok).toBe(true);
    if (!net.ok) return;
    expect(net.ilBps).toBe(-2000n);
    expect(formatWax(net.feeUnits)).toBe("0.30000000 WAX");
    expect(formatWax(net.ilUnits)).toBe("2.00000000 WAX");
    expect(formatWax(net.netUnits)).toBe("-1.70000000 WAX");
  });

  it("zero IL at 1x leaves the fee as net", () => {
    const net = netOfFees("10.00000000 WAX", 300n, 1n, 1n);
    expect(net.ok).toBe(true);
    if (!net.ok) return;
    expect(net.ilBps).toBe(0n);
    expect(formatWax(net.ilUnits)).toBe("0.00000000 WAX");
    expect(formatWax(net.netUnits)).toBe("0.30000000 WAX");
  });

  it("a 2x move is covered by a large typed fee", () => {
    // fullRange IL at 2/1 is about -572 bps (integer isqrt path)
    const net = netOfFees("10.00000000 WAX", 2000n, 2n, 1n);
    expect(net.ok).toBe(true);
    if (!net.ok) return;
    expect(net.ilBps).toBeLessThan(0n);
    expect(net.netUnits).toBeGreaterThan(0n);
  });

  it("refuses short capital and out-of-range fee bps", () => {
    expect(netOfFees("10 WAX", 300n, 1n, 1n).ok).toBe(false);
    expect(netOfFees("10.00000000 WAX", -1n, 1n, 1n).ok).toBe(false);
    expect(netOfFees("10.00000000 WAX", 10001n, 1n, 1n).ok).toBe(false);
  });

  it("parses WAX units at 8 decimals", () => {
    expect(waxUnits("10.00000000 WAX")).toBe(1_000_000_000n);
    expect(waxUnits("10 WAX")).toBeNull();
  });
});
