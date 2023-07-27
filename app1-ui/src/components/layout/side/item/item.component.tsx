import { SideItemTemplate } from "./item.template";
import { SideItemComponentProps } from "./side-item.types";

export function SideItem({children, ...rest}:SideItemComponentProps) {
  return (
    <SideItemTemplate {...rest}>
      {children}
    </SideItemTemplate>
  )
}