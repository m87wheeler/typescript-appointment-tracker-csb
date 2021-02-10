import { ReactNode } from "react";
import { Element } from "./TableRow.style";

interface Props {
  style?: object;
  className?: string;
  children: ReactNode | ReactNode[];
}

const TableRow = ({ style, className, children }: Props) => {
  return (
    <Element style={style} className={className}>
      {children}
    </Element>
  );
};

export default TableRow;
