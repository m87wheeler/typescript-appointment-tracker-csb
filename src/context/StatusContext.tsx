import { createContext, useReducer, Dispatch, ReactNode } from "react";

/** initial state */
type StatusContextType = {
  success: (boolean | string)[];
};

const initialState: StatusContextType = {
  success: [false, ""]
};

/** create context */
export const StatusContext = createContext<{
  status: StatusContextType;
  dispatchStatus: Dispatch<any>;
}>({
  status: initialState,
  dispatchStatus: () => null
});

/** reducer action type */
type ACTIONTYPE =
  | { type: "SET_SUCCESS"; payload: boolean; message: "string" }
  | { type: "RESET_STATE" };

/** reducer */
const statusReducer = (prevState: StatusContextType, action: ACTIONTYPE) => {
  switch (action.type) {
    case "SET_SUCCESS":
      return {
        ...prevState,
        success: [action.payload, action.message]
      };
    default:
      return prevState;
  }
};

/** props interface */
interface IProps {
  children: ReactNode;
}

/** context provider */
export const StatusProvider = ({ children }: IProps) => {
  const [status, dispatchStatus] = useReducer(statusReducer, initialState);
  return (
    <StatusContext.Provider value={{ status, dispatchStatus }}>
      {children}
    </StatusContext.Provider>
  );
};
