"use client";

import { formatWax, netOfFees } from "./roi";

export function Demo() {
  const net = netOfFees("10.00000000 WAX", 300n, 4n, 1n);
  return (
    <main className="wrap">
      <p className="kicker">Educational reference</p>
      <h1>Fees minus a price move</h1>
      <p className="lede">
        Capital 10 WAX, fees you already counted at 300 bps, price now 4 times entry. The loss is full-range IL, not a concentrated position and not a prediction.
      </p>
      {net.ok ? (
        <p>
          Fee {formatWax(net.feeUnits)}. IL {formatWax(net.ilUnits)} ({net.ilBps.toString()} bps). Net {formatWax(net.netUnits)}.
        </p>
      ) : (
        <p>{net.reason}</p>
      )}
    </main>
  );
}
