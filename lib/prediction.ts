// The honest prediction engine, ported verbatim from the design prototype's
// `predict` / `dayState` methods. The marketing calendar must be truthful, so
// the math is identical, not approximated.

import { STARTS, DURATION, TODAY_ISO } from "./constants";

const MS = 86400000;

export function d(s: string): Date {
  const p = s.split("-").map(Number);
  return new Date(p[0], p[1] - 1, p[2]);
}

export function diff(a: Date, b: Date): number {
  return Math.round((b.getTime() - a.getTime()) / MS);
}

export function addDays(dt: Date, n: number): Date {
  return new Date(dt.getFullYear(), dt.getMonth(), dt.getDate() + n);
}

export const TODAY = d(TODAY_ISO);

export interface Prediction {
  last: Date;
  next: Date;
  typical: number;
}

/**
 * Next-period prediction: a recency-weighted mean of consecutive cycle lengths
 * (w = 2^(-k/6), k = cycles back from the most recent). "Typical" cycle is the
 * plain unweighted mean.
 */
export function predict(): Prediction {
  const starts = STARTS.map(d);
  const lens: number[] = [];
  for (let i = 1; i < starts.length; i++) lens.push(diff(starts[i - 1], starts[i]));
  const n = lens.length;
  let sw = 0;
  let swl = 0;
  for (let i = 0; i < n; i++) {
    const k = n - 1 - i;
    const w = Math.pow(2, -k / 6);
    sw += w;
    swl += w * lens[i];
  }
  const wmean = sw ? swl / sw : 28;
  const last = starts[starts.length - 1];
  const next = addDays(last, Math.round(wmean));
  const unweighted = n ? lens.reduce((a, b) => a + b, 0) / n : 28;
  return { last, next, typical: Math.round(unweighted) };
}

export interface DayState {
  logged: boolean;
  step: 0 | 1 | 2 | 3;
  today: boolean;
  dStart: number;
}

/**
 * Per-day rendering state:
 *  - logged: a day inside a recorded period (solid olive)
 *  - step:   prediction tint strength around `next` (3 most-likely … 1 possible)
 *  - today:  the apricot ring (only when not a logged day)
 */
export function dayState(dt: Date): DayState {
  const { next } = predict();
  const dur = DURATION;
  let logged = false;
  for (const s of STARTS) {
    const st = d(s);
    if (dt >= st && dt <= addDays(st, dur - 1)) {
      logged = true;
      break;
    }
  }
  let step: 0 | 1 | 2 | 3 = 0;
  let dStart = 99;
  if (!logged) {
    dStart = diff(next, dt);
    if (dStart === 0) step = 3;
    else if (Math.abs(dStart) === 1) step = 2;
    else if (Math.abs(dStart) === 2) step = 1;
    else if (dStart >= 3 && dStart <= dur - 1) step = 2;
  }
  const today = diff(TODAY, dt) === 0;
  return { logged, step, today, dStart };
}

export interface ReportRow {
  len: number;
  date: Date;
}

/** Recent cycle lengths, newest first, for the cycle-report lollipop list. */
export function buildReportRows(): ReportRow[] {
  const starts = STARTS.map(d);
  const rows: ReportRow[] = [];
  for (let i = starts.length - 1; i >= 1; i--) {
    rows.push({ len: diff(starts[i - 1], starts[i]), date: starts[i - 1] });
  }
  return rows;
}
