import { SideContentTemplateProps } from "./side-content.types";

export function SideContentTemplate({children, ...rest}:SideContentTemplateProps) {
  return (
    <aside className="flex flex-col w-80 bg-slate-800 border-r border-r-slate-950 p-6 gap-2" {...rest}>
      {children}
    </aside>
  )
}