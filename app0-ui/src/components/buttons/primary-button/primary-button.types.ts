import { ButtonHTMLAttributes } from "react";

export type IPrimaryButtonTemaplateProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?(): Promise<void> | void
}

export type IPrimaryButtonProps = IPrimaryButtonTemaplateProps & {
  onClick?(): Promise<void> | void
  loadingText?: string
}