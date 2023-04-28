import classNames from 'classnames';
import { PropsWithChildren } from 'react';

export type CardProps = PropsWithChildren<{
  className?: string;
}>;

export function Card({ children, className }: CardProps) {
  const cardClassName = classNames('bg-white rounded-xl p-8', className);

  return <div className={cardClassName}>{children}</div>;
}
