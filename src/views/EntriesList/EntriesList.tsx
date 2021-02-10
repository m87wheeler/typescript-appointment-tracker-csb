import { Wrapper } from "./EntriesList.style";
import { useContext, useEffect, useState } from "react";
import { AppointmentContext } from "../../context/AppointmentContext/AppointmentContext";
import EntryCard from "../../components/Entries/EntryCard/EntryCard";

/** temporary data source for fetch */
import { FAKE_DATA } from "../../assets/data/FAKE_DATA";

interface Props {
  style?: object;
  className?: string;
}

const EntriesList = ({ style, className }: Props) => {
  const { apptState, dispatchAppt } = useContext(AppointmentContext);
  const [isLoading, setIsLoading] = useState(true);

  /** fetch entries from database */
  useEffect(() => {
    const fetch = setTimeout(() => {
      dispatchAppt({ type: "POPULATE_ENTRIES", payload: FAKE_DATA.data });
      setIsLoading(false);
    }, 700);

    return () => clearTimeout(fetch);
  }, [dispatchAppt]);

  return (
    <Wrapper style={style} className={className}>
      {isLoading ? (
        <p>Loading...</p>
      ) : apptState.entries.length ? (
        apptState.entries.map((entry) => (
          <EntryCard key={entry._id} entry={entry} />
        ))
      ) : (
        <p>No Entries Found</p>
      )}
    </Wrapper>
  );
};

export default EntriesList;
