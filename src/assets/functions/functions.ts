import { EntryType } from "../../components/Entries/EntryType";

// ? format number to currency
// TODO IE10 fallback
export const formatCurrency = (num: number): string => {
  return new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP"
  }).format(num);
};

// ? sum of all cost in entry
export const sumEntry = (entry: EntryType): number => {
  const {
    kitchenValue,
    worktopValue,
    applianceValue,
    lightingValue,
    otherValue,
    ipqValue
  } = entry;
  return (
    kitchenValue +
    worktopValue +
    applianceValue +
    lightingValue +
    otherValue +
    ipqValue
  );
};

// ? get difference between two dates in days
// ! doesn't take into account leap days etc.
export const dayDifference = (
  endDate: Date,
  startDate: Date = new Date()
): number => {
  const date1 = new Date(startDate).getTime();
  const date2 = new Date(endDate).getTime();
  const diff = date2 - date1;
  const days = diff / (1000 * 60 * 60 * 24);
  return Math.floor(days);
};
