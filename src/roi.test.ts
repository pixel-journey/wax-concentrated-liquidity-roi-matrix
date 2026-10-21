import { describe, expect, it } from "vitest";
import { formatWax, netOfFees } from "./roi";

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

  it("refuses a short capital string", () => {
    expect(netOfFees("10 WAX", 300n, 1n, 1n).ok).toBe(false);
  });
});
