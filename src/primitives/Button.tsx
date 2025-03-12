import { MouseEvent, PropsWithChildren } from "react";
import styles from "./Button.module.css";

export type Props = PropsWithChildren<{
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
}>;

const Button = ({ children, onClick }: Props) => (
  <button className={styles.Button} onClick={onClick}>
    {children}
  </button>
);

export default Button;
