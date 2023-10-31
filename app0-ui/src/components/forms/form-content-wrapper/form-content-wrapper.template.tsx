import { HTMLAttributes } from "react"

export function FormContentWrapper ({ children }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="flex flex-col">
      { children }
    </div>
  )
}