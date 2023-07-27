import { DropdownItemTemplateProps } from "./dropdown-item.types";

export function DropdownItemTemplate({ children,...rest }:DropdownItemTemplateProps) {
  return (
    <li className="cursor-pointer">
      <a  className="block px-4 py-2  hover:bg-gray-600 hover:text-white" {...rest}>{children}</a>
    </li>
  )
}