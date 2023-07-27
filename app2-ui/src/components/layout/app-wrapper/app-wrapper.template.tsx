import { AppWrapperTemplateProps } from "./app-wrapper.types";

export function AppWrapperTemplate({ children }:AppWrapperTemplateProps) {
  return (
    <div className="flex flex-1 w-full">
      { children }
    </div>
  )
}