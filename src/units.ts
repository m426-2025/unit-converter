export const conversionTable = {
  league: [3, "miles"],
  mile: [1760, "yard"],
  yard: [3, "foot"],
  foot: [12, "inch"],
  inch: [2.54, "centimeter"],
  centimeter: [0.01, "meter"],
  meter: [1, "meter"],
};

export function convertToMeters(value: number, unit: string): number {
  let miles: number,
    yards: number,
    feet: number,
    inches: number,
    centimeters: number,
    meters: number;
  switch (unit) {
    case "league":
      miles = (conversionTable.league[0] as number) * value;
      yards = (conversionTable.mile[0] as number) * miles;
      feet = (conversionTable.yard[0] as number) * yards;
      inches = (conversionTable.foot[0] as number) * feet;
      centimeters = inches * (conversionTable.inch[0] as number);
      meters = centimeters * (conversionTable.centimeter[0] as number);
      break;
    case "mile":
      yards = (conversionTable.mile[0] as number) * value;
      feet = (conversionTable.yard[0] as number) * yards;
      inches = (conversionTable.foot[0] as number) * feet;
      centimeters = inches * (conversionTable.inch[0] as number);
      meters = centimeters * (conversionTable.centimeter[0] as number);
      break;
    case "yard":
      feet = (conversionTable.yard[0] as number) * value;
      inches = (conversionTable.foot[0] as number) * feet;
      centimeters = inches * (conversionTable.inch[0] as number);
      meters = centimeters * (conversionTable.centimeter[0] as number);
      break;
    case "foot":
      inches = (conversionTable.foot[0] as number) * value;
      centimeters = inches * (conversionTable.inch[0] as number);
      meters = centimeters * (conversionTable.centimeter[0] as number);
      break;
    case "inch":
      centimeters = (conversionTable.inch[0] as number) * value;
      meters = centimeters * (conversionTable.centimeter[0] as number);
      break;
    case "centimeter":
      meters = (conversionTable.centimeter[0] as number) * value;
      break;
    case "meter":
      meters = value;
      break;
    default:
      throw new Error(`unknown unit: ${unit}`);
  }
  return meters;
}
