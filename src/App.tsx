import Card, { CardTip } from 'components/card';
import Input from 'components/input';
import LabelText from 'components/label-text';
import DollarIcon from 'assets/images/icon-dollar.svg';

export default function App() {
  return (
    <main className='w-screen h-screen grid place-items-center'>
      <Card>
        <LabelText>Bill</LabelText>
        <Input
          icon={<img src={DollarIcon} alt='dollar icon' />}
          wrapperClassName='my-2'
        />
        <LabelText>Select Tip &#37;</LabelText>
        <div className='grid grid-cols-tips gap-4'>
          <CardTip percent={5} />
          <CardTip percent={10} />
          <CardTip percent={15} />
          <CardTip percent={25} />
          <CardTip percent={50} />
          <Input wrapperClassName='my-0' hideErrorText />
        </div>
      </Card>
    </main>
  );
}
