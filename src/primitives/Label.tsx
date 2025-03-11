import * as RxLabel from "@radix-ui/react-label";
import styles from "./Label.module.css";
import { PropsWithChildren } from "react";

export type Props = PropsWithChildren<{
  forId: string;
}>;

const Label = ({ forId, children }: Props) => (
  <RxLabel.Root className={styles.Root} htmlFor={forId}>
    {children}
  </RxLabel.Root>
);

export default Label;
