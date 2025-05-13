import { convertToMeters } from "./conversion";

test("imperial units", () => {
  expect(convertToMeters(1, "mile")).toBeCloseTo(1609.344);
});
