import * as RxSlider from "@radix-ui/react-slider";
import styles from "./Slider.module.css";
import formatNumber from "../utils/formatNumber";
import { ForwardedRef, forwardRef } from "react";

const ValueWithUnit = forwardRef(
  (
    { value, unit }: { value: number; unit?: string },
    ref: ForwardedRef<HTMLSpanElement>,
  ) => (
    <span className={styles.ValueWithUnit} ref={ref}>
      {formatNumber({ value, unit })}
    </span>
  ),
);

export type Props = {
  id: string;
  value: number;
  label: string;
  unit?: string;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
};

const Slider = ({ value, label, unit, min, max, step, onChange }: Props) => {
  const thumbTextDirection = value < min + (max - min) / 2 ? "right" : "left";

  return (
    <RxSlider.Root
      className={styles.Root}
      value={[value]}
      onValueChange={([value]) => {
        onChange(value);
      }}
      min={min}
      max={max}
      step={step}
    >
      <RxSlider.Track className={styles.Track}>
        <RxSlider.Range className={styles.Range} />
        <ValueWithUnit value={max} unit={unit} />
      </RxSlider.Track>
      <RxSlider.Thumb
        className={`${styles.Thumb} ${styles[`textDirection-${thumbTextDirection}`]}`}
        aria-label={label}
      >
        <ValueWithUnit value={value} unit={unit} />
      </RxSlider.Thumb>
    </RxSlider.Root>
  );
};

export default Slider;
