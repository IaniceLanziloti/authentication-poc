import { DropdownWrapperTemplate } from "./dropdown-wrapper.template";
import { DropdownWrapperComponentProps } from "./dropdown-wrapper.types";

export function DropdownWrapper({children, ...rest}:DropdownWrapperComponentProps) {
  return (
    <DropdownWrapperTemplate {...rest}>
      { children }
    </DropdownWrapperTemplate>
  )
}