import { HTMLAttributes } from "react";

export function FormActionsWrapper ({ children }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className='flex flex-col items-center gap-4 mt-8'>
      {children}
    </div>
  )
}