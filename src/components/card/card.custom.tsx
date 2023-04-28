import classNames from 'classnames';
import { CardProps } from './card';

export type CardCustomProps = CardProps & {
  isShow?: boolean;
};

export function CardCustom({
  isShow,
  className,
  children,
  ...props
}: CardCustomProps) {
  const cardCustomClassNames = classNames(
    'rounded-md',
    'grid',
    'place-items-center',
    'max-w-tip',
    'cursor-pointer',
    'transition',
    'bg-light-cyan-2',
    'h-element',
    className
  );

  return (
    <div className={cardCustomClassNames} {...props}>
      {isShow ? children : <p className='text-dark-cyan-2'>Custom</p>}
    </div>
  );
}
