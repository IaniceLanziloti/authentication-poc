import { forwardRef } from "react";
import { IInputProps } from "./input.types";

function InputBaseTemplate(props:IInputProps, ref:React.LegacyRef<HTMLInputElement>) {
  return (
    <input 
      data-testid= "input-template"
      className="
        bg-zinc-50 
        border 
        border-gray-300
        text-gray-900
        text-sm
        rounded-lg
        focus:ring-blue-300
        focus:border-blue-300
        block
        w-full
        p-2.5
      "
      {...props} 
      ref={ref}
    />
  )
}


export const InputTemplate = forwardRef(InputBaseTemplate)