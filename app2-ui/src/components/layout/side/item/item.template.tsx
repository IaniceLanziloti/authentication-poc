import { SideItemTemplateProps } from "./side-item.types";

export function SideItemTemplate({children, ...rest}:SideItemTemplateProps) {
  return (
    <a className="text-slate-300 text-lg cursor-pointer" {...rest}> {children} </a>
  )
}