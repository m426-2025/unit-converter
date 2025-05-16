import { convertToMeters, Unit } from "./conversion";

describe("imperial units", () => {
  test.each([
    [1, "league", 4828.032],
    [1, "mile", 1609.344],
    [1, "furlong", 201.168],
    [1, "yard", 0.9144],
    [1, "foot", 0.3048],
    [1, "inch", 0.0254],
  ])("%s %s in meters", (value: number, unit: Unit, expected) => {
    expect(convertToMeters(value, unit)).toBeCloseTo(expected);
  });

  test.each([
    [2, "league", 2 * 4828.032],
    [0.5, "mile", 0.5 * 1609.344],
    [4.75, "furlong", 4.75 * 201.168],
    [10, "yard", 10 * 0.9144],
    [3, "foot", 3 * 0.3048],
    [100, "inch", 100 * 0.0254],
  ])("%s %s in meters", (value: number, unit: Unit, expected) => {
    expect(convertToMeters(value, unit)).toBeCloseTo(expected);
  });
});

describe("metric units", () => {
  test.each([
    [1, "meter", 1],
    [1, "centimeter", 0.01],
  ])("%s %s in meters", (value: number, unit: Unit, expected) => {
    expect(convertToMeters(value, unit)).toBeCloseTo(expected);
  });

  test.each([
    [2, "meter", 2],
    [50, "centimeter", 0.5],
  ])("%s %s in meters", (value: number, unit: Unit, expected) => {
    expect(convertToMeters(value, unit)).toBeCloseTo(expected);
  });
});

test("unknown unit throws error", () => {
  expect(() => convertToMeters(1, "unknown" as Unit)).toThrow(
    "unknown unit: unknown",
  );
});
