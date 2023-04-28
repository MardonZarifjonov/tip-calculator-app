import classNames from 'classnames';

export type CardTipProps = {
  percent: number;
};

export function CardTip({ percent }: CardTipProps) {
  const cardTipClassNames = classNames(
    'rounded-md',
    'bg-dark-cyan-1',
    'text-light-cyan-1',
    'grid',
    'place-items-center',
    'py-2',
    'max-w-tip',
    'cursor-pointer',
    'transition',
    'hover:bg-primary-color',
    'hover:text-dark-cyan-1'
  );

  return <div className={cardTipClassNames}>{percent}&#37;</div>;
}
