import { InputLabelProps } from "./input-label.types";

export function InputLabel({ children, ...rest }:InputLabelProps) {
  return (
    <label 
      data-testid='input-label'
      {...rest}
    >
      {children}
    </label>
  )
}