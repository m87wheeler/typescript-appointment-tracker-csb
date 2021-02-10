import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  MainWrapper,
  ExtendWrapper,
  StyledTypography
} from "./EntryCard.style";
import { EntryType } from "../../../assets/commonTypes/EntryType";
import {
  formatCurrency,
  sumEntry,
  dayDifference
} from "../../../assets/functions/functions";
import { AppointmentContext } from "../../../context/AppointmentContext/AppointmentContext";

import Card from "../../SharedUI/Card/Card";
import Rule from "../../SharedUI/Rule/Rule";
import IconButton from "../../SharedUI/IconButton/IconButton";

interface Props {
  style?: object;
  className?: string;
  entry: EntryType;
}

const EntryCard = ({ style, className, entry }: Props) => {
  const { dispatchAppt } = useContext(AppointmentContext);
  const [active, setActive] = useState(false);
  const history = useHistory();

  // ? handle setActive
  const toggleActive = () => setActive(!active);
  // ? handle delete entry
  const handleDelete = (id: string): void =>
    dispatchAppt({ type: "DELETE_ENTRY", payload: id });

  return (
    <Card hover>
      <MainWrapper
        type={entry.entryType}
        onClick={toggleActive}
        style={style}
        className={className}
      >
        {/** top row */}
        <StyledTypography
          size="sm"
          transform="capitalize"
          type={entry.entryType}
          weight="500"
        >
          {entry.entryType && entry.entryType.split("_").join(" ")}
        </StyledTypography>
        <StyledTypography
          size="xs"
          style={{ justifySelf: "center", alignSelf: "flex-end" }}
        >
          {new Date(entry.createdAt).toLocaleDateString()}
        </StyledTypography>
        <StyledTypography
          size="sm"
          weight="700"
          variant="monospace"
          style={{ justifySelf: "flex-end" }}
        >
          SA-{entry.sa}
        </StyledTypography>
        {/** middle row */}
        <Rule style={{ gridColumn: "1 / 4" }} />
        {/** bottom row */}
        <StyledTypography style={{ gridColumn: "1 / 3" }}>
          {entry.entryType === "no_show" ? "" : formatCurrency(sumEntry(entry))}
        </StyledTypography>
        <StyledTypography
          type={entry.entryType}
          style={{ justifySelf: "flex-end" }}
        >
          {entry.createdBy}
        </StyledTypography>
        {/** extendable */}
        <ExtendWrapper active={active} type={entry.entryType}>
          <StyledTypography>
            Follow-up in {dayDifference(entry.followUp)} days
          </StyledTypography>
          {entry.entryType === "no_show" ? (
            <div />
          ) : (
            <IconButton
              icon="view"
              onClick={() => history.push(`/${entry.sa}`)}
              color="secondary"
              variant="outlined"
            />
          )}
          <IconButton
            icon="trash"
            onClick={() => handleDelete(entry._id)}
            color="danger"
            variant="outlined"
          />
        </ExtendWrapper>
      </MainWrapper>
    </Card>
  );
};

export default EntryCard;
