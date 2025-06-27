import type React from 'react';

type DefautInputProps = {
  labelText?: string;
  name: string;
  id: string;
} & React.ComponentProps<'input'>;

export default function DefautInput({
  labelText,
  type,
  name,
  id,
  ...rest
}: DefautInputProps) {
  return (
    <>
      {labelText && <label htmlFor={id}>{labelText}</label>}
      <input
        type={type}
        name={name}
        id={id}
        {...rest}
        className='border-b outline-none border-b-primary border border-transparent text-center text-text-default placeholder:text-gray-500 placeholder:italic p-1 focus:border focus:border-primary focus:rounded-lg transition-all duration-100 ease-in-out disabled:border-b-disabled disabled:text-text-muted '
      />
    </>
  );
}
