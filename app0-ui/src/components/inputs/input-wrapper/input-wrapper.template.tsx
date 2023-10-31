import { IInputWrapperProps } from "./input-wrapper.types";

export function InputWrapper({children, ...rest}: IInputWrapperProps) {
  return (
    <div className="flex flex-col p-2 gap-1" {...rest}>
      { children }
    </div>
  )
}