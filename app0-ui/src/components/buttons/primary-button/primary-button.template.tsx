import { IPrimaryButtonTemaplateProps } from "./primary-button.types";

export function PrimaryButtonTemplate({onClick, children, ...rest}: IPrimaryButtonTemaplateProps) {
  return (
    <button 
      data-testid='primary-button' 
      onClick={onClick} 
      className='bg-blue-500 text-zinc-50 rounded-md px-8 py-2 hover:bg-blue-600' 
      {...rest}
    >
      {children}
    </button>
  )
}