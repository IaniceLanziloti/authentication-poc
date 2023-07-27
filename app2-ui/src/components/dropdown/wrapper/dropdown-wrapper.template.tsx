import { DropdownWrapperTemplateProps } from "./dropdown-wrapper.types";

export function DropdownWrapperTemplate({ children, ...rest }:DropdownWrapperTemplateProps) {
  return (
    <div className="group flex items-center relative cursor-pointer" {...rest}> 
      { children }
    </div>
  )
}