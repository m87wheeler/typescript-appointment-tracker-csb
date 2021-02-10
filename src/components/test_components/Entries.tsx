import { useContext, ReactNode, useEffect } from "react";
import { AppointmentContext } from "../../context/AppointmentContext";

interface IProps {
  children?: ReactNode;
}

const Entries = ({ children }: IProps) => {
  const { apptState, dispatchAppt } = useContext(AppointmentContext);

  useEffect(() => console.log(apptState), [apptState]);

  const FAKE_ENTRIES = [
    { name: "Martin", age: 33 },
    { name: "Agne", age: 30 },
    { name: "Spencer", age: 9 },
    { name: "Alexander", age: 5 }
  ];

  const handleClick = () =>
    dispatchAppt({ type: "POPULATE_ENTRIES", payload: FAKE_ENTRIES });
  return (
    <>
      <button onClick={handleClick}>Populate!</button>
      {apptState.entries.length ? (
        apptState.entries.map((entry) => (
          <p key={entry.name}>{`${entry.name} is ${entry.age} years old!`}</p>
        ))
      ) : (
        <p>No Entries</p>
      )}
    </>
  );
};

export default Entries;
