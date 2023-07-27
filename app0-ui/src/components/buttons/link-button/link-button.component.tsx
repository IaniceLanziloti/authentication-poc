import { LinkHTMLAttributes } from "react";

export function LinkButton({children, ...rest} : LinkHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className='hover:text-cyan-300' {...rest}> { children }</a>
  )
}