import { formatDollarCurrency } from 'utils';

export type ViewAmountProps = {
  title: string;
  per?: string;
  amount: number;
};

export function ViewAmount({ title, per = 'person', amount }: ViewAmountProps) {
  return (
    <div className='flex justify-between items-center'>
      <div className='flex flex-col gap-1'>
        <p className='text-light-cyan-1 text-base'>{title}</p>
        <span className='text-sm text-dark-cyan-2'>&#47; {per}</span>
      </div>
      <p className='text-5xl text-primary-color'>
        {formatDollarCurrency(amount)}
      </p>
    </div>
  );
}
