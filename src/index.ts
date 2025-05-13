import { conversionTable, convertToMeters } from "./units.js";

const units = Object.keys(conversionTable);
for (const unit of units) {
  console.log(`1 ${unit} = ${convertToMeters(1, unit)} meter`);
}
