export type EntryType = {
  _id: string;
  sa: number;
  entryType: "sale" | "quotation" | "no_show";
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
  kitchenValue: number;
  kitchenIsell: number;
  kitchenType:
    | "l-shape"
    | "u-shape"
    | "galley"
    | "corridor"
    | "island"
    | "other";
  worktopValue: number;
  worktopType:
    | "laminate"
    | "veneer"
    | "wood"
    | "quartz"
    | "acrylic"
    | "ceramic";
  worktopIsell: number;
  customWorktop: boolean;
  applianceQty: number;
  applianceTypes: (
    | "hob"
    | "oven"
    | "extractor"
    | "fridge-freezer"
    | "dishwasher"
    | "washing-machine"
  )[];
  applianceValue: number;
  lightingValue: number;
  otherValue: number;
  ipqValue: number;
  ipqIsell: number;
};
