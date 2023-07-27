import React from 'react'

import { InputLabelProps } from "./input-label.types";

export function InputLabel({children, ...rest}:InputLabelProps) {
  return (
    <label {...rest}>
      {children}
    </label>
  )
}