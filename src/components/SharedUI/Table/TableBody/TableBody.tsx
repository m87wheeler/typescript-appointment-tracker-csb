import { ReactNode } from "react";
import { Element } from "./TableBody.style";

interface Props {
  style?: object;
  className?: string;
  children: ReactNode | ReactNode[];
}

const TableBody = ({ style, className, children }: Props) => {
  return (
    <Element style={style} className={className}>
      {children}
    </Element>
  );
};

export default TableBody;
