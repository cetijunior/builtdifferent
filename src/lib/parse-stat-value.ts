export type ParsedStat = {
  prefix: string;
  target: number;
  suffix: string;
  decimals: number;
  useGrouping: boolean;
};

export function parseStatValue(raw: string): ParsedStat {
  const match = raw.trim().match(/^([$€]?)([\d,]+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return {
      prefix: "",
      target: 0,
      suffix: raw,
      decimals: 0,
      useGrouping: false,
    };
  }

  const numStr = match[2].replace(/,/g, "");
  const target = Number.parseFloat(numStr);

  return {
    prefix: match[1] ?? "",
    target: Number.isFinite(target) ? target : 0,
    suffix: match[3] ?? "",
    decimals: numStr.includes(".") ? (numStr.split(".")[1]?.length ?? 0) : 0,
    useGrouping: raw.includes(",") || target >= 1000,
  };
}

export function formatStatValue(n: number, parsed: ParsedStat): string {
  const whole = parsed.decimals > 0 ? n.toFixed(parsed.decimals) : String(Math.round(n));
  const body = parsed.useGrouping
    ? Math.round(n).toLocaleString("en-US")
    : whole;

  return `${parsed.prefix}${body}${parsed.suffix}`;
}
