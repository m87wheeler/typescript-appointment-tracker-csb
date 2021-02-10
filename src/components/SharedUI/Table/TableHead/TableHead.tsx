import { ReactNode } from "react";
import { Element } from "./TableHead.style";

interface Props {
  style?: object;
  className?: string;
  children: ReactNode | ReactNode[];
}

const TableHead = ({ style, className, children }: Props) => {
  return (
    <Element style={style} className={className}>
      {children}
    </Element>
  );
};

export default TableHead;
