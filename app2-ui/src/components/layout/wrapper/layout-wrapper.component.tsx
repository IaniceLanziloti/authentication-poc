import { LayoutWrapperTemplate } from "./layout-wrapper.template";
import { LayoutWrapperComponentProps } from "./layout-wrapper.types";

export function LayoutWrapper({children, ...rest}: LayoutWrapperComponentProps) {
  return (
    <LayoutWrapperTemplate {...rest}>
      {children}
    </LayoutWrapperTemplate>
  )
}