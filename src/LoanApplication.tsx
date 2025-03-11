import { useCallback, useState } from "react";
import calculateFixedMortgageCost from "./utils/calculateFixedMortgageCost";
import FormGrid from "./FormGrid";
import Slider from "./primitives/Slider";
import styles from "./LoanApplication.module.css";
import formatNumber from "./utils/formatNumber";
import Button from "./primitives/Button";

export type Props = {
  yearlyRate: number;
  onSubmit: (amount: number, months: number) => void;
};

function LoanApplication({ yearlyRate, onSubmit }: Props) {
  const [amount, setAmount] = useState(100000);
  const [paybackTime, setPaybackTime] = useState(5);

  const montlyCost = calculateFixedMortgageCost(
    amount,
    paybackTime,
    yearlyRate / 100,
  );

  const handleSubmit = useCallback(() => {
    onSubmit(amount, paybackTime * 12);
  }, [amount, onSubmit, paybackTime]);

  return (
    <>
      <div className={styles.Header}>
        <h1 className={styles.Title}>Lånekalkyl</h1>
        <p className={styles.MonthlyCostBox}>
          <span>Exempel på månadskostnad</span>
          <span className={styles.MonthlyCostText}>
            {formatNumber({ value: montlyCost, unit: "kr / mån" })}
          </span>
        </p>
      </div>
      <FormGrid
        fields={[
          {
            label: "Lånebelopp",
            inputRenderer: (id) => (
              <Slider
                id={id}
                value={amount}
                label="Lånebelopp"
                unit="kr"
                min={20000}
                max={200000}
                step={10000}
                onChange={setAmount}
              />
            ),
            value: amount,
            unit: "kr",
          },
          {
            label: "Lånetid",
            inputRenderer: (id) => (
              <Slider
                id={id}
                value={paybackTime}
                label="Lånetid"
                unit="år"
                min={2}
                max={10}
                step={1}
                onChange={setPaybackTime}
              />
            ),
            value: paybackTime,
            unit: "år",
          },
        ]}
      />
      <div className={styles.Footer}>
        <Button onClick={handleSubmit}>Till ansökan</Button>
      </div>
    </>
  );
}

export default LoanApplication;
