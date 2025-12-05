export const UNITS = [
  { key: "F", label: "Fahrenheit (°F)" },
  { key: "C", label: "Celsius (°C)" },
  { key: "K", label: "Kelvin (K)" },
  { key: "R", label: "Rankine (°R)" }, // opcional
];

export function toCelsius(value, from) {
  const v = Number(value);
  switch (from) {
    case "C": return v;
    case "F": return (v - 32) * 5/9;
    case "K": return v - 273.15;
    case "R": return (v - 491.67) * 5/9;
    default: return NaN;
  }
}

export function fromCelsius(celsiusValue, to) {
  const c = Number(celsiusValue);
  switch (to) {
    case "C": return c;
    case "F": return (c * 9/5) + 32;
    case "K": return c + 273.15;
    case "R": return (c + 273.15) * 9/5;
    default: return NaN;
  }
}

export function convert(value, from, to) {
  if (from === to) return Number(value);
  const c = toCelsius(value, from);
  return fromCelsius(c, to);
}

export function format(value, unit) {
  if (Number.isNaN(value)) return "—";
  const digits = unit === "K" || unit === "R" ? 2 : 1;
  return `${value.toFixed(digits)}`;
}
