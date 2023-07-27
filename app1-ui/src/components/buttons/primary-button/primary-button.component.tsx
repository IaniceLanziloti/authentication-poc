import { ButtonHTMLAttributes } from "react";

export function PrimaryButton({children, ...rest}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className='bg-blue-500 text-zinc-50 rounded-md px-8 py-2 hover:bg-blue-600' {...rest}>
      {children}
    </button>
  )
}