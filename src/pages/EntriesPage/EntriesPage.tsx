import EntriesList from "../../views/EntriesList/EntriesList";
import { Wrapper } from "./EntriesPage.style";

interface IProps {
  style?: object;
  className?: string;
}

const EntriesPage = ({ style, className }: IProps) => {
  return (
    <Wrapper style={style} className={className}>
      <h2>Entries</h2>
      <EntriesList />
    </Wrapper>
  );
};

export default EntriesPage;
