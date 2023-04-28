import Card, { CardCustom, CardTip } from 'components/card';
import Input from 'components/input';
import LabelText from 'components/label-text';
import DollarIcon from 'assets/images/icon-dollar.svg';
import { useCalculator } from 'hooks';
import { tips } from 'constants';

export default function App() {
  const {
    bill,
    selectedTip,
    isCustomTip,
    handleBillChange,
    handleCustomTipChange,
    handleSelectedTipChange,
  } = useCalculator();

  return (
    <main className='w-screen h-screen grid place-items-center'>
      <Card>
        <LabelText>Bill</LabelText>
        <Input
          icon={<img src={DollarIcon} alt='dollar icon' />}
          wrapperClassName='my-2'
          value={bill}
          onChange={handleBillChange}
        />
        <LabelText>Select Tip &#37;</LabelText>
        <div className='grid grid-cols-tips gap-4'>
          {tips.map((tip) => (
            <CardTip
              key={tip}
              percent={tip}
              onClick={() => handleSelectedTipChange(tip)}
              selected={selectedTip === tip}
            />
          ))}
          <CardCustom isShow={isCustomTip} onClick={handleCustomTipChange}>
            <Input
              value={selectedTip}
              wrapperClassName='my-0'
              onChange={handleSelectedTipChange}
              hideErrorText
            />
          </CardCustom>
        </div>
      </Card>
    </main>
  );
}
