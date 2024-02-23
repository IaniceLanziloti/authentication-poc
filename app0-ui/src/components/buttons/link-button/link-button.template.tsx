import { ILinkButtonTemplateProps } from "./link-button.types";

export function LinkButton({children, ...rest} : ILinkButtonTemplateProps) {
  return (
    <a data-testid='link-button' className='hover:text-cyan-300' {...rest}>
      {children}
    </a>
  )
}