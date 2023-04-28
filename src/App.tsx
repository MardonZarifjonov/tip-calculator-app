import Card, { CardCustom, CardTip } from 'components/card';
import Input from 'components/input';
import LabelText from 'components/label-text';
import DollarIcon from 'assets/images/icon-dollar.svg';
import PersonIcon from 'assets/images/icon-person.svg';

import { useCalculator } from 'hooks';
import { tips } from 'constants';
import ViewAmount from 'components/view-amount';
import Button from 'components/button';

export default function App() {
  const {
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
  } = useCalculator();

  return (
    <main className='w-screen h-screen grid place-items-center'>
      <Card className='bg-white grid grid-cols-2 gap-10'>
        <div>
          <LabelText>Bill</LabelText>
          <Input
            icon={<img src={DollarIcon} alt='dollar icon' />}
            wrapperClassName='mt-2 mb-8'
            value={bill}
            onChange={handleBillChange}
          />
          <LabelText className='mb-2'>Select Tip &#37;</LabelText>
          <div className='grid grid-cols-tips gap-4 mb-8'>
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
          <LabelText>Number of People</LabelText>
          <Input
            icon={<img src={PersonIcon} alt='person icon' />}
            wrapperClassName='my-2'
            value={peopleNumber}
            onChange={handlePeopleNumberChange}
          />
        </div>
        <Card className='bg-dark-cyan-1 flex flex-col justify-between'>
          <div className='flex flex-col gap-10'>
            <ViewAmount title='Tip Amount' amount={result.tipAmount} />
            <ViewAmount title='Total' amount={result.totalAmount} />
          </div>
          <Button onClick={handleResultReset} disabled={!canReset}>
            Reset
          </Button>
        </Card>
      </Card>
    </main>
  );
}
