import { ReactNode } from "react";
import { Element } from "./Table.style";

interface Props {
  style?: object;
  className?: string;
  children: ReactNode | ReactNode[];
}

const Table = ({ style, className, children }: Props) => {
  return (
    <Element style={style} className={className}>
      {children}
    </Element>
  );
};

export default Table;
