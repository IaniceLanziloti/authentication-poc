import { forwardRef } from "react";
import { IInputProps } from "./input.types";

function InputBaseComponent(props:IInputProps, ref:any) {
  return (
    <input className="bg-zinc-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-300 focus:border-blue-300 block w-full p-2.5 "  {...props} ref={ref}/>
  )
}


export const InputComponent = forwardRef(InputBaseComponent)