import { SideContentTemplate } from "./side-content.template";
import { SideContentComponentProps } from "./side-content.types";

export function SideContent({children, ...rest} : SideContentComponentProps) {
  return (
    <SideContentTemplate {...rest}>
      {children}
    </SideContentTemplate>
  )
}