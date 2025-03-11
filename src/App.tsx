import { useCallback } from "react";
import LoanApplication from "./LoanApplication";

const yearlyRate = 9.9;

export type Props = {
  yearlyRate: number;
};

function App() {
  const handleSubmitButtonClick = useCallback(
    (amount: number, months: number) => {
      console.log(
        `/loan-application?amount=${amount.toString()}&months=${months.toString()}&yearlyRate=${yearlyRate.toString()}`,
      );
    },
    [],
  );

  return (
    <LoanApplication
      yearlyRate={yearlyRate}
      onSubmit={handleSubmitButtonClick}
    />
  );
}

export default App;
