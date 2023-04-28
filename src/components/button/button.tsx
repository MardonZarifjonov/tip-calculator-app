import classNames from 'classnames';

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export function Button({ children, disabled, ...props }: ButtonProps) {
  const buttonClassNames = classNames(
    'w-full',
    'rounded-md',
    'text-dark-cyan-1',
    'py-3',
    'uppercase',
    'text-lg',
    'transition',
    'active:opacity-70',
    'bg-primary-color',
    'hover:cursor-pointer',
    { 'opacity-20 pointer-events-none	': disabled }
  );

  return (
    <button className={buttonClassNames} disabled={disabled} {...props}>
      {children}
    </button>
  );
}
