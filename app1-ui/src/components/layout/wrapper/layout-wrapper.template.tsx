import { LayoutWrapperTemplateProps } from "./layout-wrapper.types";

export function LayoutWrapperTemplate({children, ...rest}:LayoutWrapperTemplateProps) {
  return (
    <div className="flex flex-col h-screen" {...rest}>
      {children}
    </div>
  )
}