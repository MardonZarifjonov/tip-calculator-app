import classNames from 'classnames';

export type CardProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export function Card({ children, className }: CardProps) {
  const cardClassName = classNames('bg-white', 'rounded-xl', 'p-8', className);

  return <div className={cardClassName}>{children}</div>;
}
