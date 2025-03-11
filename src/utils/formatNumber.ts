export default function formatNumber({
  value,
  unit,
  locale = "sv-SE",
}: {
  value: number;
  unit?: string;
  locale?: Intl.LocalesArgument;
}) {
  const format = Intl.NumberFormat(locale, {
    maximumFractionDigits: 0,
  });

  const formattedValue = format.format(value);
  return unit ? `${formattedValue} ${unit}` : formattedValue;
}
