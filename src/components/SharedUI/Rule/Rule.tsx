import { Element } from "./Rule.style";

interface Props {
  style?: object;
  className?: string;
}

const Rule = ({ style, className }: Props) => {
  return <Element style={style} className={className} />;
};

export default Rule;
