import { AppWrapperTemplate } from "./app-wrapper.template";
import { AppWrapperComponentProps } from "./app-wrapper.types";

export function AppWrapper({ children, ...rest }: AppWrapperComponentProps ) {
  return (
    <AppWrapperTemplate {...rest} >
      { children }
    </AppWrapperTemplate>
  )

}