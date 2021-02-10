import { createContext, useReducer, Dispatch, ReactNode } from "react";
import { appointmentReducer } from "./appointmentReducer";

/** initial state */
export type AppointmentContextType = {
  entries: any[];
};

const initialState: AppointmentContextType = {
  entries: []
};

/** create context */
export const AppointmentContext = createContext<{
  apptState: AppointmentContextType;
  dispatchAppt: Dispatch<any>;
}>({
  apptState: initialState,
  dispatchAppt: () => null
});

/** props interface */
interface IProps {
  children: ReactNode;
}

/** context provider */
export const AppointmentProvider = ({ children }: IProps) => {
  const [apptState, dispatchAppt] = useReducer(
    appointmentReducer,
    initialState
  );
  return (
    <AppointmentContext.Provider value={{ apptState, dispatchAppt }}>
      {children}
    </AppointmentContext.Provider>
  );
};
