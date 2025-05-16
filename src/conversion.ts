export type Conversion = [number, Unit];

export const conversionTable: {[unit: string]: Conversion} = {
  league: [3, "mile"],
  mile: [1760, "yard"],
  // TODO: introduce "furlong" (as 22 yards; equal to 201.168 meters)
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
