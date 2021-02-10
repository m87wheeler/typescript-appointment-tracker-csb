import {
  faTrash,
  faTimes,
  faArrowLeft,
  faPencilAlt,
  faEye
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  TextVariant,
  OutlinedVariant,
  ContainedVariant,
  StyledTypography
} from "./IconButton.style";

interface Props {
  style?: object;
  className?: string;
  icon?: undefined | "trash" | "cross" | "back" | "edit" | "view";
  text?: undefined | string;
  variant?: "contained" | "outlined" | "text";
  size?: "sm" | "md" | "lg";
  color?:
    | "default"
    | "inherit"
    | "primary"
    | "secondary"
    | "danger"
    | "warning"
    | "confirm";
  disabled?: boolean;
  flat?: boolean;
  onClick: () => any;
}

const IconButton = ({
  style,
  className,
  icon,
  text,
  color = "default",
  size = "md",
  variant = "contained",
  disabled = false,
  flat = false,
  onClick
}: Props) => {
  const iconType = () => {
    switch (icon) {
      case "trash":
        return faTrash;
      case "cross":
        return faTimes;
      case "back":
        return faArrowLeft;
      case "edit":
        return faPencilAlt;
      case "view":
        return faEye;
      default:
        throw new Error();
    }
  };

  switch (variant) {
    case "text":
      return (
        <TextVariant
          style={style}
          className={className}
          icon={icon}
          text={text}
          color={color}
          size={size}
          disabled={disabled}
          flat={flat}
          onClick={onClick}
        >
          {icon && <FontAwesomeIcon icon={iconType()} />}
          <StyledTypography element="span">{text}</StyledTypography>
        </TextVariant>
      );
    case "outlined":
      return (
        <OutlinedVariant
          style={style}
          className={className}
          icon={icon}
          text={text}
          color={color}
          size={size}
          disabled={disabled}
          flat={flat}
          onClick={onClick}
        >
          {icon && <FontAwesomeIcon icon={iconType()} />}
          <StyledTypography element="span">{text}</StyledTypography>
        </OutlinedVariant>
      );
    default:
      return (
        <ContainedVariant
          style={style}
          className={className}
          icon={icon}
          text={text}
          color={color}
          size={size}
          disabled={disabled}
          flat={flat}
          onClick={onClick}
        >
          {icon && <FontAwesomeIcon icon={iconType()} />}
          <StyledTypography element="span">{text}</StyledTypography>
        </ContainedVariant>
      );
  }
};

export default IconButton;
