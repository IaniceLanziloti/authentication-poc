import { DropdownGroupTemplate } from "./dropdown-group.template";
import { DropdownGroupComponentProps } from "./dropdown-group.types";

export function DropdownGroup({ children, ...rest }:DropdownGroupComponentProps) {
  return (
    <DropdownGroupTemplate {...rest} >
      {children}
    </DropdownGroupTemplate>
  )
}