import { ContentWrapperTemplate } from "./content-wrapper.template";
import { ContentWrapperComponentProps } from "./content-wrapper.types";

export function ContentWrapper({children, ...rest}: ContentWrapperComponentProps) {
  return (
    <ContentWrapperTemplate {...rest}>
      {children}
    </ContentWrapperTemplate>
  )
}