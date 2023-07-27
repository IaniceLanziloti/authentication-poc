import { DropdownItemTemplate } from "./dropdown-item.template";
import { DropdownItemComponentProps } from "./dropdown-item.types";

export function DropdownItem({children, ...rest}: DropdownItemComponentProps) {
  return (
    <DropdownItemTemplate {...rest}>
      {children}
    </DropdownItemTemplate>
  )
}