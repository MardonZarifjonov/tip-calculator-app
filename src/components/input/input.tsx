import classNames from 'classnames';
import { ReactNode, useEffect, useState } from 'react';

export type InputProps = Omit<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >,
  'onChange'
> & {
  icon?: ReactNode;
  wrapperClassName?: string;
  onChange?: (value: number) => void;
  hideErrorText?: boolean;
};

export function Input({
  className,
  icon,
  wrapperClassName,
  value,
  onChange,
  onBlur,
  hideErrorText,
  ...props
}: InputProps) {
  const valueNumber = Number(value);
  const [error, setError] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const inputWrapperClassNames = classNames(
    'flex',
    'items-center',
    'gap-[5px]',
    'bg-light-cyan-2',
    'rounded-md',
    'px-4',
    'py-2',
    'border-2',
    'transition',
    'relative',
    'h-element-mobile sm:h-element-desktop',
    {
      'border-error-color': error,
      'focus-within:border-primary-color': !error,
    },
    wrapperClassName
  );

  const inputClassNames = classNames(
    'bg-light-cyan-2',
    'text-md',
    'w-full',
    {
      'text-dark-cyan-1': (valueNumber || 0) > 0,
      'text-label-color': valueNumber === 0,
    },
    'outline-0',
    className
  );

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const numberValue = Number(event.target.value);
    if (!numberValue && numberValue !== 0) {
      event.preventDefault();

      return;
    }
    onChange && onChange(numberValue);
  };

  const handleBlur: InputProps['onBlur'] = (event) => {
    if (valueNumber <= 0) {
      setIsTouched(true);
    }
    onBlur && onBlur(event);
  };

  useEffect(() => {
    if (valueNumber === 0 && isTouched) {
      setError(true);
    } else {
      setError(false);
    }
  }, [isTouched, valueNumber]);

  return (
    <div className={inputWrapperClassNames}>
      {icon && <span>{icon}</span>}
      {error && !hideErrorText && (
        <p className='absolute text-base text-error-color top-[-34px] right-0'>
          Can&apos;t be zero
        </p>
      )}
      <input
        className={inputClassNames}
        dir='rtl'
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        {...props}
      />
    </div>
  );
}
