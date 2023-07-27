import { DropdownContentTemplate } from "./dropdown-content.template";
import { DropdownContentComponentProps } from "./dropdown-content.types";

export function DropdownContent({children, ...rest}:DropdownContentComponentProps) {
  return (
    <DropdownContentTemplate {...rest}>
      { children }
    </DropdownContentTemplate>
  )
}