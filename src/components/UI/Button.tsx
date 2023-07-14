import { ButtonProps } from "../../types/ButtonProps";
import "./Button.scss";

export const Button: React.FC<ButtonProps> = ({ text }) => {
  return <button className='button'>{text}</button>;
};
