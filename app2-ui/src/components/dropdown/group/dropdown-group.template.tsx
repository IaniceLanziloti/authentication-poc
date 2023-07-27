import { DropdownGroupTemplateProps } from "./dropdown-group.types";

export function DropdownGroupTemplate({children, ...rest}:DropdownGroupTemplateProps) {
  return (
    <ul className="py-2 text-sm text-zinc-300" {...rest}>
      {children}
    </ul>
  )
}