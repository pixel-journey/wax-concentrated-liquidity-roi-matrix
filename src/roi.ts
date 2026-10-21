/**
 * Fees the caller already counted, minus full-range IL at a price ratio.
 * Not a forecast and not Alcor volume.
 */

const WAX = /^(\d+)\.(\d{8}) WAX$/;

function isqrt(n: bigint): bigint {
  if (n < 2n) return n;
  let x = n;
  let y = (x + 1n) / 2n;
  while (y < x) {
    x = y;
    y = (x + n / x) / 2n;
  }
  return x;
}

function fullRangeIlBps(num: bigint, den: bigint): bigint {
  if (num <= 0n || den <= 0n) throw new Error("ratio must be positive");
  return (2n * isqrt(num * den) * 10_000n) / (num + den) - 10_000n;
}

export function waxUnits(price: string): bigint | null {
  const match = WAX.exec(price);
  if (!match) return null;
  return BigInt(match[1] ?? "0") * 100_000_000n + BigInt(match[2] ?? "0");
}

export function formatWax(units: bigint): string {
  const sign = units < 0n ? "-" : "";
  const abs = units < 0n ? -units : units;
  const whole = abs / 100_000_000n;
  const frac = (abs % 100_000_000n).toString().padStart(8, "0");
  return `${sign}${whole}.${frac} WAX`;
}

export type Net = { ok: false; reason: string } | { ok: true; feeUnits: bigint; ilUnits: bigint; netUnits: bigint; ilBps: bigint };

export function netOfFees(capital: string, feeBps: bigint, priceNum: bigint, priceDen: bigint): Net {
  const units = waxUnits(capital);
  if (units === null || units <= 0n) return { ok: false, reason: "capital must look like 10.00000000 WAX" };
  if (feeBps < 0n || feeBps > 10_000n) return { ok: false, reason: "fee bps must be from 0 to 10000" };
  const ilBps = fullRangeIlBps(priceNum, priceDen);
  const loss = ilBps < 0n ? -ilBps : ilBps;
  const feeUnits = (units * feeBps) / 10_000n;
  const ilUnits = (units * loss) / 10_000n;
  return { ok: true, feeUnits, ilUnits, netUnits: feeUnits - ilUnits, ilBps };
}
