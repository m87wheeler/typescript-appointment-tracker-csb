import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppointmentContext } from "../../context/AppointmentContext/AppointmentContext";
import { Wrapper } from "./EntryPage.style";
import { EntryType } from "../../assets/commonTypes/EntryType";
import SingleEntry from "../../views/SingleEntry/SingleEntry";

interface Props {
  style?: object;
  className?: string;
}

const EntryPage = ({ style, className }: Props) => {
  const { sa } = useParams<{ sa?: string }>();
  // eslint-disable-next-line
  const { apptState, dispatchAppt } = useContext(AppointmentContext);
  const [currentEntry, setCurrentEntry] = useState<EntryType[] | []>([]);

  /** load sa on mount */
  useEffect(() => {
    const entry = apptState.entries.filter(
      (entry) => entry.sa === parseInt(sa!, 10)
    );
    setCurrentEntry(entry);
  }, [apptState.entries, sa]);

  return (
    <Wrapper style={style} className={className}>
      {currentEntry.length <= 0 ? (
        <p>No Entry Found</p>
      ) : currentEntry.length > 1 ? (
        <p>Multiple Entries Found</p>
      ) : (
        <SingleEntry entry={currentEntry[0]} />
      )}
    </Wrapper>
  );
};

export default EntryPage;
