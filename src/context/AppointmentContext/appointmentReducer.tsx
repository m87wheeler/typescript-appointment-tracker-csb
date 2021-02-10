import { AppointmentContextType } from "./AppointmentContext";
import { EntryType } from "../../assets/commonTypes/EntryType";

/** holder variables */
let copyState: EntryType[] | [] = [];
let filtered: EntryType[] | [] = [];

/** reducer action type */
type ACTIONTYPE =
  | { type: "POPULATE_ENTRIES"; payload: any[] }
  | { type: "DELETE_ENTRY"; payload: string }
  | { type: "RESET_STATE" };

/** reducer */
export const appointmentReducer = (
  prevState: AppointmentContextType,
  action: ACTIONTYPE
) => {
  switch (action.type) {
    case "POPULATE_ENTRIES":
      return {
        ...prevState,
        entries: action.payload
      };
    case "DELETE_ENTRY":
      copyState = prevState.entries;
      filtered = copyState.filter((entry) => entry._id !== action.payload);
      return {
        ...prevState,
        entries: filtered
      };
    default:
      return prevState;
  }
};
