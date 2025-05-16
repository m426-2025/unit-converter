export type Conversion = [valuesAsNext: number, nextUnit: Unit];

export const conversionTable: {[unit: string]: Conversion} = {
  league: [3, "mile"],
  mile: [1760, "yard"],
  furlong: [220, "yard"],
  yard: [3, "foot"],
  foot: [12, "inch"],
  inch: [2.54, "centimeter"],
  centimeter: [0.01, "meter"],
  meter: [1, "meter"],
};

export type Unit = "league" | "mile" | "yard" | "foot" | "inch" | "centimeter" | "meter";

export function convertToMeters(value: number, unit: Unit): number {
  let nextUnit = unit;
  let newValue = value;

  while (nextUnit !== "meter") {
    const conversion = conversionTable[nextUnit];
    if (!conversion) {
      throw new Error(`unknown unit: ${nextUnit}`);
    }
    newValue *= conversion[0];
    nextUnit = conversion[1];
  }
  return newValue;
}
