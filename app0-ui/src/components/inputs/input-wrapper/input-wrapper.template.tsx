import { IInputWrapperProps } from "./input-wrapper.types";

export function InputWrapper({children, ...rest}: IInputWrapperProps) {
  return (
    <div 
      data-testid ='input-wrapper'
      className="flex flex-col p-2 gap-1" 
      {...rest}
    >
      { children }
    </div>
  )
}