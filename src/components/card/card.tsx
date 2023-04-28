import classNames from 'classnames';

export type CardProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export function Card({ children, className }: CardProps) {
  const cardClassName = classNames('rounded-3xl', 'p-7', className);

  return <div className={cardClassName}>{children}</div>;
}
