import { DropdownContentTemplateProps } from "./dropdown-content.types";

export function DropdownContentTemplate({ children, ...rest }:DropdownContentTemplateProps) {
  return (
    <div className="z-10 absolute top-full right-0 w-44 hidden group-hover:block rounded-lg shadow bg-gray-700 divide-y divide-gray-600" {...rest}>
      { children }
    </div>
  )
}