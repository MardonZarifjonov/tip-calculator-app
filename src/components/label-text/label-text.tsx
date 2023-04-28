import classNames from 'classnames';

export type LabelTextProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>;

export function LabelText({ children, className, ...props }: LabelTextProps) {
  const textClassName = classNames('text-label-color text-base', className);

  return (
    <p className={textClassName} {...props}>
      {children}
    </p>
  );
}
