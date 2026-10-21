import { CHAIN_ORIGIN, currencyBalance } from "./api";
import { formatWax, netOfFees } from "./roi";
import type { ChainAction, HttpRequest } from "./api";

export type UseCase = {
  title: string;
  detail: string;
  request: HttpRequest;
  transaction: { note: string; actions: ChainAction[] } | null;
};

const net = netOfFees("10.00000000 WAX", 300n, 4n, 1n);
if (!net.ok) throw new Error(net.reason);
const priced = net;

export const USE_CASES: UseCase[] = [
  {
    title: "The market list is not historical volume",
    detail: "GET /api/markets does not return the fee this function subtracts. Fees are an argument. The request is not sent.",
    request: { method: "GET", url: "https://wax.alcor.exchange/api/markets", executed: false },
    transaction: null,
  },
  {
    title: "No deposit is built from a negative net",
    detail: `Sample net is ${formatWax(priced.netUnits)} after ${formatWax(priced.feeUnits)} of fees and ${formatWax(priced.ilUnits)} of full-range IL. A WAX balance is not that net. No deposit is built.`,
    request: currencyBalance(CHAIN_ORIGIN, "alice"),
    transaction: null,
  },
];

export function assertUseCases(): void {
  if (priced.ilBps !== -2000n) throw new Error(String(priced.ilBps));
  if (priced.netUnits >= 0n) throw new Error("expected a loss");
}
