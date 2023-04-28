import { InputProps } from 'components/input';
import { useEffect, useState } from 'react';

export function useCalculator() {
  const [bill, setBill] = useState(0);
  const [selectedTip, setSelectedTip] = useState<number | undefined>(undefined);
  const [isCustomTip, setIsCustomTip] = useState(false);

  const handleBillChange: InputProps['onChange'] = (newBill) => {
    setBill(newBill);
  };

  const handleSelectedTipChange = (newTip: number) => {
    setSelectedTip(newTip);
    setIsCustomTip(false);
  };

  const handleCustomTipChange = () => {
    setIsCustomTip(true);
    setSelectedTip(undefined);
  };

  useEffect(() => {
    console.log(bill);
  }, [bill]);

  return {
    bill,
    selectedTip,
    isCustomTip,
    handleBillChange,
    handleCustomTipChange,
    handleSelectedTipChange,
  };
}
