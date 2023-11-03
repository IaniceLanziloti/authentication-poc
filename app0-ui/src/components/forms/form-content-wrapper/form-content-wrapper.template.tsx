import { HTMLAttributes } from "react"

export function FormContentWrapper ({ children }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div data-testid='form-content-wrapper' className="flex flex-col">
      { children }
    </div>
  )
}