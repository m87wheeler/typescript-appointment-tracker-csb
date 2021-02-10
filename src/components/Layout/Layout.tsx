import { ReactNode } from "react";
import { Wrapper } from "./Layout.style";

interface Props {
  style?: object;
  className?: string;
  children: ReactNode;
}

const Layout = ({ style, className, children }: Props) => {
  return (
    <Wrapper style={style} className={className}>
      <header>
        <h1>Header</h1>
      </header>
      {children}
      <footer>&copy; 2021</footer>
    </Wrapper>
  );
};

export default Layout;
