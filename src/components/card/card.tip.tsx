import classNames from 'classnames';
import { CardProps } from './card';

export type CardTipProps = CardProps & {
  percent: number;
  selected?: boolean;
};

export function CardTip({
  percent,
  className,
  selected,
  ...props
}: CardTipProps) {
  const cardTipClassNames = classNames(
    'rounded-md',
    'bg-dark-cyan-1',
    'grid',
    'place-items-center',
    'py-2',
    'sm:max-w-tip',
    'cursor-pointer',
    'transition',
    'hover:bg-primary-color',
    'hover:text-dark-cyan-1',
    'h-element-mobile sm:h-element-desktop',
    {
      'bg-primary-color text-dark-cyan-1': selected,
      'text-light-cyan-1': !selected,
    },
    className
  );

  return (
    <div className={cardTipClassNames} {...props}>
      {percent}&#37;
    </div>
  );
}
