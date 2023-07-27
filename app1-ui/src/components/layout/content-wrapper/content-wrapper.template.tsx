import { ContentWrapperTemplateProps } from "./content-wrapper.types";

export function ContentWrapperTemplate({children, ...rest}: ContentWrapperTemplateProps) {
  return (
    <div className="flex flex-1" {...rest}>
      {children}
    </div>
  )
}