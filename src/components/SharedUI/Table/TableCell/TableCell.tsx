import { ReactNode } from "react";
import { Head, Data } from "./TableCell.style";

interface Props {
  style?: object;
  className?: string;
  children: ReactNode | ReactNode[];
  type?: "th" | "td";
  colSpan?: number;
}

const TableCell = ({
  style,
  className,
  children,
  type = "td",
  colSpan
}: Props) => {
  if (type === "th") {
    return (
      <Head style={style} className={className} colSpan={colSpan}>
        {children}
      </Head>
    );
  } else {
    return (
      <Data style={style} className={className} colSpan={colSpan}>
        {children}
      </Data>
    );
  }
};

export default TableCell;
