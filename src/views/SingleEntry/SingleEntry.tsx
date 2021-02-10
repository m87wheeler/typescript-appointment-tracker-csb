import { useHistory } from "react-router-dom";
import {
  Wrapper,
  TypeContainer,
  StyledTypography,
  DetailsContainer,
  TotalContainer,
  StyledRow
} from "./SingleEntry.style";
import { formatCurrency, sumEntry } from "../../assets/functions/functions";
import { EntryType } from "../../assets/commonTypes/EntryType";
import Typography from "../../components/SharedUI/Typography/Typography";
import Table from "../../components/SharedUI/Table/Table/Table";
import TableHead from "../../components/SharedUI/Table/TableHead/TableHead";
import TableBody from "../../components/SharedUI/Table/TableBody/TableBody";
import TableRow from "../../components/SharedUI/Table/TableRow/TableRow";
import TableCell from "../../components/SharedUI/Table/TableCell/TableCell";
import IconButton from "../../components/SharedUI/IconButton/IconButton";

interface Props {
  style?: object;
  className?: string;
  entry: EntryType;
}

const SingleEntry = ({ style, className, entry }: Props) => {
  const history = useHistory();
  return (
    <Wrapper style={style} className={className}>
      <TypeContainer type={entry.entryType}>
        <StyledTypography transform="capitalize" weight="500" size="lg">
          {entry.entryType}
        </StyledTypography>
        <StyledTypography
          transform="capitalize"
          weight="500"
          size="lg"
          style={{ justifySelf: "flex-end" }}
        >
          SA-{entry.sa}
        </StyledTypography>
      </TypeContainer>

      <DetailsContainer>
        <TotalContainer>
          <Typography size="sm" align="center" transform="capitalize">
            Total {entry.entryType} Value
          </Typography>
          <Typography size="xl" weight="500" align="center">
            {formatCurrency(sumEntry(entry))}
          </Typography>
        </TotalContainer>
        {/** kitchen details */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell type="th" colSpan={2}>
                <Typography>Kitchen Details</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledRow>
              <TableCell>
                <Typography size="sm">Kitchen Value</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {entry.kitchenValue
                    ? formatCurrency(entry.kitchenValue)
                    : "-"}
                </Typography>
              </TableCell>
            </StyledRow>
            <StyledRow>
              <TableCell>
                <Typography size="sm">Kitchen Type</Typography>
              </TableCell>
              <TableCell>
                <Typography transform="capitalize">
                  {entry.kitchenValue ? entry.kitchenType : "-"}
                </Typography>
              </TableCell>
            </StyledRow>
            <StyledRow>
              <TableCell>
                <Typography size="sm">Kitchen iSell</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {entry.kitchenIsell ? entry.kitchenIsell : "-"}
                </Typography>
              </TableCell>
            </StyledRow>
          </TableBody>
        </Table>
        {/** worktop details */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell type="th" colSpan={2}>
                <Typography>Worktop Details</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledRow>
              <TableCell>
                <Typography size="sm">Worktop Value</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {entry.worktopValue
                    ? formatCurrency(entry.worktopValue)
                    : "-"}
                </Typography>
              </TableCell>
            </StyledRow>
            <StyledRow>
              <TableCell>
                <Typography size="sm">Worktop Type</Typography>
              </TableCell>
              <TableCell>
                <Typography transform="capitalize">
                  {entry.worktopValue ? entry.worktopType : "-"}
                </Typography>
              </TableCell>
            </StyledRow>
            <StyledRow>
              <TableCell>
                <Typography size="sm">Worktop iSell</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {entry.worktopIsell ? entry.worktopIsell : "-"}
                </Typography>
              </TableCell>
            </StyledRow>
            <StyledRow>
              <TableCell>
                <Typography size="sm">Custom</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {entry.worktopValue
                    ? entry.customWorktop
                      ? "Yes"
                      : "No"
                    : "-"}
                </Typography>
              </TableCell>
            </StyledRow>
          </TableBody>
        </Table>
        {/** appliance details */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell type="th" colSpan={2}>
                <Typography>Appliance Details</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledRow>
              <TableCell>
                <Typography size="sm">Appliance Value</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {entry.applianceValue
                    ? formatCurrency(entry.applianceValue)
                    : "-"}
                </Typography>
              </TableCell>
            </StyledRow>
            <StyledRow>
              <TableCell>
                <Typography size="sm">Appliance Qty</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {entry.applianceQty ? entry.applianceQty : "-"}
                </Typography>
              </TableCell>
            </StyledRow>
            <StyledRow>
              <TableCell>
                <Typography size="sm">Appliance Types</Typography>
              </TableCell>
              <TableCell>
                <Typography transform="capitalize">
                  {entry.applianceTypes.length
                    ? entry.applianceTypes.map((type, i) => (
                        <Typography
                          element="span"
                          transform="capitalize"
                          key={type}
                        >
                          {type}
                          {i + 1 < entry.applianceTypes.length ? ", " : ""}
                        </Typography>
                      ))
                    : "-"}
                </Typography>
              </TableCell>
            </StyledRow>
            <StyledRow>
              <TableCell>
                <Typography size="sm">Appliance ATV</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {entry.applianceValue
                    ? formatCurrency(entry.applianceValue / entry.applianceQty)
                    : "-"}
                </Typography>
              </TableCell>
            </StyledRow>
          </TableBody>
        </Table>
        {/** additional details */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell type="th" colSpan={2}>
                <Typography>Additonal Details</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledRow>
              <TableCell>
                <Typography size="sm">Lighting Value</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {entry.lightingValue
                    ? formatCurrency(entry.lightingValue)
                    : "-"}
                </Typography>
              </TableCell>
            </StyledRow>
            <StyledRow>
              <TableCell>
                <Typography size="sm">Other Value</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {entry.otherValue ? formatCurrency(entry.otherValue) : "-"}
                </Typography>
              </TableCell>
            </StyledRow>
          </TableBody>
        </Table>
        {/** ipq details */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell type="th" colSpan={2}>
                <Typography>Installation Details</Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <StyledRow>
              <TableCell>
                <Typography size="sm">Installation Value</Typography>
              </TableCell>
              <TableCell>
                <Typography>
                  {entry.ipqValue ? formatCurrency(entry.ipqValue) : "-"}
                </Typography>
              </TableCell>
            </StyledRow>
            <StyledRow>
              <TableCell>
                <Typography size="sm">Installation iSell</Typography>
              </TableCell>
              <TableCell>
                <Typography>{entry.ipqIsell ? entry.ipqIsell : "-"}</Typography>
              </TableCell>
            </StyledRow>
          </TableBody>
        </Table>
        <IconButton
          icon="edit"
          text="Edit Entry"
          color="confirm"
          onClick={() => console.log("edit")}
          style={{
            marginTop: ".5rem",
            alignSelf: "center"
          }}
        />
        <IconButton
          variant="text"
          text="Go Back"
          onClick={() => history.goBack()}
          style={{ alignSelf: "center" }}
        />
      </DetailsContainer>
    </Wrapper>
  );
};

export default SingleEntry;
