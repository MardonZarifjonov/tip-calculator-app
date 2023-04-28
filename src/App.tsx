import Card from 'components/card';
import Input from 'components/input';
import LabelText from 'components/label-text';
import DollarIcon from 'assets/images/icon-dollar.svg';

export default function App() {
  return (
    <main className='w-screen h-screen grid place-items-center'>
      <Card>
        <LabelText>Bill</LabelText>
        <Input icon={<img src={DollarIcon} alt='dollar icon' />} />
      </Card>
    </main>
  );
}
