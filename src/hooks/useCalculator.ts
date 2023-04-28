import { InputProps } from 'components/input';
import { tips } from 'constants';
import { Result } from 'declarations';
import { useEffect, useState } from 'react';

const initialResult = {
  tipAmount: 0,
  totalAmount: 0,
};

export function useCalculator() {
  const [bill, setBill] = useState(0);
  const [selectedTip, setSelectedTip] = useState(0);
  const [peopleNumber, setPeopleNumber] = useState(0);
  const [isCustomTip, setIsCustomTip] = useState(false);
  const [result, setResult] = useState<Result>(initialResult);
  const canCalculateResult = bill > 0 && selectedTip > 0 && peopleNumber > 0;
  const canReset = result.tipAmount > 0 && result.totalAmount > 0;

  const handleBillChange: InputProps['onChange'] = (newBill) => {
    setBill(newBill);
  };

  const handleSelectedTipChange = (newTip: number) => {
    setSelectedTip(newTip);
    setIsCustomTip(!tips.some((tip) => tip === newTip));
  };

  const handleCustomTipChange = () => {
    setIsCustomTip(true);
  };

  const handlePeopleNumberChange: InputProps['onChange'] = (newNumber) => {
    setPeopleNumber(newNumber);
  };

  const calculateResult = () => {
    const newTipAmount = ((bill / 100) * selectedTip) / peopleNumber;
    const newTotalAmount = newTipAmount + bill / peopleNumber;
    setResult({ tipAmount: newTipAmount, totalAmount: newTotalAmount });
  };

  const handleResultReset = () => {
    setBill(0);
    setSelectedTip(0);
    setIsCustomTip(false);
    setPeopleNumber(0);
    setResult(initialResult);
  };

  useEffect(() => {
    if (canCalculateResult) {
      calculateResult();
    }
  }, [bill, selectedTip, peopleNumber]);

  return {
    bill,
    result,
    canReset,
    selectedTip,
    isCustomTip,
    peopleNumber,
    handleBillChange,
    handleResultReset,
    handleCustomTipChange,
    handleSelectedTipChange,
    handlePeopleNumberChange,
  };
}
